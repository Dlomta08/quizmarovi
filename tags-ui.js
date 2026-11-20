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
   * pass { onClick(kind, id) } to handle clicks in the page instead (used by the problem browser).
   */
  function renderChips(container, p, opts) {
    opts = opts || {};
    container.textContent = "";
    container.classList.add("tag-chips");
    chipsFor(p).forEach(({ kind, id }) => {
      const a = document.createElement("a");
      a.className = `tag-chip tag-chip--${kind}` + (kind === "difficulty" ? ` tag-chip--d${id}` : "");
      a.href = filterUrl(kind, id);
      a.textContent = label(kind, id);
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

  window.TagUI = { ready, label, filterUrl, chipsFor, renderChips, state };
})();
