#!/usr/bin/env node
/*
 * Checks the theory pages (theory/<topic-id>.md) against data/tags.json and the page template.
 *
 *     node tools/validate-theory.js                  all topics (missing files are errors)
 *     node tools/validate-theory.js algebra          only one area (or several: algebra geometry)
 *     node tools/validate-theory.js quadratic-eq     only these topics / topic groups
 *     node tools/validate-theory.js --errors         hide warnings
 *
 * Errors (exit code 1):
 *   - a topic in scope has no file; a file in theory/ matches no topic
 *   - front matter: missing/unknown fields, id ≠ file name, area/group not as in tags.json,
 *     grades not in 7–11, reviewed not true/false
 *   - prerequisites/next: unknown id, the topic itself, duplicates, a loop in prerequisites
 *   - sections missing or out of order, unknown "##" headings
 *   - not exactly 3 examples each with one :::solution, or 3 :::check each with one :::answer
 *   - broken ::: blocks, a stray "$", an unescaped "%" in a formula, or a formula KaTeX can't render
 * Warnings: word count outside 400–900, example levels not მარტივი → საშუალო → რთული,
 *   grades different from tags.json, a prerequisite/next with no theory file yet.
 */
const fs = require("fs");
const path = require("path");
const TheoryLib = require("../theory-lib.js");
const { topicList } = require("./build-theory-index.js");

let katex = null;
try { katex = require("katex"); } catch (e) { /* optional: npm install (devDependency) */ }

const ROOT = path.resolve(__dirname, "..");
const DIR = path.join(ROOT, "theory");
const args = process.argv.slice(2);
const onlyErrors = args.includes("--errors");
const scopeArgs = args.filter(a => !a.startsWith("--"));

const tags = JSON.parse(fs.readFileSync(path.join(ROOT, "data/tags.json"), "utf8"));
const topics = topicList(tags);
const byId = new Map(topics.map(t => [t.id, t]));
const areaIds = new Set(tags.area.map(a => a.id));
const groupIds = new Set(tags.topics.map(g => g.id));

for (const a of scopeArgs) {
  if (!areaIds.has(a) && !groupIds.has(a) && !byId.has(a)) {
    console.error(`unknown area/group/topic: ${a}`);
    process.exit(2);
  }
}
const inScope = t => !scopeArgs.length || scopeArgs.some(a => a === t.area || a === t.group || a === t.id);

const problems = {};   // file id -> { errors: [], warnings: [] }
const report = (id, kind, msg) => {
  problems[id] = problems[id] || { errors: [], warnings: [] };
  problems[id][kind].push(msg);
};
const err = (id, msg) => report(id, "errors", msg);
const warn = (id, msg) => report(id, "warnings", msg);

// ---------------------------------------------------------------- files
const files = fs.existsSync(DIR) ? fs.readdirSync(DIR).filter(f => f.endsWith(".md")) : [];
files.forEach(f => { if (!byId.has(f.slice(0, -3))) err(f, "no topic with this id in data/tags.json"); });
const scoped = topics.filter(inScope);
const missing = scoped.filter(t => !files.includes(t.id + ".md"));
missing.forEach(t => err(t.id, "theory file is missing"));

const docs = new Map();
scoped.filter(t => files.includes(t.id + ".md")).forEach(t => {
  docs.set(t.id, TheoryLib.parse(fs.readFileSync(path.join(DIR, t.id + ".md"), "utf8")));
});
// prerequisites of every existing file, for the loop check
const prereqOf = new Map();
files.forEach(f => {
  const id = f.slice(0, -3);
  const doc = docs.get(id) || TheoryLib.parse(fs.readFileSync(path.join(DIR, f), "utf8"));
  prereqOf.set(id, Array.isArray(doc.meta.prerequisites) ? doc.meta.prerequisites : []);
});

