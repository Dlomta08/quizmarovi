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

  /*
   * Daily problem, guests: the FIRST answer of the day is kept separately, so answering again
   * (reopening it with "ნახვა" or reloading the quiz) can't turn a wrong answer into a solved one.
   *   localStorage "daily-first" = { "<pid>": { s: 1 | 0, d: "<Tbilisi date YYYY-MM-DD>" } }  (today only)
   * Logged-in students don't need this: the database keeps the one try (03-daily-one-try.sql).
   */
  const DAILY_KEY = "daily-first";
  const tbilisiDay = () => new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tbilisi" }).format(new Date());

  function dailyFirst() {
    try { return JSON.parse(localStorage.getItem(DAILY_KEY)) || {}; } catch { return {}; }
  }

  function recordDailyFirst(pid, correct) {
    if (!pid) return;
    const day = tbilisiDay();
    const old = dailyFirst();
    if (old[pid] && old[pid].d === day) return;   // already answered today: keep the first answer
    const kept = {};
    Object.keys(old).forEach(k => { if (old[k] && old[k].d === day) kept[k] = old[k]; });
    kept[pid] = { s: correct ? 1 : 0, d: day };
    try { localStorage.setItem(DAILY_KEY, JSON.stringify(kept)); } catch {}
  }

  window.QuizProgress = { id, record, status, all, recordDailyFirst, dailyFirst };
})();
