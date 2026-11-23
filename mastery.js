/*
 * mastery.js — the "თემების რუკა" (topic mastery map) page (mastery.html).
 *
 * For the logged-in student:
 *  - "შემდეგი ვარჯიში": the 3 weakest topics they have started, each with a practice button.
 *  - The map: every topic of their grade (and lower grades) as a coloured tile, grouped by
 *    area > topic group. Clicking a tile shows its numbers and "ივარჯიშე" in the side panel.
 *
 * Data: the my_topic_stats view (attempts + correct answers per problem and practised topic)
 * joined with data/problems.json (which topics each problem has). Topic names: data/tags.json (TagUI).
 * "ივარჯიშე" opens all unsolved problems of the topic; those answers count only for that topic.
 * The levels and their rules are in mastery-lib.js (shared with the badges).
 */
(function () {
  "use strict";

  const content = document.getElementById("content");
  const lead = document.getElementById("lead");
  if (!window.QuizMasteryLib) return;
  const { LEVELS, RULES, fetchStats, buildTopics } = QuizMasteryLib;

  function note(html) {
    content.innerHTML = `<div class="acc-note">${html}</div>`;
  }

  function showLoggedOut() {
    lead.textContent = "";
    note(`<p>თემების რუკის სანახავად შედი ანგარიშზე. სტუმრადაც შეგიძლია ამოცანების ამოხსნა.</p>
          <button type="button" class="acc-btn" id="login"><i class="fab fa-google"></i>შესვლა Google-ით</button>`);
    document.getElementById("login").addEventListener("click", () => QuizAuth.signIn());
  }

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // What is still missing for the next level, in words.
  function nextStep(t) {
    if (t.level === 4) return "დაუფლებულია ⭐";
    if (t.level === 0) return "უპასუხე 1 ამოცანას";
    const [need, acc] = RULES[t.level + 1];
    const more = Math.max(0, Math.min(need, t.total) - t.solved);
    const parts = [];
    if (more) parts.push(`კიდევ ${more} სწორი`);
    if (t.acc < acc) parts.push(`სიზუსტე ${acc}%+`);
    return parts.join(" და ") || "—";
  }

  // ---------------------------------------------------------------- practice
  // All problems of the topic you haven't solved yet: the ones you got wrong first, then new ones.
  // Solved problems are left out, so coming back later continues where you stopped.
  // The quiz is marked with the topic, so these answers count only for this topic.
  const unsolvedCount = t => t.total - t.solved;

  function practice(t, btn) {
    const shuffle = a => a.map(x => [Math.random(), x]).sort((a, b) => a[0] - b[0]).map(x => x[1]);
    const wrong = shuffle(t.problems.filter(p => p.tried && !p.solved));
    const fresh = shuffle(t.problems.filter(p => !p.tried));
    const pick = [...wrong, ...fresh].map(p => p.row);
    if (!pick.length) return;
    if (btn) btn.disabled = true;
    QuizPractice.start(pick, { back: "mastery.html", title: TagUI.label("topic", t.id), totalAvailable: t.total, topic: t.id })
      .catch(err => {
        console.error(err);
        if (btn) btn.disabled = false;
        alert("ამოცანების ჩატვირთვა ვერ მოხერხდა. სცადე თავიდან.");
      });
  }

  // ---------------------------------------------------------------- render
  function pill(level) {
    return `<span class="mx-pill mx-l${level}">${level === 4 ? "⭐ " : ""}${LEVELS[level]}</span>`;
  }

  function nextBox(list) {
    const box = document.createElement("div");
    box.className = "mx-next";
    box.innerHTML = `<h2><i class="fas fa-bullseye" aria-hidden="true"></i> შემდეგი ვარჯიში — შენი სუსტი თემები</h2>`;
    list.forEach(t => {
      const row = document.createElement("div");
      row.className = "mx-nx";
      row.innerHTML = `<span><b>${esc(TagUI.label("topic", t.id))}</b><small>${t.solved}/${t.total} ამოხსნილი` +
        `${t.answers ? ` · სიზუსტე ${t.acc}%` : ""}</small></span><button type="button" class="mx-go">ივარჯიშე</button>`;
      const btn = row.querySelector("button");
      btn.disabled = !unsolvedCount(t);
      btn.addEventListener("click", () => practice(t, btn));
      box.appendChild(row);
    });
    return box;
  }

  function panel() {
    const el = document.createElement("aside");
    el.className = "mx-panel";
    el.setAttribute("aria-live", "polite");
    return el;
  }

  function fillPanel(el, t) {
    const info = TagUI.state.topic.get(t.id) || {};
    const group = info.parent ? TagUI.label("topic", info.parent) : "";
    const area = info.area ? TagUI.label("area", info.area) : "";
    el.innerHTML = `
      <div class="mx-crumb">${esc([area, group].filter(Boolean).join(" › "))}</div>
      <h3>${esc(TagUI.label("topic", t.id))}</h3>${pill(t.level)}
      <div class="mx-row"><span>ამოხსნილი</span><b>${t.solved} / ${t.total}</b></div>
      <div class="mx-row"><span>სიზუსტე</span><b>${t.answers ? t.acc + "%" : "—"}</b></div>
      <div class="mx-row"><span>შემდეგ დონემდე</span><b>${esc(nextStep(t))}</b></div>
      <button type="button" class="mx-big"></button>
      <a class="mx-all" href="${TagUI.filterUrl("topic", t.id)}">ყველა ამოცანა ამ თემაზე</a>`;
    const btn = el.querySelector(".mx-big");
    const left = unsolvedCount(t);
    btn.innerHTML = left
      ? `<i class="fas fa-play" aria-hidden="true"></i> ივარჯიშე · ${left} ამოცანა`
      : "ყველა ამოხსნილია ⭐";
    btn.disabled = !left;
    btn.addEventListener("click", () => practice(t, btn));
  }

  function mapBox(topics, side) {
    const wrap = document.createElement("div");
    wrap.className = "mx-map";
    let selected = null;
    const select = (tile, t, scroll) => {
      if (selected) selected.classList.remove("sel");
      selected = tile;
      tile.classList.add("sel");
      tile.setAttribute("aria-pressed", "true");
      fillPanel(side, t);
      // phones: the panel is above the map, so bring it into view
      if (scroll && window.matchMedia("(max-width: 760px)").matches) side.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    let first = null;

    TagUI.state.tags.area.forEach(area => {
      const groups = TagUI.state.tags.topics.filter(g => g.area === area.id)
        .map(g => ({ g, leaves: g.children.map(c => topics.get(c.id)).filter(Boolean) }))
        .filter(x => x.leaves.length);
      if (!groups.length) return;
      wrap.insertAdjacentHTML("beforeend", `<h2 class="mx-area">${esc(area.ka)}</h2>`);
      groups.forEach(({ g, leaves }) => {
        const sec = document.createElement("div");
        sec.className = "mx-grp";
        sec.innerHTML = `<h3>${esc(g.ka)}</h3><div class="mx-tiles"></div>`;
        const tiles = sec.querySelector(".mx-tiles");
        leaves.forEach(t => {
          const b = document.createElement("button");
          b.type = "button";
          b.className = `mx-tile mx-l${t.level}`;
          b.title = `${TagUI.label("topic", t.id)} · ${LEVELS[t.level]} · ${t.solved}/${t.total}`;
          const name = document.createElement("span");
          name.className = "mx-tn";
          name.textContent = (t.level === 4 ? "⭐ " : "") + TagUI.label("topic", t.id);
          b.appendChild(name);
          b.addEventListener("click", () => select(b, t, true));
          tiles.appendChild(b);
          if (!first) first = [b, t];
          t.tile = b;
        });
        wrap.appendChild(sec);
      });
    });
    return { wrap, select, first };
  }

  async function show() {
    if (!QuizAuth.isLoggedIn()) { showLoggedOut(); return; }
    note("<p>იტვირთება...</p>");
    try {
      const [profile, stats, problems] = await Promise.all([
        QuizAuth.ready.then(() => QuizAuth.profile),
        fetchStats(),
        fetch("data/problems.json", { cache: "no-cache" }).then(r => (r.ok ? r.json() : [])),
        TagUI.ready,
      ]);
      if (!profile) { note("<p>ჯერ დაასრულე რეგისტრაცია (სახელი და კლასი).</p>"); return; }
      const grade = profile.grade;
      const topics = buildTopics(problems, stats, grade);
      const all = [...topics.values()];
      const mastered = all.filter(t => t.level === 4).length;
      lead.textContent = `მე-${grade} კლასი · დაუფლებული ${mastered} / ${all.length} თემა`;

      // weakest started topics first; then good-but-not-mastered; then untouched big topics
      const started = all.filter(t => t.level === 1 || t.level === 2).sort((a, b) => a.acc - b.acc || b.answers - a.answers);
      const good = all.filter(t => t.level === 3).sort((a, b) => a.acc - b.acc);
      const fresh = all.filter(t => t.level === 0).sort((a, b) => b.total - a.total);
      const next = [...started, ...good, ...fresh].slice(0, 3);

      const legend = document.createElement("div");
      legend.className = "mx-legend";
      legend.innerHTML = LEVELS.map((l, i) => `<span><i class="mx-l${i}"></i>${l}</span>`).join("");

      const side = panel();
      const { wrap, select, first } = mapBox(topics, side);
      const layout = document.createElement("div");
      layout.className = "mx-layout";
      layout.append(wrap, side);

      content.textContent = "";
      if (next.length) content.appendChild(nextBox(next));
      content.append(legend, layout);
      // start with the first "practice next" topic selected (or the first tile)
      const start = next.length && next[0].tile ? [next[0].tile, next[0]] : first;
      if (start) select(start[0], start[1], false);
      else side.remove();
    } catch (err) {
      console.error(err);
      note("<p>ჩატვირთვა ვერ მოხერხდა. სცადე გვერდის განახლება.</p>");
    }
  }

  if (!window.QuizAuth || !window.QuizCloud || !window.TagUI || !window.QuizPractice) {
    note("<p>ანგარიშები ახლა მიუწვდომელია. სცადე მოგვიანებით.</p>");
    return;
  }
  QuizAuth.ready.then(show);
  QuizAuth.onChange(() => show());
  // Coming back with the browser's "back" button shows a saved copy of this page
  // (back/forward cache) with the old numbers: load them again.
  window.addEventListener("pageshow", e => { if (e.persisted) show(); });
  window.QuizMastery = { refresh: show };
})();
