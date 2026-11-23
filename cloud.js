// cloud.js — saves answers to the database and reads them back (for logged-in students).
//
// What this file does:
//  - recordAttempt(): called by quiz.js after every graded answer.
//      * logged in  -> saved right away through the record_attempt() database function
//                      (which also updates XP and the daily streak).
//      * guest      -> kept for a while in this tab (sessionStorage). If the guest then logs
//                      in (e.g. from the "save to your mistakes notebook" note), those answers
//                      are saved to their new account automatically.
//  - fetchAll(): reads a whole view/table page by page (Supabase returns at most 1000 rows
//    per request). Used by the progress and mistakes pages.
//  - deleteAccount(): calls delete_my_account() and logs out.
//
// Needs auth.js (window.QuizAuth). If accounts are unavailable it quietly does nothing.
(function () {
  'use strict';

  const GUEST_KEY = 'guest-attempts';     // sessionStorage: answers given before logging in
  const GUEST_MAX = 200;

  function auth() { return window.QuizAuth || null; }

  // ---------------------------------------------------------------- guest buffer
  function readGuest() {
    try { return JSON.parse(sessionStorage.getItem(GUEST_KEY)) || []; } catch { return []; }
  }
  function writeGuest(list) {
    try {
      if (list.length) sessionStorage.setItem(GUEST_KEY, JSON.stringify(list.slice(-GUEST_MAX)));
      else sessionStorage.removeItem(GUEST_KEY);
    } catch { /* storage full or blocked: not important */ }
  }

  // ---------------------------------------------------------------- saving
  // The database checks the answer itself (record_attempt, see supabase/02-daily-problem.sql)
  // and returns { is_correct, xp, daily }. Resolves to that object, or null on error.
  async function send(a) {
    const { data, error } = await auth().client.rpc('record_attempt', {
      p_problem_id: a.problemId,
      p_answer: a.answer == null ? null : String(a.answer),
      p_is_correct: !!a.isCorrect,
      p_time: a.seconds == null ? null : Math.round(a.seconds),
      p_subject: 'math'
    });
    if (error) { console.warn('cloud.js: attempt not saved', error); return null; }
    return data || {};
  }

  // After a correct answer the streak/XP changed: refresh the header (once, not per answer).
  let refreshTimer = null;
  function refreshSoon() {
    clearTimeout(refreshTimer);
    refreshTimer = setTimeout(() => { if (auth()) auth().refreshProfile(); }, 1500);
  }

  /**
   * Save one graded answer.
   * @param {string} problemId  e.g. "10-2025-26-1-7" (same id as progress.js)
   * @param {number} answer     chosen option index (0 = ა)
   * @param {boolean} isCorrect
   * @param {number|null} seconds  time spent, or null if unknown (simulation mode)
   */
  async function recordAttempt(problemId, answer, isCorrect, seconds) {
    if (!problemId) return false;
    const a = { problemId, answer, isCorrect, seconds };
    const A = auth();
    if (!A) return false;
    await A.ready;                       // wait until we know whether someone is logged in
    if (!A.isLoggedIn()) {
      const list = readGuest(); list.push(a); writeGuest(list);
      return false;
    }
    const res = await send(a);
    if (res && res.is_correct) refreshSoon();
    return res;
  }

  // Save answers given as a guest in this tab, once the user has logged in.
  let flushing = false;
  async function flushGuest() {
    const A = auth();
    if (flushing || !A || !A.isLoggedIn()) return;
    const list = readGuest();
    if (!list.length) return;
    flushing = true;
    writeGuest([]);                      // clear first so a second tab/reload doesn't save twice
    let anyCorrect = false;
    for (const a of list) {              // one by one, in order (first-correct XP depends on order)
      const res = await send(a);
      if (res && res.is_correct) anyCorrect = true;
    }
    flushing = false;
    if (anyCorrect) refreshSoon();
  }

  // ---------------------------------------------------------------- reading
  /** All rows of a table/view (only the user's own, thanks to RLS), 1000 at a time. */
  async function fetchAll(table, columns, orderBy) {
    const A = auth();
    if (!A || !A.isLoggedIn()) return [];
    const rows = [];
    const PAGE = 1000;
    for (let from = 0; ; from += PAGE) {
      let q = A.client.from(table).select(columns || '*').range(from, from + PAGE - 1);
      if (orderBy) q = q.order(orderBy, { ascending: false });
      const { data, error } = await q;
      if (error) throw error;
      rows.push(...data);
      if (data.length < PAGE) return rows;
    }
  }

  /** The most recent attempt (for "continue where you left off"), or null. */
  async function lastAttempt() {
    const A = auth();
    if (!A || !A.isLoggedIn()) return null;
    const { data, error } = await A.client
      .from('attempts').select('problem_id, created_at')
      .order('created_at', { ascending: false }).limit(1).maybeSingle();
    if (error) { console.warn('cloud.js', error); return null; }
    return data;
  }

  // ---------------------------------------------------------------- daily problem
  /** Today's problem id for a grade, e.g. "10-2025-26-2-3" (works for guests too), or null. */
  async function dailyProblem(grade) {
    const A = auth();
    if (!A) return null;
    const { data, error } = await A.client.rpc('daily_problem', { p_grade: Number(grade) });
    if (error) { console.warn('cloud.js: daily problem', error); return null; }
    return data || null;
  }

  /** Tbilisi days ('YYYY-MM-DD') since `fromDay` on which the student solved something (streak days). */
  async function activeDays(fromDay) {
    const A = auth();
    if (!A || !A.isLoggedIn()) return [];
    const { data, error } = await A.client.from('my_active_days').select('day').gte('day', fromDay);
    if (error) { console.warn('cloud.js', error); return []; }
    return data.map(r => r.day);
  }

  /** The logged-in student's FIRST answer to this problem today (Tbilisi day):
   *  true = right, false = wrong, null = not answered yet today. (Daily problem: one try.) */
  async function firstAnswerToday(problemId) {
    const A = auth();
    if (!A || !A.isLoggedIn()) return null;
    const since = A.tbilisiDate(0) + 'T00:00:00+04:00';
    const { data, error } = await A.client.from('attempts')
      .select('is_correct')
      .eq('problem_id', problemId).gte('created_at', since)
      .order('created_at', { ascending: true }).limit(1);
    if (error) { console.warn('cloud.js', error); return null; }
    return data && data.length ? data[0].is_correct : null;
  }

  async function deleteAccount() {
    const A = auth();
    if (!A || !A.isLoggedIn()) return 'ჯერ შედი ანგარიშზე.';
    const { error } = await A.client.rpc('delete_my_account');
    if (error) { console.warn('cloud.js: delete failed', error); return 'ვერ წავშალეთ. სცადე თავიდან.'; }
    try { sessionStorage.removeItem(GUEST_KEY); } catch {}
    await A.signOut();
    return null;
  }

  // ---------------------------------------------------------------- start
  function start() {
    const A = auth();
    if (!A) return;
    A.ready.then(flushGuest);
    A.onChange(flushGuest);              // e.g. logged in on this page without a reload
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();

  window.QuizCloud = { recordAttempt, fetchAll, lastAttempt, deleteAccount, flushGuest,
                       dailyProblem, activeDays, firstAnswerToday };
})();
