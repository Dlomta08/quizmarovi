/*
 * mastery-lib.js — topic mastery levels, shared by the topic map (mastery.js) and the
 * badges on the progress page (badges.js: "თემის ოსტატი" = number of mastered topics).
 *
 *   QuizMasteryLib.fetchStats()                       -> my_topic_stats rows (needs QuizCloud)
 *   QuizMasteryLib.buildTopics(problems, stats, grade) -> Map(topicId -> { total, solved, acc, level, ... })
 *   QuizMasteryLib.LEVELS, RULES, levelOf(t)
 *
 * Levels (per topic; N = how many problems the topic has, so small topics can be mastered too):
 *   0 არ დაწყებულა  no answers
 *   1 დაწყებული     answered at least once
 *   2 ვსწავლობ      >= min(3, N) solved
 *   3 კარგად ვიცი   >= min(6, N) solved and accuracy >= 70%
 *   4 დაუფლებული    >= min(10, N) solved and accuracy >= 80%
 * Needs TagUI (tags-ui.js) to be ready before buildTopics() is called.
 */
(function () {
  "use strict";

  const LEVELS = ["არ დაწყებულა", "დაწყებული", "ვსწავლობ", "კარგად ვიცი", "დაუფლებული"];
  // level -> [problems solved needed, accuracy % needed]
  const RULES = { 2: [3, 0], 3: [6, 70], 4: [10, 80] };

  function levelOf(t) {
    if (!t.answers) return 0;
    let lvl = 1;
    for (const L of [2, 3, 4]) {
      const [need, acc] = RULES[L];
      if (t.solved >= Math.min(need, t.total) && t.acc >= acc) lvl = L;
    }
    return lvl;
  }

  // Results per problem and practised topic (view my_topic_stats, supabase/04-topic-practice.sql).
  // practice_topic null = normal quiz: counts for all the problem's topics;
  // practice_topic "x"  = answered while practising topic x on the topic map: counts only for x.
  // If the view doesn't exist yet (04 not run), fall back to my_problem_stats (all = null).
  function fetchStats() {
    return QuizCloud.fetchAll("my_topic_stats", "problem_id, practice_topic, attempts, correct_count", "problem_id")
      .catch(err => {
        console.warn("mastery-lib.js: my_topic_stats unavailable, using my_problem_stats", err);
        return QuizCloud.fetchAll("my_problem_stats", "problem_id, attempts, correct_count", "problem_id")
          .then(rows => rows.map(r => ({ ...r, practice_topic: null })));
      });
  }

  // One entry per leaf topic: its problems (of this grade and lower) and the student's results.
  function buildTopics(problems, stats, grade) {
    const statsById = new Map();
    stats.forEach(s => {
      if (!statsById.has(s.problem_id)) statsById.set(s.problem_id, []);
      statsById.get(s.problem_id).push(s);
    });
    const topics = new Map();
    problems.forEach(p => {
      if (p.g > grade || !p.o || !p.o.length) return;   // only answerable problems up to your grade
      const rows = statsById.get(`${p.g}-${p.y}-${p.q}-${p.n}`) || [];
      (p.t || []).forEach(tid => {
        const info = TagUI.state.topic.get(tid);
        if (!info || !info.parent) return;              // only topics on the map (leaves of data/tags.json)
        let t = topics.get(tid);
        if (!t) topics.set(tid, t = { id: tid, problems: [], total: 0, solved: 0, answers: 0, right: 0 });
        // this problem's answers that count for this topic
        let attempts = 0, correct = 0;
        rows.forEach(s => {
          if (s.practice_topic && s.practice_topic !== tid) return;
          attempts += s.attempts;
          correct += s.correct_count;
        });
        t.problems.push({ row: p, solved: correct > 0, tried: attempts > 0 });
        t.total++;
        t.answers += attempts;
        t.right += correct;
        if (correct > 0) t.solved++;
      });
    });
    topics.forEach(t => {
      t.acc = t.answers ? Math.round((t.right / t.answers) * 100) : 0;
      t.level = levelOf(t);
    });
    return topics;
  }

  window.QuizMasteryLib = { LEVELS, RULES, levelOf, fetchStats, buildTopics };
})();
