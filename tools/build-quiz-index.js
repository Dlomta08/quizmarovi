#!/usr/bin/env node
/*
 * Builds quizzes.json — the list of quizzes that actually exist on the site.
 * The quiz list pages, the quiz page and the random quiz generator all read it,
 * so empty or missing quiz files never show up as cards.
 *
 * Run it after adding, removing or emptying a quiz file, or after changing tags:
 *     node tools/build-quiz-index.js
 * It also rebuilds data/problems.json (the problem browser's data), supabase/answer-key.sql,
 * (the duel answer key), data/theory.json (theory pages + problem counts) and sitemap.xml.
 *
 * Output shape:
 * {
 *   "math":    { "7": { "2025-26": [1, 2, 3, 4], "2024-25": [1, 2, 3, 4, 5], ... }, ... },
 *   "physics": { "8": { ... }, ... }
 * }
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SUBJECT_DIRS = { math: "quizzes", physics: "physics-quizzes" };

// A quiz counts as existing only if its file defines a non-empty quizData array.
function questionCount(file) {
  const source = fs.readFileSync(file, "utf8")
    .replace(/^﻿/, "")
    .replace(/^\s*(?:const|let|var)\s+quizData\s*=/m, "quizData =");
  if (!source.trim()) return 0;
  try {
    const data = new Function("let quizData;\n" + source + "\n;return quizData;")();
    return Array.isArray(data) ? data.length : 0;
  } catch (err) {
    console.warn(`  ! could not read ${path.relative(ROOT, file)}: ${err.message}`);
    return 0;
  }
}

const index = {};
const skipped = [];
let total = 0;

for (const [subject, dir] of Object.entries(SUBJECT_DIRS)) {
  index[subject] = {};
  const base = path.join(ROOT, dir);
  const classDirs = fs.readdirSync(base)
    .map(name => name.match(/^class-(\d+)$/))
    .filter(Boolean)
    .map(m => Number(m[1]))
    .sort((a, b) => a - b);

  for (const cls of classDirs) {
    const years = {};
    const classPath = path.join(base, `class-${cls}`);
    const yearDirs = fs.readdirSync(classPath)
      .filter(name => /^\d{4}-\d{2}$/.test(name))
      .sort()
      .reverse(); // newest school year first

    for (const year of yearDirs) {
      const numbers = fs.readdirSync(path.join(classPath, year))
        .map(name => name.match(/^quiz-(\d+)\.js$/))
        .filter(Boolean)
        .map(m => Number(m[1]))
        .sort((a, b) => a - b)
        .filter(n => {
          const ok = questionCount(path.join(classPath, year, `quiz-${n}.js`)) > 0;
          if (!ok) skipped.push(`${dir}/class-${cls}/${year}/quiz-${n}.js`);
          return ok;
        });
      if (numbers.length) {
        years[year] = numbers;
        total += numbers.length;
      }
    }
    if (Object.keys(years).length) index[subject][cls] = years;
  }
}

const out = path.join(ROOT, "quizzes.json");
// Keep each list of quiz numbers on one line: "2025-26": [1, 2, 3, 4]
const json = JSON.stringify(index, null, 2)
  .replace(/\[\s+([\d,\s]+?)\s+\]/g, (_, nums) => "[" + nums.split(/,\s*/).join(", ") + "]");
fs.writeFileSync(out, json + "\n", "utf8");
console.log(`quizzes.json: ${total} quizzes`);
for (const [subject, classes] of Object.entries(index)) {
  console.log(`  ${subject}: classes ${Object.keys(classes).join(", ")}`);
}
if (skipped.length) console.log(`  skipped (empty): ${skipped.join(", ")}`);

// Also rebuild the problem browser's data (data/problems.json) from the same quiz files.
const problems = require("./build-problem-index").build();
console.log(`data/problems.json: ${problems.count} problems, ${(problems.bytes / 1024).toFixed(0)} KB`);

// The duel answer key (supabase/answer-key.sql), which must be re-run in Supabase after quiz changes.
const keys = require("./build-answer-key").build();
console.log(`supabase/answer-key.sql: ${keys.count} problems (re-run it in the Supabase SQL Editor if it changed)`);

// The theory list (data/theory.json), whose problem counts come from data/problems.json.
const theory = require("./build-theory-index").build();
console.log(`data/theory.json: ${theory.count} theory pages (${theory.reviewed} reviewed)`);

// And the sitemap, which lists every quiz page (and reviewed theory pages).
const sitemap = require("./build-sitemap").build(index);
console.log(`sitemap.xml: ${sitemap.count} URLs`);
