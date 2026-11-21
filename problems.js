/*
 * Problem browser (problems.html): filters math problems by area, topic, grade, difficulty, type and method.
 *
 * - Data: data/problems.json (built by tools/build-problem-index.js) and data/tags.json (via tags-ui.js).
 * - Within one filter the choices are combined with OR, across filters with AND.
 * - Choosing a topic group (e.g. "ტრიგონომეტრია") includes all its subtopics.
 * - The filter state lives in the URL, e.g. problems.html?topic=trig-eq,log-eq&grade=10,11&difficulty=3
 * - "ჩემი შედეგი" (status) filters by the results saved in this browser (progress.js).
 * - "ქვიზის შედგენა" turns the current results into a random quiz (random-quiz.html).
 */
(function () {
  "use strict";

  const PAGE_SIZE = 20;
  const KINDS = ["status", "area", "topic", "grade", "difficulty", "type", "method"];
  const KIND_TITLES = {
    status: "ჩემი შედეგი",
    area: "სფერო", topic: "თემა", grade: "კლასი", difficulty: "სირთულე", type: "ამოცანის ტიპი", method: "მეთოდი",
  };
  // status of a problem = result of its last attempt in this browser
  const STATUS = [
    { id: "wrong", ka: "შეცდომით ამოხსნილი", icon: "fa-xmark", rgb: "var(--diff-3)", fg: "var(--diff-3-fg)" },
    { id: "right", ka: "სწორად ამოხსნილი", icon: "fa-check", rgb: "var(--diff-1)", fg: "var(--diff-1-fg)" },
    { id: "new", ka: "ჯერ არ ამომიხსნია", icon: "fa-circle-question", rgb: null, fg: "var(--text-secondary)" },
  ];
  const STATUS_BY_ID = Object.fromEntries(STATUS.map(s => [s.id, s]));

  function labelOf(kind, id) {
    return kind === "status" ? (STATUS_BY_ID[id] || {}).ka || id : TagUI.label(kind, id);
  }

  function statusIcon(id) {
    const s = STATUS_BY_ID[id];
    if (!s) return null;
    const i = document.createElement("i");
    i.className = `fas ${s.icon} tag-icon`;
    i.setAttribute("aria-hidden", "true");
    return i;
  }
  const LETTERS = ["ა", "ბ", "გ", "დ", "ე", "ვ"];

  const el = {
    filters: document.getElementById("filters"),
    list: document.getElementById("problemList"),
    count: document.getElementById("resultCount"),
    more: document.getElementById("showMore"),
    clear: document.getElementById("clearFilters"),
    active: document.getElementById("activeFilters"),
    toggle: document.getElementById("filterToggle"),
    badge: document.getElementById("filterBadge"),
    practice: document.getElementById("makeQuiz"),
    practiceSize: document.getElementById("makeQuizSize"),
  };

  let problems = [];      // entries of data/problems.json
  let tags = null;        // data/tags.json
  let shown = 0;          // how many results are rendered
  let results = [];
  let hasProgress = false;  // any saved results in this browser (opens the "ჩემი შედეგი" section)
  const selected = Object.fromEntries(KINDS.map(k => [k, new Set()]));

  /* ---------------------------------------------------------------- URL state */

  function readUrl() {
    const p = new URLSearchParams(location.search);
    KINDS.forEach(k => {
      selected[k].clear();
      (p.get(k) || "").split(",").map(s => s.trim()).filter(Boolean).forEach(v => selected[k].add(v));
    });
  }

  function writeUrl() {
    const p = new URLSearchParams();
    KINDS.forEach(k => { if (selected[k].size) p.set(k, [...selected[k]].join(",")); });
    const qs = p.toString().replace(/%2C/g, ",");
    history.replaceState(null, "", qs ? `?${qs}` : location.pathname);
  }

  /* ---------------------------------------------------------------- matching */

  /** Problem values for each filter kind (as strings). */
  function values(p, kind) {
    switch (kind) {
      case "area": return [p.a];
      case "topic": return p.t;
      case "grade": return [String(p.g)];
      case "difficulty": return [String(p.d)];
      case "type": return p.ty;
      case "method": return p.m;
      case "status": return [p.st];
    }
    return [];
  }

  /** Selected topics, with groups expanded to their subtopics. */
  function expandedTopics() {
    const out = new Set();
    selected.topic.forEach(id => {
      const t = TagUI.state.topic.get(id);
      if (t && t.children.length) t.children.forEach(c => out.add(c));
      out.add(id);
    });
    return out;
  }

  let topicSet = new Set();   // expandedTopics(), recomputed once per update

  function matches(p, except) {
    const topics = topicSet;
    return KINDS.every(kind => {
      if (kind === except || !selected[kind].size) return true;
      const set = kind === "topic" ? topics : selected[kind];
      return values(p, kind).some(v => set.has(v));
    });
  }

  /** How many problems each option would give, keeping the other filters as they are. */
  function facetCounts(kind) {
    const counts = new Map();
    problems.forEach(p => {
      if (!matches(p, kind)) return;
      values(p, kind).forEach(v => counts.set(v, (counts.get(v) || 0) + 1));
    });
    if (kind === "topic") {   // a group counts problems in any of its subtopics
      TagUI.state.topic.forEach(t => {
        if (!t.children.length) return;
        let n = 0;
        problems.forEach(p => { if (matches(p, "topic") && p.t.some(id => t.children.includes(id))) n++; });
        counts.set(t.id, n);
      });
    }
    return counts;
  }

  /* ---------------------------------------------------------------- filter panel */

  function optionRow(kind, id, text, count, opts) {
    opts = opts || {};
    const label = document.createElement("label");
    label.className = "pb-option" + (count === 0 && !selected[kind].has(String(id)) ? " is-empty" : "") + (opts.child ? " is-child" : "");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = id;
    input.dataset.kind = kind;
    input.checked = opts.forced || selected[kind].has(String(id));
    input.disabled = !!opts.forced;
    if (opts.indeterminate) input.indeterminate = true;
    const span = document.createElement("span");
    span.className = "pb-option-text";
    span.textContent = text;
    const num = document.createElement("span");
    num.className = "pb-option-count";
    num.textContent = count;
    label.append(input);
    const m = optionMarker(kind, id, opts);
    if (m) label.append(m);
    label.append(span, num);
    return label;
  }

  /** Visual cue next to an option: area color dot, difficulty bars, or the type/method icon. */
  function optionMarker(kind, id, opts) {
    if (kind === "status") {
      const i = statusIcon(id);
      i.classList.add("pb-option-icon");
      i.style.color = STATUS_BY_ID[id].fg;
      return i;
    }
    if (kind === "area" || (kind === "topic" && !opts.child)) {
      const area = TagUI.areaOf(kind, String(id));
      if (!area) return null;
      const dot = document.createElement("span");
      dot.className = "tag-dot";
      dot.dataset.area = area;
      dot.setAttribute("aria-hidden", "true");
      return dot;
    }
    if (kind === "difficulty") {
      const bars = TagUI.marker("difficulty", id);
      bars.style.color = `var(--diff-${id}-fg)`;
      return bars;
    }
    if (kind === "type" || kind === "method") {
      const i = TagUI.marker(kind, String(id));
      if (i) i.classList.add("pb-option-icon");
      return i;
    }
    return null;
  }

  function section(kind, body, open) {
    const d = document.createElement("details");
    d.className = "pb-section";
    d.open = open;
    d.dataset.kind = kind;
    const s = document.createElement("summary");
    s.textContent = KIND_TITLES[kind];
    if (selected[kind].size) {
      const b = document.createElement("span");
      b.className = "pb-section-badge";
      b.textContent = selected[kind].size;
      s.appendChild(b);
    }
    d.append(s, body);
    return d;
  }

  const openGroups = new Set();   // topic groups the user expanded

  function renderFilters() {
    // remember which sections were open
    const openSections = new Set([...el.filters.querySelectorAll("details.pb-section[open]")].map(d => d.dataset.kind));
    const first = !el.filters.childElementCount;
    el.filters.textContent = "";

    const simple = (kind, items) => {
      const counts = facetCounts(kind);
      const box = document.createElement("div");
      box.className = "pb-options";
      items.forEach(([id, text]) => box.appendChild(optionRow(kind, id, text, counts.get(String(id)) || 0)));
      return box;
    };

    el.filters.appendChild(section("status", simple("status", STATUS.map(s => [s.id, s.ka])),
      first ? hasProgress : openSections.has("status")));
    el.filters.appendChild(section("area", simple("area", tags.area.map(a => [a.id, a.ka])),
      first ? true : openSections.has("area")));

    // topics, grouped by parent
    const tCounts = facetCounts("topic");
    const tBox = document.createElement("div");
    tBox.className = "pb-options pb-topics";
    tags.topics.forEach(group => {
      const children = group.children || [];
      const groupCount = tCounts.get(group.id) || 0;
      if (!children.length) {   // a group without subtopics is itself a topic
        tBox.appendChild(optionRow("topic", group.id, group.ka, tCounts.get(group.id) || 0));
        return;
      }
      const gSel = selected.topic.has(group.id);
      const someChild = children.some(c => selected.topic.has(c.id));
      if (someChild) openGroups.add(group.id);
      const isOpen = openGroups.has(group.id);

      const g = document.createElement("div");
      g.className = "pb-group" + (isOpen ? " is-open" : "");
      const head = document.createElement("div");
      head.className = "pb-group-head";
      head.appendChild(optionRow("topic", group.id, group.ka, groupCount, { indeterminate: !gSel && someChild }));
      const exp = document.createElement("button");
      exp.type = "button";
      exp.className = "pb-expand";
      exp.dataset.group = group.id;
      exp.setAttribute("aria-expanded", String(isOpen));
      exp.setAttribute("aria-label", `${group.ka} — ქვეთემები`);
      exp.innerHTML = `<i class="fas fa-chevron-down" aria-hidden="true"></i>`;
      head.appendChild(exp);
      const kids = document.createElement("div");
      kids.className = "pb-group-children";
      kids.hidden = !isOpen;
      children.forEach(c => kids.appendChild(optionRow("topic", c.id, c.ka, tCounts.get(c.id) || 0, { child: true, forced: gSel })));
      g.append(head, kids);
      tBox.appendChild(g);
    });
    el.filters.appendChild(section("topic", tBox, first ? true : openSections.has("topic")));

    el.filters.appendChild(section("grade", simple("grade", tags.grade.map(g => [g, TagUI.label("grade", g)])),
      first ? true : openSections.has("grade")));
    el.filters.appendChild(section("difficulty", simple("difficulty", tags.difficulty.map(d => [d.id, d.ka])),
      first ? true : openSections.has("difficulty")));
    el.filters.appendChild(section("type", simple("type", tags.type.map(t => [t.id, t.ka])),
      first ? false : openSections.has("type")));
    el.filters.appendChild(section("method", simple("method", tags.method.map(m => [m.id, m.ka])),
      first ? false : openSections.has("method")));
  }

  // one listener for all checkboxes
  el.filters.addEventListener("change", e => {
    const input = e.target;
    if (!input.matches("input[type=checkbox]")) return;
    const kind = input.dataset.kind, id = String(input.value);
    if (input.checked) selected[kind].add(id); else selected[kind].delete(id);
    // choosing a group replaces its individually chosen subtopics
    if (kind === "topic" && input.checked) {
      const t = TagUI.state.topic.get(id);
      if (t && t.children.length) t.children.forEach(c => selected.topic.delete(c));
    }
    update();
  });
  // the ▾ button next to a topic group shows / hides its subtopics
  el.filters.addEventListener("click", e => {
    const btn = e.target.closest(".pb-expand");
    if (!btn) return;
    const id = btn.dataset.group;
    const open = !openGroups.has(id);
    if (open) openGroups.add(id); else openGroups.delete(id);
    btn.setAttribute("aria-expanded", String(open));
    btn.closest(".pb-group").classList.toggle("is-open", open);
    btn.closest(".pb-group").querySelector(".pb-group-children").hidden = !open;
  });

  /* ---------------------------------------------------------------- active filters + results */

  function renderActive() {
    el.active.textContent = "";
    let total = 0;
    KINDS.forEach(kind => selected[kind].forEach(id => {
      total++;
      const b = document.createElement("button");
      b.type = "button";
      b.className = `pb-active-chip pb-active-chip--${kind}`;
      const area = TagUI.areaOf(kind, id);
      if (area) b.dataset.area = area;
      if (kind === "difficulty") b.style.setProperty("--chip-rgb", `var(--diff-${id})`);
      if (kind === "status" && STATUS_BY_ID[id] && STATUS_BY_ID[id].rgb) b.style.setProperty("--chip-rgb", STATUS_BY_ID[id].rgb);
      const m = kind === "difficulty" ? null : kind === "status" ? statusIcon(id) : TagUI.marker(kind, id);
      if (m) b.appendChild(m);
      const text = document.createElement("span");
      text.textContent = labelOf(kind, id);
      b.appendChild(text);
      b.insertAdjacentHTML("beforeend", `<i class="fas fa-xmark" aria-hidden="true"></i>`);
      b.title = `${KIND_TITLES[kind]}: ${labelOf(kind, id)} — მოხსნა`;
      b.addEventListener("click", () => { selected[kind].delete(id); update(); });
      el.active.appendChild(b);
    }));
    el.clear.hidden = !total;
    el.badge.hidden = !total;
    el.badge.textContent = total;
  }

  function addFilter(kind, id) {
    selected[kind].add(String(id));
    update();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function problemCard(p) {
    const li = document.createElement("li");
    li.className = "pb-card";

    const meta = document.createElement("div");
    meta.className = "pb-meta";
    const where = document.createElement("span");
    where.textContent = `${TagUI.label("grade", p.g)} · ${p.y.replace("-", "/")} · ${p.q === 1 ? "1-ელი" : "მე-" + p.q} ქვიზი · №${p.n}`;
    if (p.st !== "new") {
      const st = document.createElement("span");
      st.className = `pb-status pb-status--${p.st}`;
      st.appendChild(statusIcon(p.st));
      st.append(p.st === "right" ? "სწორი" : "შეცდომა");
      st.title = "ბოლო მცდელობის შედეგი";
      where.prepend(st);
    }
    const open = document.createElement("a");
    open.className = "pb-open";
    open.href = `quiz.html?class=${p.g}&year=${p.y}&number=${p.q}`;
    open.innerHTML = `ქვიზში გახსნა <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>`;
    meta.append(where, open);

    const body = document.createElement("div");
    body.className = "pb-question";
    body.innerHTML = (p.in ? `<div class="pb-intro">${p.in}</div>` : "") + p.x;
    if (p.i) {
      const img = document.createElement("img");
      img.src = p.i;
      img.alt = `${p.n}-ე ამოცანის ნახაზი`;
      img.loading = "lazy";
      img.className = "pb-image";
      body.appendChild(img);
    }
    li.append(meta, body);

    if (p.o && p.o.length) {
      const ol = document.createElement("ul");
      ol.className = "pb-options-list";
      p.o.forEach((o, i) => {
        const item = document.createElement("li");
        item.innerHTML = `<span class="pb-letter">${LETTERS[i] || i + 1})</span> ${o}`;
        ol.appendChild(item);
      });
      li.appendChild(ol);
    }

    const chips = document.createElement("div");
    TagUI.renderChips(chips, { topics: p.t, difficulty: p.d, type: p.ty, method: p.m }, { onClick: addFilter });
    li.appendChild(chips);
    return li;
  }

  function typeset(nodes) {
    if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise(nodes).catch(() => {});
    else window.addEventListener("load", () => window.MathJax && MathJax.typesetPromise && MathJax.typesetPromise(nodes), { once: true });
  }

  function renderMore() {
    const batch = results.slice(shown, shown + PAGE_SIZE).map(problemCard);
    batch.forEach(li => el.list.appendChild(li));
    shown += batch.length;
    el.more.hidden = shown >= results.length;
    el.more.textContent = `მეტის ჩვენება (დარჩა ${results.length - shown})`;
    typeset(batch);
  }

  function update() {
    writeUrl();
    topicSet = expandedTopics();
    results = problems.filter(p => matches(p));
    el.count.textContent = results.length
      ? `ნაპოვნია ${results.length} ამოცანა`
      : "ამ ფილტრებით ამოცანა ვერ მოიძებნა";
    const quizable = results.filter(p => p.o && p.o.length).length;
    el.practice.disabled = !quizable;
    el.practice.title = quizable
      ? `შემთხვევითი ქვიზი ამ ${quizable} ტესტური ამოცანიდან`
      : "ამ ფილტრებით ტესტური ამოცანა არ არის";
    el.list.textContent = "";
    shown = 0;
    renderFilters();
    renderActive();
    renderMore();
  }

  /* ---------------------------------------------------------------- quiz from the current results */

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

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  async function makeQuiz() {
    const pool = results.filter(p => p.o && p.o.length);
    if (!pool.length) return;
    const size = Math.min(Number(el.practiceSize.value) || 10, pool.length);
    const pick = shuffle(pool.slice()).slice(0, size);

    const label = el.practice.innerHTML;
    el.practice.disabled = true;
    el.practice.textContent = "იტვირთება...";
    try {
      const pathOf = p => `quizzes/class-${p.g}/${p.y}/quiz-${p.q}.js`;
      const files = new Map(pick.map(p => [pathOf(p), null]));
      await Promise.all([...files.keys()].map(async path => files.set(path, await loadQuizScript(path))));
      const quiz = pick.map(p => {
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
        totalAvailable: pool.length,
        back: "problems.html" + location.search,
      }));
      location.href = "random-quiz.html";
    } catch (err) {
      console.error(err);
      alert("ქვიზის შედგენა ვერ მოხერხდა. სცადეთ თავიდან.");
      el.practice.innerHTML = label;
      el.practice.disabled = false;
    }
  }

  /* ---------------------------------------------------------------- start */

  el.more.addEventListener("click", renderMore);
  el.practice.addEventListener("click", makeQuiz);
  el.clear.addEventListener("click", () => { KINDS.forEach(k => selected[k].clear()); update(); });
  el.toggle.addEventListener("click", () => {
    const open = el.filters.classList.toggle("is-open");
    el.toggle.setAttribute("aria-expanded", String(open));
  });
  window.addEventListener("popstate", () => { readUrl(); update(); });

  Promise.all([
    TagUI.ready.then(t => { tags = t; }),
    fetch("data/problems.json", { cache: "no-cache" }).then(r => (r.ok ? r.json() : Promise.reject(new Error("HTTP " + r.status)))),
  ])
    .then(([, data]) => {
      problems = data;
      const progress = window.QuizProgress ? QuizProgress.all() : {};
      hasProgress = Object.keys(progress).length > 0;
      problems.forEach(p => {
        p.st = window.QuizProgress ? QuizProgress.status(QuizProgress.id(p.g, p.y, p.q, p.n), progress) : "new";
      });
      readUrl();
      update();
    })
    .catch(err => {
      console.error(err);
      el.count.textContent = "ამოცანების ჩატვირთვა ვერ მოხერხდა. სცადეთ გვერდის განახლება.";
    });
})();
