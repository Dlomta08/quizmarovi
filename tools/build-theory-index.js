#!/usr/bin/env node
/*
 * Builds data/theory.json — one row per theory page (theory/<topic-id>.md), in tags.json order:
 *   { id, title, area, group, grades, reviewed, words, n }
 * n = number of math problems tagged with this topic (the "ივარჯიშე" button and the index page show it).
 * The theory index page, the theory page and the 📖 links on problems all read this file,
 * so a theory file that isn't in it won't appear. build-quiz-index.js runs this too.
 *
 *     node tools/build-theory-index.js
 */
const fs = require("fs");
const path = require("path");
const TheoryLib = require("../theory-lib.js");

const ROOT = path.resolve(__dirname, "..");
const DIR = path.join(ROOT, "theory");

/** Topics in tags.json order: leaf topics, plus groups without children (they are tagged directly). */
function topicList(tags) {
  const out = [];
  tags.topics.forEach(g => {
    const kids = g.children || [];
    if (!kids.length) out.push({ id: g.id, ka: g.ka, area: g.area, group: g.id, grades: g.grades || [] });
    kids.forEach(c => out.push({ id: c.id, ka: c.ka, area: g.area, group: g.id, grades: c.grades || [] }));
  });
  return out;
}

function build() {
  const tags = JSON.parse(fs.readFileSync(path.join(ROOT, "data/tags.json"), "utf8"));
  const problems = JSON.parse(fs.readFileSync(path.join(ROOT, "data/problems.json"), "utf8"));
  const count = {};
  problems.forEach(p => (p.t || []).forEach(t => { count[t] = (count[t] || 0) + 1; }));

  const rows = [];
  topicList(tags).forEach(t => {
    const file = path.join(DIR, t.id + ".md");
    if (!fs.existsSync(file)) return;
    const doc = TheoryLib.parse(fs.readFileSync(file, "utf8"));
    const m = doc.meta;
    rows.push({
      id: t.id,
      title: m.title || t.ka,
      area: t.area,
      group: t.group,
      grades: Array.isArray(m.grades) && m.grades.length ? m.grades : t.grades,
      reviewed: m.reviewed === true,
      words: doc.words,
      n: count[t.id] || 0,
    });
  });

  const json = "[\n" + rows.map(r => "  " + JSON.stringify(r)).join(",\n") + "\n]\n";
  fs.writeFileSync(path.join(ROOT, "data/theory.json"), json, "utf8");
  return { count: rows.length, reviewed: rows.filter(r => r.reviewed).length, rows };
}

module.exports = { build, topicList };

if (require.main === module) {
  const r = build();
  console.log(`data/theory.json: ${r.count} pages (${r.reviewed} reviewed)`);
}
