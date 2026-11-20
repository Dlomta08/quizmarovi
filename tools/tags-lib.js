/*
 * Shared helpers for the tag tools (validate-tags.js, auto-tag.js, build-problem-index.js).
 * Plain Node, no dependencies.
 */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const TAGS_FILE = path.join(ROOT, "data", "tags.json");
const MATH_DIR = "quizzes"; // the tag system covers math only

/** The tag fields, in the order they are written into each problem. */
const TAG_FIELDS = ["area", "topics", "grade", "difficulty", "type", "method", "source", "tagsReviewed"];

/* ------------------------------------------------------------------ tags.json */

function loadTags() {
  const raw = JSON.parse(fs.readFileSync(TAGS_FILE, "utf8"));
  const topics = new Map();   // id -> { id, ka, area, grades, parent, children[] }
  (function walk(nodes, parent, area) {
    for (const n of nodes) {
      const a = n.area || area;
      topics.set(n.id, { id: n.id, ka: n.ka, area: a, grades: n.grades || [], parent: parent ? parent.id : null,
                         children: (n.children || []).map(c => c.id) });
      if (n.children && n.children.length) walk(n.children, n, a);
    }
  })(raw.topics, null, null);
  const leaves = new Set([...topics.values()].filter(t => !t.children.length).map(t => t.id));
  return {
    raw,
    topics,
    leaves,
    areas: new Set(raw.area.map(a => a.id)),
    grades: new Set(raw.grade),
    difficulties: new Set(raw.difficulty.map(d => d.id)),
    types: new Set(raw.type.map(t => t.id)),
    methods: new Set(raw.method.map(m => m.id)),
  };
}

/* ------------------------------------------------------------------ quiz files */

function evalQuiz(source) {
  const s = source.replace(/^﻿/, "").replace(/^\s*(?:const|let|var)\s+quizData\s*=/m, "quizData =");
  if (!s.trim()) return [];
  const data = new Function("let quizData;\n" + s + "\n;return quizData;")();
  return Array.isArray(data) ? data : [];
}

/** Every math quiz file: { file (relative), grade, year, quiz, source, problems[] } */
function listMathQuizzes() {
  const out = [];
  const base = path.join(ROOT, MATH_DIR);
  for (const cls of fs.readdirSync(base).filter(n => /^class-\d+$/.test(n)).sort((a, b) => parseInt(a.slice(6)) - parseInt(b.slice(6)))) {
    const grade = Number(cls.slice(6));
    for (const year of fs.readdirSync(path.join(base, cls)).filter(n => /^\d{4}-\d{2}$/.test(n)).sort()) {
      for (const f of fs.readdirSync(path.join(base, cls, year)).filter(n => /^quiz-\d+\.js$/.test(n))
                         .sort((a, b) => parseInt(a.slice(5)) - parseInt(b.slice(5)))) {
        const rel = `${MATH_DIR}/${cls}/${year}/${f}`;
        const source = fs.readFileSync(path.join(ROOT, rel), "utf8");
        out.push({ file: rel, grade, year, quiz: parseInt(f.slice(5)), source, problems: evalQuiz(source) });
      }
    }
  }
  return out;
}

/* ------------------------------------------------------------------ source editing */

/**
 * Finds the top-level problem objects inside `quizData = [ ... ]` and returns
 * [{ start, end }] where start is the index of "{" and end the index of the matching "}".
 * Skips strings, template literals and comments, so braces inside text are ignored.
 */
function findProblemObjects(source) {
  const m = /quizData\s*=\s*\[/.exec(source);
  if (!m) return [];
  const objects = [];
  let i = m.index + m[0].length;
  let depth = 0;          // depth inside the top-level array
  let start = -1;
  const n = source.length;
  while (i < n) {
    const c = source[i], d = source[i + 1];
    if (c === "/" && d === "/") { i = source.indexOf("\n", i); if (i < 0) break; continue; }
    if (c === "/" && d === "*") { i = source.indexOf("*/", i + 2); if (i < 0) break; i += 2; continue; }
    if (c === '"' || c === "'" || c === "`") {
      i++;
      while (i < n && source[i] !== c) { if (source[i] === "\\") i++; i++; }
      i++; continue;
    }
    if (c === "{" || c === "[") {
      if (depth === 0 && c === "{") start = i;
      depth++;
    } else if (c === "}" || c === "]") {
      if (depth === 0) break;           // end of quizData array
      depth--;
      if (depth === 0 && c === "}") objects.push({ start, end: i });
    }
    i++;
  }
  return objects;
}

/** One line per tag field, e.g.  area: "algebra", */
function formatTagLines(tags, indent, nl) {
  return TAG_FIELDS.filter(k => k in tags)
    .map(k => `${indent}${k}: ${JSON.stringify(tags[k])}`)
    .join("," + nl);
}

/** Removes previously written tag lines (only lines this tool writes: one field per line). */
const TAG_LINE_RE = new RegExp(`^[ \\t]*(?:${TAG_FIELDS.join("|")}):[^\\n]*\\n`, "gm");

/**
 * Returns new source where object k gets the fields tagsList[k] (object or null to leave alone).
 * Existing tag lines in those objects are replaced. Everything else is kept byte for byte.
 */
function writeTags(source, tagsList) {
  const nl = source.includes("\r\n") ? "\r\n" : "\n";
  const objects = findProblemObjects(source);
  if (objects.length !== tagsList.length) throw new Error(`found ${objects.length} objects, expected ${tagsList.length}`);
  let out = source;
  for (let k = objects.length - 1; k >= 0; k--) {       // back to front so indices stay valid
    const tags = tagsList[k];
    if (!tags) continue;
    const { start, end } = objects[k];
    let body = out.slice(start + 1, end).replace(TAG_LINE_RE, "");
    const indentMatch = /\n([ \t]+)\S/.exec(body);
    const indent = indentMatch ? indentMatch[1] : "    ";
    // last meaningful character of the body (ignoring trailing whitespace)
    let trimmed = body.replace(/[\s]+$/, "");
    const closingIndent = body.slice(trimmed.length);    // whitespace before "}"
    // If the last line ends with a // comment, the comma must go before the comment.
    const lastLineStart = trimmed.lastIndexOf("\n") + 1;
    const lastLine = trimmed.slice(lastLineStart);
    const commentAt = lastLine.search(/\s*\/\/(?![^"]*"\s*[,}]?\s*$)/);
    const code = commentAt >= 0 ? lastLine.slice(0, commentAt) : lastLine;
    const comment = commentAt >= 0 ? lastLine.slice(commentAt) : "";
    const needsComma = code.trim().length > 0 && !/[,{]\s*$/.test(code);
    trimmed = trimmed.slice(0, lastLineStart) + code + (needsComma ? "," : "") + comment;
    const lines = formatTagLines(tags, indent, nl);
    // keep the indentation of the closing "}" (drop stray trailing spaces before its line break)
    const closing = closingIndent.includes("\n") ? nl + closingIndent.slice(closingIndent.lastIndexOf("\n") + 1) : nl + indent.slice(0, -2);
    body = trimmed + nl + lines + closing;
    out = out.slice(0, start + 1) + body + out.slice(end);
  }
  return out;
}

/* ------------------------------------------------------------------ text helpers */

/** All visible text of a problem, for keyword matching. */
function problemText(p) {
  return [p.intro, p.task, p.question].filter(x => typeof x === "string").join(" ");
}

module.exports = { ROOT, MATH_DIR, TAG_FIELDS, loadTags, evalQuiz, listMathQuizzes, findProblemObjects, writeTags, problemText };
