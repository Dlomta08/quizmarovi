/*
 * badges.js — badges (ბეჯები) with 3 tiers: ბრინჯაო → ვერცხლი → ოქრო.
 *
 * Badges are not stored anywhere: they are worked out from data the database already
 * checked (solved problems, streak, XP...), so they can't be faked from the browser.
 *
 *   QuizBadges.fullValues(problems, topicStats, profile) -> numbers for every badge
 *       (needs data/problems.json + my_topic_stats; used on "ჩემი პროგრესი")
 *   QuizBadges.compute(values)          -> [{ def, value, tier, next }]
 *   QuizBadges.renderGrid(list)         -> the medal grid element (styles in account.css)
 *   QuizBadges.check(values)            -> shows "ახალი ბეჯი!" for tiers not seen before
 *   QuizBadges.lightCheck()             -> quick check after a correct answer (quiz pages):
 *       re-counts the cheap numbers (solved, streak, daily, XP) and reuses the last known
 *       values of the others (saved when "ჩემი პროგრესი" was opened).
 *
 * "Seen" tiers are remembered per student in localStorage, so each popup appears once.
 * The first check on a device only remembers the current tiers (no flood of old badges).
 */
(function () {
  "use strict";

  const TIERS = ["ბრინჯაო", "ვერცხლი", "ოქრო"];
  // key: name in `values`; t: numbers needed for bronze / silver / gold; what: unit shown under the bar
  const DEFS = [
    { key: "solved",   ic: "🎯", ka: "ამომხსნელი",       what: "ამოხსნილი ამოცანა",       t: [10, 100, 500] },
    { key: "streak",   ic: "🔥", ka: "ცეცხლი",           what: "დღე ზედიზედ",            t: [3, 7, 30] },
    { key: "daily",    ic: "☀️", ka: "დღის გმირი",       what: "ამოხსნილი დღის ამოცანა",  t: [5, 20, 50] },
    { key: "master",   ic: "⭐", ka: "თემის ოსტატი",     what: "დაუფლებული თემა",         t: [1, 5, 20] },
    { key: "algebra",  ic: "🧮", ka: "ალგებრისტი",       what: "ალგებრის ამოცანა",        t: [25, 100, 250] },
    { key: "geometry", ic: "📐", ka: "გეომეტრი",         what: "გეომეტრიის ამოცანა",      t: [25, 100, 250] },
    { key: "prob",     ic: "🎲", ka: "ალბათობის მცოდნე", what: "კომბინატორიკის ამოცანა",  t: [10, 50, 120] },
    { key: "quizzes",  ic: "🏆", ka: "ქვიზის დამპყრობი", what: "სრულად ამოხსნილი ქვიზი",  t: [1, 5, 15] },
    { key: "xp",       ic: "💎", ka: "XP",               what: "XP",                      t: [500, 2000, 10000] },
  ];
  // problems.json area -> badge (calculus counts as algebra, solid geometry as geometry)
  const AREA_BADGE = { algebra: "algebra", calculus: "algebra", geometry: "geometry", solid: "geometry", "prob-stats": "prob" };
  // Daily problem answers are the only ones that earn exactly this much XP (xp_daily_bonus in
  // supabase/02-daily-problem.sql). Keep in sync if that number changes.
  const DAILY_XP = 20;

  const A = () => window.QuizAuth;
  const uid = () => (A() && A().user ? A().user.id : null);
  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  };

  // ---------------------------------------------------------------- numbers
  async function count(query) {
    const { count: n, error } = await query;
    if (error) throw error;
    return n || 0;
  }
  const countSolved = () => count(A().client.from("my_problem_stats")
    .select("problem_id", { count: "exact", head: true }).gt("correct_count", 0));
  const countDaily = () => count(A().client.from("attempts")
    .select("id", { count: "exact", head: true }).eq("xp_awarded", DAILY_XP));

  function bestStreak(p) {
    return Math.max(p ? p.longest_streak || 0 : 0, A().liveStreak ? A().liveStreak() : 0);
  }

  /** All badge numbers. problems = data/problems.json, topicStats = my_topic_stats rows. */
  async function fullValues(problems, topicStats, profile) {
    // solved anywhere (any practised topic)
    const solvedIds = new Set(topicStats.filter(s => s.correct_count > 0).map(s => s.problem_id));
    const v = { solved: solvedIds.size, algebra: 0, geometry: 0, prob: 0, quizzes: 0 };

    const perQuiz = new Map();                 // "9-2025-26-1" -> [answerable, solved]
    problems.forEach(p => {
      if (!p.o || !p.o.length) return;         // open questions can't be solved on the site
      const id = `${p.g}-${p.y}-${p.q}-${p.n}`;
      const qk = `${p.g}-${p.y}-${p.q}`;
      const c = perQuiz.get(qk) || [0, 0];
      c[0]++;
      if (solvedIds.has(id)) {
        c[1]++;
        const b = AREA_BADGE[p.a];
        if (b) v[b]++;
      }
      perQuiz.set(qk, c);
    });
    perQuiz.forEach(([all, done]) => { if (all && done === all) v.quizzes++; });

    v.master = 0;
    if (window.QuizMasteryLib && profile) {
      QuizMasteryLib.buildTopics(problems, topicStats, profile.grade)
        .forEach(t => { if (t.level === 4) v.master++; });
    }
    v.streak = bestStreak(profile);
    v.xp = profile ? profile.xp || 0 : 0;
    v.daily = await countDaily().catch(() => 0);

    if (uid()) store.set("badge-values:" + uid(), v);   // reused by lightCheck() on quiz pages
    return v;
  }

  function compute(values) {
    return DEFS.map(def => {
      const value = values[def.key];
      if (value == null) return { def, value: null, tier: null, next: null };
      const tier = def.t.filter(x => value >= x).length;
      return { def, value, tier, next: def.t[tier] || null };
    });
  }

  // ---------------------------------------------------------------- grid (progress page)
  function renderGrid(list) {
    const box = document.createElement("div");
    box.className = "acc-box";
    const earned = list.reduce((n, b) => n + (b.tier || 0), 0);
    box.innerHTML = `<h2>ბეჯები <span class="bd-count">${earned} / ${DEFS.length * 3}</span></h2><div class="bd-grid"></div>`;
    const grid = box.querySelector(".bd-grid");
    list.forEach(b => {
      const el = document.createElement("div");
      el.className = "bd" + (b.tier ? "" : " lock");
      const pct = b.next ? Math.min(100, Math.round((b.value / b.next) * 100)) : 100;
      el.innerHTML = `
        <div class="bd-medal bd-t${b.tier}" aria-hidden="true">${b.def.ic}</div>
        <b>${b.def.ka}</b>
        <small>${b.tier ? TIERS[b.tier - 1] : "ჯერ არ არის"}</small>
        <div class="bd-tiers">${[1, 2, 3].map(i => `<i class="${b.tier >= i ? "bd-t" + i : ""}"></i>`).join("")}</div>
        ${b.next
          ? `<div class="bd-bar"><i style="width:${pct}%"></i></div><small>${b.value} / ${b.next} ${b.def.what}</small>`
          : `<small>ყველა დონე აღებულია ✓</small>`}`;
      el.title = b.def.t.map((x, i) => `${TIERS[i]}: ${x}`).join(" · ");
      grid.appendChild(el);
    });
    return box;
  }

  // ---------------------------------------------------------------- "ახალი ბეჯი!" popup
  function injectStyles() {
    if (document.getElementById("badge-toast-styles")) return;
    const s = document.createElement("style");
    s.id = "badge-toast-styles";
    s.textContent = `
.bd-toasts{position:fixed;right:20px;top:86px;z-index:2500;display:flex;flex-direction:column;gap:.6rem;max-width:calc(100% - 32px)}
.bd-toast{width:300px;max-width:100%;box-sizing:border-box;background:var(--card-bg);border:1px solid rgba(var(--primary-rgb),.5);
  border-radius:14px;box-shadow:0 14px 34px rgba(0,0,0,.18);padding:.85rem 2.2rem .85rem .9rem;display:flex;gap:.8rem;align-items:center;
  font-family:'Noto Sans Georgian',sans-serif;color:var(--text-primary);position:relative;animation:bd-in .35s ease-out}
.bd-toast .m{width:52px;height:52px;border-radius:50%;display:grid;place-items:center;font-size:1.55rem;border:4px solid #c98a5a;
  background:var(--card-bg-secondary);flex:none}
.bd-toast .m.t2{border-color:#a9b4c0}.bd-toast .m.t3{border-color:#e0b23c}
.bd-toast small{display:block;color:var(--primary-color);font-weight:700;font-size:.75rem}
.bd-toast b{display:block;font-size:.95rem}.bd-toast span{font-size:.8rem;color:var(--text-secondary)}
.bd-toast .x{position:absolute;top:.4rem;right:.5rem;background:none;border:0;color:var(--text-secondary);cursor:pointer;font-size:.95rem;padding:.2rem .35rem}
@keyframes bd-in{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
@media (max-width:480px){.bd-toasts{right:16px;left:16px;top:76px}.bd-toast{width:100%}}`;
    document.head.appendChild(s);
  }

  const MAX_TOASTS = 3;                       // more new badges at once -> "და კიდევ N"

  function toastBox(icon, tier, title, text) {
    injectStyles();
    let wrap = document.querySelector(".bd-toasts");
    if (!wrap) {
      wrap = document.createElement("div");
      wrap.className = "bd-toasts";
      wrap.setAttribute("aria-live", "polite");
      document.body.appendChild(wrap);
    }
    const el = document.createElement("div");
    el.className = "bd-toast";
    el.innerHTML = `<span class="m t${tier}" aria-hidden="true"></span>
      <div><small>ახალი ბეჯი!</small><b></b><span class="txt"></span></div>
      <button type="button" class="x" aria-label="დახურვა">✕</button>`;
    el.querySelector(".m").textContent = icon;
    el.querySelector("b").textContent = title;
    el.querySelector(".txt").textContent = text;
    const close = () => el.remove();
    el.querySelector(".x").addEventListener("click", close);
    setTimeout(close, 7000);
    wrap.appendChild(el);
  }

  function showToasts(list) {
    list.slice(0, MAX_TOASTS).forEach(b =>
      toastBox(b.def.ic, b.tier, `${b.def.ka} · ${TIERS[b.tier - 1]}`, `${b.def.t[b.tier - 1]} ${b.def.what}`));
    const more = list.length - MAX_TOASTS;
    if (more > 0) toastBox("🏅", 1, `და კიდევ ${more} ბეჯი`, "ყველა ბეჯი — „ჩემი პროგრესის\" გვერდზე");
  }

  /** Show a popup for every badge tier this student hasn't seen yet, then remember them. */
  function check(values) {
    if (!uid()) return;
    const key = "badges-seen:" + uid();
    const seen = store.get(key);
    const list = compute(values).filter(b => b.tier != null);
    const now = Object.assign({}, seen || {});
    const fresh = [];
    list.forEach(b => {
      // first time this badge is checked on this device: just remember it (no popups for old badges)
      const known = seen && b.def.key in seen;
      const before = known ? seen[b.def.key] : b.tier;
      if (b.tier > before) fresh.push(b);
      now[b.def.key] = Math.max(b.tier, before);
    });
    store.set(key, now);
    showToasts(fresh);
  }

  // Quick check after a correct answer (called by cloud.js once the profile was refreshed).
  let busy = false;
  async function lightCheck() {
    const auth = A();
    if (busy || !auth || !auth.isLoggedIn() || !auth.profile) return;
    busy = true;
    try {
      const cached = store.get("badge-values:" + uid()) || {};
      const [solved, daily] = await Promise.all([countSolved(), countDaily()]);
      const values = Object.assign({}, cached, {
        solved, daily, streak: bestStreak(auth.profile), xp: auth.profile.xp || 0,
      });
      store.set("badge-values:" + uid(), values);
      check(values);
    } catch (err) {
      console.warn("badges.js: check failed", err);
    } finally {
      busy = false;
    }
  }

  window.QuizBadges = { DEFS, TIERS, fullValues, compute, renderGrid, check, lightCheck };
})();
