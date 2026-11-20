#!/usr/bin/env node
/*
 * Builds data/problems.json — every math problem with its tags, for the problem browser (problems.html).
 * The quiz files stay the source of truth; this file is generated from them.
 *
 *   node tools/build-problem-index.js
 *
 * (tools/build-quiz-index.js runs this automatically.)
 *
 * Each entry (short keys keep the file small):
 *   { g: grade, y: "2025-26", q: quiz number, n: problem number (1-based),
 *     a: area, t: [topics], d: difficulty, ty: [types], m: [methods], r: reviewed (0/1),
 *     x: question HTML, o: [options] (multiple choice only), i: image path, in: intro/task HTML }
 */
"use strict";
const fs = require("fs");
const path = require("path");
const { ROOT, listMathQuizzes } = require("./tags-lib");

function build() {
  const out = [];
  for (const q of listMathQuizzes()) {
    q.problems.forEach((p, k) => {
      if (!p.area) return; // untagged problems are not listed
      const e = {
        g: q.grade, y: q.year, q: q.quiz, n: k + 1,
        a: p.area, t: p.topics || [], d: p.difficulty, ty: p.type || [], m: p.method || [],
        r: p.tagsReviewed ? 1 : 0,
        x: p.question || "",
      };
      if (p.options && p.options.length) e.o = p.options;
      if (p.image) e.i = p.image;
      const intro = [p.intro, p.task].filter(s => typeof s === "string" && s.trim()).join("<br>");
      if (intro) e.in = intro;
      out.push(e);
    });
  }
  // newest school year first, then grade, quiz and problem number
  out.sort((a, b) => b.y.localeCompare(a.y) || a.g - b.g || a.q - b.q || a.n - b.n);
  const file = path.join(ROOT, "data", "problems.json");
  fs.writeFileSync(file, JSON.stringify(out) + "\n", "utf8");
  return { count: out.length, bytes: fs.statSync(file).size };
}

if (require.main === module) {
  const { count, bytes } = build();
  console.log(`data/problems.json: ${count} problems, ${(bytes / 1024).toFixed(0)} KB`);
}
module.exports = { build };
