/*
 * Shared subject settings for the quiz pages.
 * One set of pages serves every subject; the subject comes from the URL:
 *   classes.html?subject=physics, class-quizzes.html?subject=physics&class=9, quiz.html?subject=physics&...
 * No ?subject (or an unknown one) means math, so all old math links keep working.
 */
(function () {
  "use strict";

  const SUBJECTS = {
    math: {
      id: "math",
      name: "მათემატიკა",
      genitive: "მათემატიკის",          // "მათემატიკის ქვიზები"
      icon: "fa-square-root-variable",
      dir: "quizzes",                    // folder with the quiz data files
      keyPrefix: ""                      // localStorage keys: done-10-2025-26-1 (kept as before)
    },
    physics: {
      id: "physics",
      name: "ფიზიკა",
      genitive: "ფიზიკის",
      icon: "fa-atom",
      dir: "physics-quizzes",
      keyPrefix: "physics-"              // localStorage keys: done-physics-10-2025-26-1
    }
  };

  const params = new URLSearchParams(location.search);
  const subject = SUBJECTS[params.get("subject")] || SUBJECTS.math;

  // theme.css switches the ink colour (blue maths, green physics) from this attribute.
  document.documentElement.dataset.subject = subject.id;

  // quiz.js and feedback.js read this to keep math and physics progress separate.
  window.QUIZ_SUBJECT = subject.id === "math" ? undefined : subject.id;

  /** Build a link to a quiz page, keeping the current subject. */
  function pageUrl(page, extra) {
    const q = new URLSearchParams();
    if (subject.id !== "math") q.set("subject", subject.id);
    Object.entries(extra || {}).forEach(([k, v]) => q.set(k, v));
    const qs = q.toString();
    return qs ? `${page}?${qs}` : page;
  }

  let indexPromise = null;
  /** The list of existing quizzes (quizzes.json), for the current subject: { "7": { "2025-26": [1, 2] } }. */
  function loadQuizIndex() {
    if (!indexPromise) {
      indexPromise = fetch("quizzes.json", { cache: "no-cache" })
        .then(r => (r.ok ? r.json() : Promise.reject(new Error("HTTP " + r.status))))
        .then(all => all[subject.id] || {});
    }
    return indexPromise;
  }

  /** "1-ელი" / "მე-2" — Georgian ordinal used in quiz and class titles. */
  function ordinal(n) {
    return Number(n) === 1 ? "1-ელი" : `მე-${n}`;
  }

  window.QuizSite = { SUBJECTS, subject, pageUrl, loadQuizIndex, ordinal };
})();
