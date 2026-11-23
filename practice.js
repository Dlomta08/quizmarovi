/*
 * practice.js — builds a practice quiz from a list of problems and opens it in random-quiz.html.
 * Shared by problems.js ("ქვიზის შედგენა") and mistakes.js ("თავიდან ცდა").
 *
 *   QuizPractice.start(list, { back, totalAvailable, title, topic })
 *   list = rows from data/problems.json ({ g, y, q, n, ... })
 *
 * data/problems.json has no answers or solutions, so the original quiz files are loaded to
 * get them. Each problem keeps `origin` (its original grade/year/quiz/number), so answers in
 * the practice quiz are saved under the original problem id.
 */
(function () {
  "use strict";

  // Loads one quiz file and returns its quizData array (or null). Same approach as rand.js.
  async function loadQuizScript(path) {
    try {
      const res = await fetch(path);
      if (!res.ok) return null;
      const source = (await res.text())
        .replace(/^﻿/, "")
        .replace(/^\s*(?:const|let|var)\s+quizData\s*=/m, "quizData =");
      const data = new Function("let quizData;\n" + source + "\n;return quizData;")();
      return Array.isArray(data) ? data : null;
    } catch (err) {
      console.warn(`Failed to load ${path}:`, err);
      return null;
    }
  }

  /** Builds the quiz and goes to random-quiz.html. Throws if no problem could be loaded. */
  async function start(list, opts) {
    opts = opts || {};
    const pathOf = p => `quizzes/class-${p.g}/${p.y}/quiz-${p.q}.js`;
    const files = new Map(list.map(p => [pathOf(p), null]));
    await Promise.all([...files.keys()].map(async path => files.set(path, await loadQuizScript(path))));
    const quiz = list.map(p => {
      const src = (files.get(pathOf(p)) || [])[p.n - 1];
      if (!src || !src.options || !src.options.length) return null;
      return {
        ...src,
        origin: { class: String(p.g), year: p.y, quiz: String(p.q), n: p.n },
        intro: src.random == 1 ? "" : src.intro,
        task: src.random == 1 ? "" : src.task,
      };
    }).filter(Boolean);
    if (!quiz.length) throw new Error("no problems loaded");

    // same storage as rand.js, plus where to go back to
    Object.keys(sessionStorage).filter(k => k.startsWith("sim-state:/random-quiz")).forEach(k => sessionStorage.removeItem(k));
    sessionStorage.setItem("randomQuizData", JSON.stringify(quiz));
    sessionStorage.setItem("randomQuizConfig", JSON.stringify({
      subject: "math",
      classes: [...new Set(quiz.map(q => Number(q.origin.class)))].sort((a, b) => a - b),
      totalAvailable: opts.totalAvailable || quiz.length,
      back: opts.back || "index.html",
      title: opts.title,                 // optional heading, e.g. "შეცდომების გამეორება"
      topic: opts.topic,                 // topic map practice: answers count only for this topic
      daily: opts.daily === true,        // daily problem: the first answer of the day is kept (progress.js)
    }));
    location.href = "random-quiz.html";
  }

  window.QuizPractice = { start, loadQuizScript };
})();
