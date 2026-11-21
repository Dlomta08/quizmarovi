/*
 * Tag labels and chips, shared by quiz.html (chips under each problem) and problems.html (filters).
 * Loads data/tags.json once; every label shown to users comes from its Georgian "ka" field.
 *
 *   TagUI.ready.then(() => TagUI.renderChips(container, problem))
 *   problem = { area, topics: [], difficulty, type: [], method: [] }
 */
(function () {
  "use strict";

  const state = { tags: null, topic: new Map(), labels: {} };

  const ready = fetch("data/tags.json", { cache: "no-cache" })
    .then(r => (r.ok ? r.json() : Promise.reject(new Error("HTTP " + r.status))))
    .then(tags => {
      state.tags = tags;
      // topics: id -> { id, ka, area, parent, children }
      tags.topics.forEach(group => {
        state.topic.set(group.id, { id: group.id, ka: group.ka, area: group.area, parent: null,
                                    children: (group.children || []).map(c => c.id) });
        (group.children || []).forEach(c =>
          state.topic.set(c.id, { id: c.id, ka: c.ka, area: group.area, parent: group.id, children: [] }));
      });
      const map = list => Object.fromEntries(list.map(x => [String(x.id), x.ka]));
      state.labels = {
        area: map(tags.area),
        difficulty: map(tags.difficulty),
        type: map(tags.type),
        method: map(tags.method),
      };
      return tags;
    });

  /* Icons (Font Awesome) — areas color and mark topic chips; types/methods get their own icon. */
  const AREA_ICON = {
    algebra: "fa-square-root-variable", geometry: "fa-draw-polygon", solid: "fa-cube",
    calculus: "fa-wave-square", "prob-stats": "fa-dice",
  };
  const TYPE_ICON = {
    compute: "fa-calculator", solve: "fa-equals", proof: "fa-scroll", word: "fa-book-open",
    construction: "fa-compass-drafting", graph: "fa-chart-line",
  };
  const METHOD_ICON = {
    parameter: "fa-sliders", absolute: "fa-grip-lines-vertical", substitution: "fa-right-left",
    graphical: "fa-chart-area", estimation: "fa-scale-balanced", "full-square": "fa-square",
    "aux-construct": "fa-pen-ruler", coordinates: "fa-crosshairs", vectors: "fa-arrow-right-long",
  };

  /** The area a tag belongs to (topics and areas only) — used for its color. */
  function areaOf(kind, id) {
    if (kind === "area") return String(id);
    if (kind === "topic") return state.topic.has(id) ? state.topic.get(id).area : null;
    return null;
  }

  /** Font Awesome icon class for a tag, or "" if it has none. */
  function icon(kind, id) {
    if (kind === "area" || kind === "topic") return AREA_ICON[areaOf(kind, id)] || "";
    if (kind === "type") return TYPE_ICON[id] || "";
    if (kind === "method") return METHOD_ICON[id] || "";
    return "";
  }

  /** Small visual for a tag: an icon, or 3 bars for difficulty. Returns an element or null. */
  function marker(kind, id) {
    if (kind === "difficulty") {
      const bars = document.createElement("span");
      bars.className = `tag-bars tag-bars--d${id}`;
      bars.setAttribute("aria-hidden", "true");
      bars.innerHTML = "<i></i><i></i><i></i>";
      return bars;
    }
    const cls = icon(kind, id);
    if (!cls) return null;
    const i = document.createElement("i");
    i.className = `fas ${cls} tag-icon`;
    i.setAttribute("aria-hidden", "true");
    return i;
  }

  function label(kind, id) {
    if (kind === "topic") return state.topic.has(id) ? state.topic.get(id).ka : id;
    if (kind === "grade") return Number(id) === 1 ? "1-ელი კლასი" : `მე-${id} კლასი`;
    return (state.labels[kind] || {})[String(id)] || String(id);
  }

  /** Link to the problem browser filtered by one tag. */
  function filterUrl(kind, id) {
    return `problems.html?${kind}=${encodeURIComponent(id)}`;
  }

  /** The chips for one problem, in display order. */
  function chipsFor(p) {
    const chips = [];
    (p.topics || []).forEach(id => chips.push({ kind: "topic", id }));
    if (p.difficulty) chips.push({ kind: "difficulty", id: p.difficulty });
    (p.type || []).forEach(id => chips.push({ kind: "type", id }));
    (p.method || []).forEach(id => chips.push({ kind: "method", id }));
    return chips;
  }

  /**
   * Fills `container` with chips. By default each chip is a link to problems.html filtered by that tag;
   * pass { onClick(kind, id) } to handle clicks in the page instead (used by the problem browser),
   * or { newTab: true } to open the links in a new tab (used in quizzes).
   */
  function renderChips(container, p, opts) {
    opts = opts || {};
    container.textContent = "";
    container.classList.add("tag-chips");
    chipsFor(p).forEach(({ kind, id }) => {
      const a = document.createElement("a");
      a.className = `tag-chip tag-chip--${kind}` + (kind === "difficulty" ? ` tag-chip--d${id}` : "");
      const area = areaOf(kind, id);
      if (area) a.dataset.area = area;
      a.href = filterUrl(kind, id);
      if (opts.newTab) { a.target = "_blank"; a.rel = "noopener"; }
      const m = marker(kind, id);
      if (m) a.appendChild(m);
      const text = document.createElement("span");
      text.textContent = label(kind, id);
      a.appendChild(text);
      a.title = { topic: "თემა", difficulty: "სირთულე", type: "ტიპი", method: "მეთოდი" }[kind] + ": " + a.textContent;
      if (opts.onClick) {
        a.addEventListener("click", e => {
          if (e.ctrlKey || e.metaKey || e.shiftKey || e.button === 1) return; // let "open in new tab" work
          e.preventDefault();
          opts.onClick(kind, id);
        });
      }
      container.appendChild(a);
    });
    return container;
  }

  window.TagUI = { ready, label, filterUrl, chipsFor, renderChips, areaOf, icon, marker, state };
})();
