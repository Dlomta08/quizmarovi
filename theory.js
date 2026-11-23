/*
 * Theory pages (theory.html).
 *   theory.html                     list of topics, grouped area → topic group, filterable by grade (?grade=8)
 *   theory.html?topic=<topic-id>    one topic: renders theory/<topic-id>.md (Markdown via marked, math via KaTeX)
 *
 * - The list of pages comes from data/theory.json (tools/build-theory-index.js), labels from data/tags.json (TagUI).
 * - Pages with "reviewed: false" are drafts: shown only locally or after opening any page with ?drafts=1
 *   (TagUI.theoryDrafts; ?drafts=0 turns it off again), always with a banner and noindex.
 * - "ივარჯიშე" opens the problem browser filtered by the topic (problems.html?topic=<id>).
 */
(function () {
  "use strict";

  const app = document.getElementById("app");
  const params = new URLSearchParams(location.search);
  const drafts = TagUI.theoryDrafts();
  const AREA_ICON = {
    algebra: "fa-square-root-variable", geometry: "fa-draw-polygon", solid: "fa-cube",
    calculus: "fa-wave-square", "prob-stats": "fa-dice",
  };

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const gradeLabel = g => (g === 7 ? "მე-7" : `მე-${g}`) + " კლასი";

  const theoryIndex = fetch("data/theory.json", { cache: "no-cache" })
    .then(r => (r.ok ? r.json() : Promise.reject(new Error("HTTP " + r.status))));

  Promise.all([theoryIndex, TagUI.ready])
    .then(([rows, tags]) => {
      const byId = new Map(rows.map(r => [r.id, r]));
      const visible = id => { const r = byId.get(id); return r && (r.reviewed || drafts) ? r : null; };
      const topic = params.get("topic");
      if (topic) return showTopic(topic, visible, tags);
      showIndex(rows, visible, tags);
    })
    .catch(e => {
      console.error(e);
      app.innerHTML = `<p class="th-empty">გვერდი ვერ ჩაიტვირთა. სცადეთ თავიდან.</p>`;
    });

  /** Topics in tags.json order: leaf topics, and groups without children (tagged directly). */
  function topicsOf(tags) {
    const out = [];
    tags.topics.forEach(g => {
      const kids = g.children || [];
      if (!kids.length) out.push({ id: g.id, ka: g.ka, area: g.area, group: g.id, grades: g.grades || [] });
      kids.forEach(c => out.push({ id: c.id, ka: c.ka, area: g.area, group: g.id, grades: c.grades || [] }));
    });
    return out;
  }

  // ================================================================ topic list
  function showIndex(rows, visible, tags) {
    document.getElementById("backLink").href = "classes.html";
    const all = topicsOf(tags);
    let grade = parseInt(params.get("grade"), 10);
    if (!(grade >= 7 && grade <= 11)) grade = 0;

    app.innerHTML = `<div class="th-index">
      <header class="th-index-head">
        <h1>თეორია</h1>
        <p>განმარტებები, ფორმულები, დამტკიცებები და ამოხსნილი მაგალითები — ყველა თემა, რომელიც ქვიზებში გვხვდება.</p>
      </header>
      <div class="th-grades" role="group" aria-label="კლასი">
        ${[0, 7, 8, 9, 10, 11].map(g => `<button type="button" data-grade="${g}">${g ? gradeLabel(g) : "ყველა"}</button>`).join("")}
      </div>
      <div id="thList"></div>
    </div>`;
    const list = document.getElementById("thList");

    function render() {
      app.querySelectorAll(".th-grades button").forEach(b => b.setAttribute("aria-pressed", String(+b.dataset.grade === grade)));
      let html = "", shown = 0;
      tags.area.forEach(area => {
        let areaHtml = "";
        tags.topics.filter(g => g.area === area.id).forEach(group => {
          const items = all.filter(t => t.group === group.id).map(t => {
            const row = visible(t.id);
            const grades = row ? row.grades : t.grades;
            if (grade && !grades.includes(grade)) return "";
            if (row) {
              shown++;
              return `<li><a class="th-topic" data-area="${area.id}" href="theory.html?topic=${encodeURIComponent(t.id)}">
                <span>${esc(row.title)}</span>
                ${row.reviewed ? "" : `<small class="th-pill th-pill--draft">მონახაზი</small>`}
                <small>${row.n ? row.n + " ამოცანა" : ""}</small></a></li>`;
            }
            // not written yet: only listed in draft mode, so the author sees what's missing
            return drafts ? `<li><div class="th-topic is-missing" data-area="${area.id}"><span>${esc(t.ka)}</span><small>მალე</small></div></li>` : "";
          }).join("");
          if (items.trim()) areaHtml += `<div class="th-group"><h3>${esc(group.ka)}</h3><ul class="th-topics">${items}</ul></div>`;
        });
        if (areaHtml) {
          html += `<section class="th-area" id="area-${area.id}" data-area="${area.id}">
            <h2><i class="fas ${AREA_ICON[area.id] || "fa-book"}" aria-hidden="true"></i>${esc(area.ka)}</h2>${areaHtml}</section>`;
        }
      });
      list.innerHTML = shown || drafts ? html : `<p class="th-empty">თეორიის გვერდები მალე დაემატება.</p>`;
      if (location.hash) { const el = document.getElementById(location.hash.slice(1)); if (el) el.scrollIntoView(); }
    }

    app.querySelector(".th-grades").addEventListener("click", e => {
      const b = e.target.closest("button");
      if (!b) return;
      grade = +b.dataset.grade;
      const q = new URLSearchParams(location.search);
      if (grade) q.set("grade", grade); else q.delete("grade");
      history.replaceState(null, "", location.pathname + (q.toString() ? "?" + q : ""));
      render();
    });
    render();
  }

  // ================================================================ one topic
  function showTopic(id, visible, tags) {
    document.getElementById("backLink").href = "theory.html";
    document.querySelector("#backLink span").textContent = "თეორია";
    const row = /^[a-z0-9-]+$/.test(id) ? visible(id) : null;
    if (!row) {
      app.innerHTML = `<p class="th-empty">ამ თემის თეორია ჯერ არ არის. <a href="theory.html">ყველა თემა</a></p>`;
      return;
    }
    return fetch(`theory/${id}.md`, { cache: "no-cache" })
      .then(r => (r.ok ? r.text() : Promise.reject(new Error("HTTP " + r.status))))
      .then(src => renderTopic(row, TheoryLib.parse(src), visible, tags));
  }

  function renderMath(tex, display) {
    try {
      return katex.renderToString(tex, { displayMode: display, throwOnError: true, strict: false });
    } catch (e) {
      console.warn("KaTeX:", e.message, tex);
      return `<code class="th-math-error" title="${esc(e.message)}">${esc(tex)}</code>`;
    }
  }

  function renderTree(node, ctx) {
    const inner = () => node.children
      .map(c => (typeof c === "string" ? marked.parse(c) : renderTree(c, ctx))).join("");
    switch (node.kind) {
      case "root": return inner();
      case "definition": case "theorem": case "formula": case "note":
        return `<div class="th-box th-box--${node.kind}"><div class="th-box-label">${TheoryLib.BOX_LABELS[node.kind]}` +
          `${node.title ? " · " + esc(node.title) : ""}</div>${inner()}</div>`;
      case "example": {
        const n = ++ctx.example;
        return `<div class="th-example"><div class="th-example-head"><span class="th-num">${n}</span>მაგალითი ${n}` +
          `${node.title ? `<span class="th-level">${esc(node.title)}</span>` : ""}</div>${inner()}</div>`;
      }
      case "check":
        return `<div class="th-check"><span class="th-num">${++ctx.check}</span><div>${inner()}</div></div>`;
      case "solution": case "answer":
        return `<details class="th-reveal"><summary>${node.kind === "solution" ? "ამოხსნის ჩვენება" : "პასუხის ჩვენება"}</summary>` +
          `<div class="th-reveal-body">${inner()}</div></details>`;
      default: return inner();
    }
  }

  function topicChip(id, visible) {
    const row = visible(id);
    const area = TagUI.areaOf("topic", id) || "";
    if (row) return `<a class="th-chip" data-area="${area}" href="theory.html?topic=${encodeURIComponent(id)}">${esc(row.title)}</a>`;
    return `<a class="th-chip" data-area="${area}" href="${TagUI.filterUrl("topic", id)}" title="თეორია ჯერ არ არის — ამ თემის ამოცანები">` +
      `${esc(TagUI.label("topic", id))}<i class="fas fa-magnifying-glass" aria-hidden="true"></i></a>`;
  }

  function renderTopic(row, doc, visible, tags) {
    const m = doc.meta;
    const title = m.title || row.title;
    marked.use({ gfm: true });
    const html = TheoryLib.restoreMath(renderTree(doc.tree, { example: 0, check: 0 }), doc.math, renderMath);

    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    const hs = [...tmp.querySelectorAll("h2")];
    hs.forEach((h, i) => { h.id = "s" + (i + 1); });

    const areaLabel = TagUI.label("area", row.area);
    const groupLabel = row.group !== row.id ? TagUI.label("topic", row.group) : "";
    const practice = row.n
      ? `<a class="th-btn" href="${TagUI.filterUrl("topic", row.id)}"><i class="fas fa-play" aria-hidden="true"></i> ივარჯიშე · ${row.n} ამოცანა</a>`
      : `<span class="th-btn is-disabled"><i class="fas fa-hourglass-half" aria-hidden="true"></i> ამოცანები ჯერ არ არის</span>`;
    const list = ids => (Array.isArray(ids) ? ids : []).filter(x => TagUI.state.topic.has(x));
    const pre = list(m.prerequisites), next = list(m.next);

    app.innerHTML = `<div class="th-grid">
      <aside class="th-toc" aria-label="შინაარსი"><b>შინაარსი</b>
        ${hs.map(h => `<a href="#${h.id}">${esc(h.textContent)}</a>`).join("")}</aside>
      <article data-area="${row.area}">
        ${row.reviewed ? "" : `<div class="th-draft"><i class="fas fa-pen" aria-hidden="true"></i> მონახაზი — ეს გვერდი ჯერ არ არის გადამოწმებული.</div>`}
        <header class="th-head">
          <div class="th-crumbs"><a href="theory.html#area-${row.area}">${esc(areaLabel)}</a>
            ${groupLabel ? `<i class="fas fa-angle-right" aria-hidden="true"></i><span>${esc(groupLabel)}</span>` : ""}</div>
          <h1 class="th-title">${esc(title)}</h1>
          <div class="th-meta">${row.grades.map(g => `<span class="th-pill">${gradeLabel(g)}</span>`).join("")}${practice}</div>
        </header>
        <div class="th-content">${tmp.innerHTML}</div>
        <footer class="th-links">
          <div class="th-practice"><div><b>ამოცანები ამ თემაზე</b><small>ძველი ქვიზებიდან, ამოხსნებით</small></div>${practice}</div>
          ${pre.length ? `<div><h3>ჯერ გაიმეორე</h3><div class="th-chips">${pre.map(x => topicChip(x, visible)).join("")}</div></div>` : ""}
          ${next.length ? `<div><h3>შემდეგი თემები</h3><div class="th-chips">${next.map(x => topicChip(x, visible)).join("")}</div></div>` : ""}
        </footer>
      </article></div>`;

    // page title, description, drafts not indexed
    document.title = `${title} · თეორია`;
    const firstP = app.querySelector(".th-content p");
    if (firstP) {
      const d = firstP.textContent.replace(/\s+/g, " ").trim().slice(0, 160);
      document.querySelector('meta[name="description"]').content = d;
      const og = document.querySelector('meta[property="og:description"]'); if (og) og.content = d;
    }
    const ogt = document.querySelector('meta[property="og:title"]'); if (ogt) ogt.content = document.title;
    if (!row.reviewed) {
      const robots = document.createElement("meta");
      robots.name = "robots"; robots.content = "noindex";
      document.head.appendChild(robots);
    }

    // table of contents: highlight the section being read
    const links = [...app.querySelectorAll(".th-toc a")];
    if ("IntersectionObserver" in window && links.length) {
      const heads = links.map(a => document.getElementById(a.hash.slice(1)));
      const mark = id => links.forEach(a => a.classList.toggle("is-active", a.hash === "#" + id));
      mark(heads[0].id);
      const io = new IntersectionObserver(() => {
        let cur = heads[0];
        heads.forEach(h => { if (h.getBoundingClientRect().top < 140) cur = h; });
        mark(cur.id);
      }, { rootMargin: "-80px 0px -60% 0px", threshold: [0, 1] });
      heads.forEach(h => io.observe(h));
    }
    if (location.hash) { const el = document.getElementById(location.hash.slice(1)); if (el) el.scrollIntoView(); }
    document.body.dataset.theoryReady = "1";   // for tests
  }
})();