// ---------------------------------------------------------------- per file
docs.forEach((doc, id) => {
  const t = byId.get(id), m = doc.meta;
  doc.errors.forEach(e => err(id, e));

  // front matter
  TheoryLib.FIELDS.forEach(f => { if (!(f in m)) err(id, `front matter: "${f}" is missing`); });
  Object.keys(m).forEach(f => { if (!TheoryLib.FIELDS.includes(f)) err(id, `front matter: unknown field "${f}"`); });
  if ("id" in m && m.id !== id) err(id, `id "${m.id}" ≠ file name`);
  if ("title" in m && (typeof m.title !== "string" || !m.title.trim())) err(id, "title is empty");
  if ("area" in m && m.area !== t.area) err(id, `area "${m.area}" should be "${t.area}"`);
  if ("group" in m && m.group !== t.group) err(id, `group "${m.group}" should be "${t.group}"`);
  if (Array.isArray(m.grades)) {
    if (!m.grades.length) err(id, "grades is empty");
    m.grades.forEach(g => { if (!Number.isInteger(g) || g < 7 || g > 11) err(id, `grade ${g} is not 7–11`); });
    if (t.grades.length && m.grades.join() !== t.grades.join()) warn(id, `grades [${m.grades}] differ from tags.json [${t.grades}]`);
  }
  if ("reviewed" in m && typeof m.reviewed !== "boolean") err(id, "reviewed must be true or false");

  ["prerequisites", "next"].forEach(f => {
    if (!Array.isArray(m[f])) return;
    const seen = new Set();
    m[f].forEach(x => {
      if (x === id) err(id, `${f}: lists the topic itself`);
      else if (!byId.has(x)) err(id, `${f}: unknown topic "${x}"`);
      else if (!files.includes(x + ".md")) warn(id, `${f}: "${x}" has no theory file yet`);
      if (seen.has(x)) err(id, `${f}: "${x}" twice`);
      seen.add(x);
    });
  });

  // sections
  const found = doc.headings;
  const name = s => [s.ka].concat(s.alt || []);
  let pos = 0;
  TheoryLib.SECTIONS.forEach(s => {
    const i = found.findIndex(h => name(s).includes(h));
    if (i === -1) { if (s.required) err(id, `section "## ${s.ka}" is missing`); return; }
    if (i < pos) err(id, `section "## ${s.ka}" is out of order`);
    pos = i;
  });
  found.forEach(h => {
    if (!TheoryLib.SECTIONS.some(s => name(s).includes(h))) err(id, `unknown section "## ${h}"`);
  });
  if (new Set(found).size !== found.length) err(id, "a section heading appears twice");

  // blocks
  const top = doc.tree.children.filter(c => typeof c !== "string");
  const examples = top.filter(n => n.kind === "example");
  const checks = top.filter(n => n.kind === "check");
  const count = (n, kind) => n.children.filter(c => typeof c !== "string" && c.kind === kind).length;
  if (examples.length !== 3) err(id, `${examples.length} examples (need 3)`);
  if (checks.length !== 3) err(id, `${checks.length} self-check questions (need 3)`);
  examples.forEach(n => { if (count(n, "solution") !== 1) err(id, `example on line ${n.line} needs exactly one :::solution`); });
  checks.forEach(n => { if (count(n, "answer") !== 1) err(id, `check on line ${n.line} needs exactly one :::answer`); });
  const levels = examples.map(n => n.title);
  if (examples.length === 3 && levels.join() !== TheoryLib.LEVELS.join()) {
    warn(id, `example levels are "${levels.join(", ")}" (expected ${TheoryLib.LEVELS.join(" → ")})`);
  }
  (function walk(node, parent) {
    node.children.forEach(c => {
      if (typeof c === "string") return;
      if (c.kind === "solution" && parent !== "example") err(id, `line ${c.line}: :::solution outside an example`);
      if (c.kind === "answer" && parent !== "check") err(id, `line ${c.line}: :::answer outside a check`);
      if (["example", "check"].includes(c.kind) && node.kind !== "root") err(id, `line ${c.line}: :::${c.kind} inside another block`);
      walk(c, c.kind);
    });
  })(doc.tree, "root");

  // math
  doc.text.split(/\r?\n/).forEach((l, i) => {
    if (l.includes("$")) err(id, `line ${i + 1}: unpaired "$" — ${l.trim().slice(0, 60)}`);
  });
  doc.math.forEach(({ tex, display }) => {
    let depth = 0;
    for (let k = 0; k < tex.length; k++) {
      if (tex[k] === "\\") { k++; continue; }
      if (tex[k] === "{") depth++;
      if (tex[k] === "}" && --depth < 0) break;
    }
    if (/(^|[^\\])%/.test(tex)) err(id, `unescaped "%" (a TeX comment, hides the rest): ${tex} — write \\%`);
    if (depth !== 0) err(id, `unbalanced braces: ${tex}`);
    else if (katex) {
      try { katex.renderToString(tex, { displayMode: display, throwOnError: true, strict: false }); }
      catch (e) { err(id, `KaTeX: ${e.message.replace(/^KaTeX parse error: /, "")}`); }
    }
  });

  if (doc.words < 400 || doc.words > 900) warn(id, `${doc.words} words (aim for 400–900)`);
});

// ---------------------------------------------------------------- prerequisite loops
const state = new Map();
function visit(id, trail) {
  if (state.get(id) === "done") return;
  if (state.get(id) === "open") {
    const loop = trail.slice(trail.indexOf(id)).concat(id);
    if (docs.has(id)) err(id, `prerequisites loop: ${loop.join(" → ")}`);
    return;
  }
  state.set(id, "open");
  (prereqOf.get(id) || []).forEach(p => visit(p, trail.concat(id)));
  state.set(id, "done");
}
prereqOf.forEach((_, id) => visit(id, []));

// ---------------------------------------------------------------- output
let nErr = 0, nWarn = 0;
Object.keys(problems).sort().forEach(id => {
  const { errors, warnings } = problems[id];
  nErr += errors.length;
  nWarn += warnings.length;
  if (!errors.length && (onlyErrors || !warnings.length)) return;
  console.log(id);
  errors.forEach(e => console.log("  ✗ " + e));
  if (!onlyErrors) warnings.forEach(w => console.log("  ! " + w));
});
const scopeName = scopeArgs.length ? scopeArgs.join(", ") : "all topics";
console.log(`\n${scopeName}: ${scoped.length} topics, ${docs.size} files checked, ${missing.length} missing` +
  ` · ${nErr} errors, ${nWarn} warnings` + (katex ? "" : " · KaTeX not installed (npm install), formulas not rendered"));
process.exit(nErr ? 1 : 0);
