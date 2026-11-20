#!/usr/bin/env node
/*
 * Checks the tags of every math problem against data/tags.json.
 *
 *   node tools/validate-tags.js            list every problem with errors or warnings
 *   node tools/validate-tags.js --errors   list errors only
 *   node tools/validate-tags.js --summary  counts only
 *   node tools/validate-tags.js class-9    only files whose path contains "class-9"
 *
 * Errors   = something is missing or not defined in tags.json (must be fixed).
 * Warnings = allowed but worth a look (e.g. an unreviewed problem without topics).
 * Exits with code 1 if there are errors.
 */
"use strict";
const { TAG_FIELDS, loadTags, listMathQuizzes } = require("./tags-lib");

const args = process.argv.slice(2);
const ERRORS_ONLY = args.includes("--errors");
const SUMMARY = args.includes("--summary");
const filter = args.find(a => !a.startsWith("--"));

const T = loadTags();
const isStrArray = v => Array.isArray(v) && v.every(x => typeof x === "string");

function check(p, grade) {
  const errors = [], warnings = [];
  for (const f of TAG_FIELDS) if (!(f in p)) errors.push(`missing field "${f}"`);

  if ("area" in p && !T.areas.has(p.area)) errors.push(`unknown area "${p.area}"`);

  if ("topics" in p) {
    if (!isStrArray(p.topics)) errors.push("topics must be an array of topic ids");
    else {
      if (!p.topics.length) (p.tagsReviewed ? errors : warnings).push("no topics");
      for (const id of p.topics) {
        const t = T.topics.get(id);
        if (!t) { errors.push(`unknown topic "${id}"`); continue; }
        if (!T.leaves.has(id)) errors.push(`topic "${id}" is a group — use its most specific subtopic`);
        if (t.grades.length && Math.min(...t.grades) > grade) warnings.push(`topic "${id}" is taught from grade ${Math.min(...t.grades)}`);
      }
      const known = p.topics.map(id => T.topics.get(id)).filter(Boolean);
      if (known.length && T.areas.has(p.area) && !known.some(t => t.area === p.area))
        errors.push(`none of the topics belongs to area "${p.area}"`);
    }
  }

  if ("grade" in p) {
    if (!T.grades.has(p.grade)) errors.push(`invalid grade ${JSON.stringify(p.grade)}`);
    else if (p.grade !== grade) errors.push(`grade ${p.grade} but the file is in class-${grade}`);
  }
  if ("difficulty" in p && !T.difficulties.has(p.difficulty)) errors.push(`invalid difficulty ${JSON.stringify(p.difficulty)}`);

  if ("type" in p) {
    if (!isStrArray(p.type)) errors.push("type must be an array");
    else p.type.filter(x => !T.types.has(x)).forEach(x => errors.push(`unknown type "${x}"`));
  }
  if ("method" in p) {
    if (!isStrArray(p.method)) errors.push("method must be an array");
    else p.method.filter(x => !T.methods.has(x)).forEach(x => errors.push(`unknown method "${x}"`));
  }

  if ("source" in p) {
    const s = p.source;
    if (!s || typeof s !== "object" || Array.isArray(s)) errors.push("source must be { book, section, number }");
    else {
      if (typeof s.book !== "string") errors.push("source.book must be a string");
      if (typeof s.section !== "string") errors.push("source.section must be a string");
      if (!(s.number === null || typeof s.number === "number" || typeof s.number === "string")) errors.push("source.number must be a number, text or null");
    }
  }
  if ("tagsReviewed" in p && typeof p.tagsReviewed !== "boolean") errors.push("tagsReviewed must be true or false");
  return { errors, warnings };
}

let nProblems = 0, nErr = 0, nWarn = 0, nReviewed = 0;
const lines = [];
for (const q of listMathQuizzes()) {
  if (filter && !q.file.includes(filter)) continue;
  q.problems.forEach((p, i) => {
    nProblems++;
    if (p.tagsReviewed === true) nReviewed++;
    const { errors, warnings } = check(p, q.grade);
    if (errors.length) nErr++;
    if (warnings.length) nWarn++;
    const shown = ERRORS_ONLY ? errors.map(e => "ERROR   " + e) : [...errors.map(e => "ERROR   " + e), ...warnings.map(w => "warning " + w)];
    if (shown.length && !SUMMARY) lines.push(`${q.file} #${i + 1}\n` + shown.map(s => "   " + s).join("\n"));
  });
}
if (lines.length) console.log(lines.join("\n"));
console.log(`\n${nProblems} problems checked: ${nErr} with errors, ${nWarn} with warnings, ${nReviewed} reviewed (tagsReviewed: true).`);
process.exit(nErr ? 1 : 0);
