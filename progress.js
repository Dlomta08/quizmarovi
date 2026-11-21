/*
 * Per-problem results saved in this browser (math problems with tags only).
 * Written by quiz.js when a problem is answered, read by problems.js for the "ჩემი შედეგი" filter.
 *
 *   localStorage "problem-progress" = { "<grade>-<year>-<quiz>-<problem n>": { s: 1 | 0, t: <ms timestamp> } }
 *   s is the result of the last attempt (1 = correct).
 */
(function () {
  "use strict";

  const KEY = "problem-progress";

  function all() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
  }

  /** Id of one problem, e.g. "10-2025-26-1-7". Same numbering as data/problems.json (n is 1-based). */
  function id(grade, year, quiz, n) {
    return `${grade}-${year}-${quiz}-${n}`;
  }

  function record(pid, correct) {
    if (!pid) return;
    const a = all();   // re-read so another open tab's results aren't overwritten
    a[pid] = { s: correct ? 1 : 0, t: Date.now() };
    try { localStorage.setItem(KEY, JSON.stringify(a)); } catch {}
  }

  /** "right", "wrong" or "new" (never answered). Pass `data` from all() when checking many problems. */
  function status(pid, data) {
    const r = (data || all())[pid];
    return r ? (r.s ? "right" : "wrong") : "new";
  }

  window.QuizProgress = { id, record, status, all };
})();
