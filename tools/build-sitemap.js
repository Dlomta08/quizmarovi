#!/usr/bin/env node
/*
 * Builds sitemap.xml from quizzes.json: the main pages, every class page and every quiz page,
 * so search engines can find each quiz.
 *
 * build-quiz-index.js runs this automatically; to run it alone:
 *     node tools/build-sitemap.js
 *
 * <lastmod> is the date of the last git commit that touched the page's file (for a class page,
 * its newest quiz). Files with uncommitted changes, or no git history, get today's date.
 */
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const SITE = "https://www.komaroviqvizebi.ge";
const SUBJECT_DIRS = { math: "quizzes", physics: "physics-quizzes" };
const today = new Date().toISOString().slice(0, 10);

// Pages with no parameters other than the subject: [page, priority, subjects]
const MAIN_PAGES = [
  ["/", "1.00", ["math"]],
  ["/classes", "0.80", ["math", "physics"]],
  ["/problems", "0.80", ["math"]],
  ["/random-quiz-generator", "0.64", ["math", "physics"]],
];

/** Last commit date (YYYY-MM-DD) of every file in the repo, from a single `git log`. */
function gitDates() {
  const dates = new Map();
  try {
    const out = execFileSync("git", ["log", "--format=@%cs", "--name-only"], { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
    let date = null;
    for (const line of out.split("\n")) {
      if (line.startsWith("@")) date = line.slice(1);
      else if (line && date && !dates.has(line)) dates.set(line, date);   // newest commit comes first
    }
    // Files changed since the last commit get today's date.
    const status = execFileSync("git", ["status", "--porcelain"], { cwd: ROOT, encoding: "utf8" });
    for (const line of status.split("\n")) if (line.length > 3) dates.set(line.slice(3).replace(/^"|"$/g, ""), today);
  } catch {
    // not a git checkout: every page gets today's date
  }
  return file => dates.get(file) || today;
}

/** Same query order as QuizSite.pageUrl in subjects.js: subject first, then the page's own parameters. */
function url(page, subject, params) {
  const q = new URLSearchParams();
  if (subject !== "math") q.set("subject", subject);
  Object.entries(params || {}).forEach(([k, v]) => q.set(k, v));
  const qs = q.toString();
  return SITE + page + (qs ? "?" + qs : "");
}

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function build(index) {
  index = index || JSON.parse(fs.readFileSync(path.join(ROOT, "quizzes.json"), "utf8"));
  const dateOf = gitDates();
  const entries = [];
  const add = (loc, lastmod, priority) => entries.push({ loc, lastmod, priority });

  for (const [page, priority, subjects] of MAIN_PAGES) {
    const file = page === "/" ? "index.html" : page.slice(1) + ".html";
    for (const subject of subjects) add(url(page, subject), dateOf(file), priority);
  }

  for (const [subject, dir] of Object.entries(SUBJECT_DIRS)) {
    const classes = index[subject] || {};
    for (const cls of Object.keys(classes).sort((a, b) => a - b)) {
      const quizzes = [];
      for (const [year, numbers] of Object.entries(classes[cls])) {
        for (const number of numbers) {
          quizzes.push({
            loc: url("/quiz", subject, { class: cls, year, number }),
            lastmod: dateOf(`${dir}/class-${cls}/${year}/quiz-${number}.js`),
          });
        }
      }
      if (!quizzes.length) continue;
      const newest = quizzes.reduce((d, q) => (q.lastmod > d ? q.lastmod : d), "");
      add(url("/class-quizzes", subject, { class: cls }), newest, "0.64");
      quizzes.forEach(q => add(q.loc, q.lastmod, "0.50"));
    }
  }

  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entries.map(e =>
      `<url>\n  <loc>${escapeXml(e.loc)}</loc>\n  <lastmod>${e.lastmod}</lastmod>\n  <priority>${e.priority}</priority>\n</url>\n`
    ).join("") +
    "</urlset>\n";
  fs.writeFileSync(path.join(ROOT, "sitemap.xml"), xml, "utf8");
  return { count: entries.length };
}

module.exports = { build };

if (require.main === module) {
  console.log(`sitemap.xml: ${build().count} URLs`);
}
