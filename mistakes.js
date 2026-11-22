/*
 * mistakes.js — the "mistakes notebook" page (mistakes.html).
 *
 * Shows the problems the logged-in student answered wrong and hasn't solved correctly yet
 * (the my_mistakes view in the database). Question text comes from data/problems.json.
 * "თავიდან ცდა" opens a practice quiz with that problem (practice.js); a correct answer there
 * is saved like any other, so the problem disappears from this list.
 */
(function () {
  "use strict";

  const content = document.getElementById("content");
  const MAX_RETRY_ALL = 25;               // "retry all" uses at most this many (most recent first)

  let problemsById = null;                // "10-2025-26-1-7" -> row of data/problems.json

  function loadProblems() {
    if (problemsById) return Promise.resolve(problemsById);
    return fetch("data/problems.json", { cache: "no-cache" })
      .then(r => (r.ok ? r.json() : Promise.reject(new Error("HTTP " + r.status))))
      .then(list => {
        problemsById = new Map(list.map(p => [`${p.g}-${p.y}-${p.q}-${p.n}`, p]));
        return problemsById;
      });
  }

  function note(html) {
    content.innerHTML = `<div class="acc-note">${html}</div>`;
  }

  function showLoggedOut() {
    note(`<p>შეცდომების რვეულის სანახავად შედი ანგარიშზე.</p>
          <button type="button" class="acc-btn" id="login"><i class="fab fa-google"></i>შესვლა Google-ით</button>`);
    document.getElementById("login").addEventListener("click", () => QuizAuth.signIn());
  }

  // "1-ელი" / "მე-3" (Georgian ordinals for quiz numbers)
  const ord = n => (Number(n) === 1 ? "1-ელი" : `მე-${n}`);

  function shortDate(iso) {
    return new Intl.DateTimeFormat("ka-GE", { day: "numeric", month: "short", timeZone: "Asia/Tbilisi" })
      .format(new Date(iso));
  }

  // Name of the topic group, e.g. "ტრიგონომეტრია" (from the first topic of the problem).
  function topicGroupLabel(p) {
    const t = (p.t || [])[0];
    if (!t || !TagUI.state.topic.has(t)) return "";
    const info = TagUI.state.topic.get(t);
    return TagUI.label("topic", info.parent || t);
  }

  function retry(list, button) {
    const label = button.innerHTML;
    button.disabled = true;
    button.textContent = "იტვირთება...";
    QuizPractice.start(list, { back: "mistakes.html", title: "შეცდომების გამეორება" }).catch(err => {
      console.error(err);
      alert("ქვიზის შედგენა ვერ მოხერხდა. სცადე თავიდან.");
      button.innerHTML = label;
      button.disabled = false;
    });
  }

  function card(p, m) {
    const li = document.createElement("li");
    li.className = "mistake";

    const meta = document.createElement("div");
    meta.className = "mistake-meta";
    meta.append(`მე-${p.g} კლასი · ${p.y} · ${ord(p.q)} ქვიზი · №${p.n}`);
    const group = topicGroupLabel(p);
    if (group) {
      const tag = document.createElement("span");
      tag.className = "mistake-tag";
      tag.textContent = group;
      meta.appendChild(tag);
    }

    // question text is HTML from our own quiz files (same as on the quiz page)
    const q = document.createElement("div");
    q.className = "mistake-q";
    q.innerHTML = (p.in ? `<div>${p.in}</div>` : "") + p.x;
    if (p.i) {
      const img = document.createElement("img");
      img.src = p.i;
      img.alt = `${p.n}-ე ამოცანის ნახაზი`;
      img.loading = "lazy";
      q.appendChild(img);
    }

    const row = document.createElement("div");
    row.className = "mistake-row";
    row.innerHTML = '<i class="fas fa-xmark" aria-hidden="true"></i><span></span>' +
      '<button type="button" class="acc-btn"><i class="fas fa-rotate-right"></i>თავიდან ცდა</button>';
    row.querySelector("span").textContent = `${m.attempts} ცდა · ბოლოს: ${shortDate(m.last_attempt_at)}`;
    const btn = row.querySelector("button");
    btn.addEventListener("click", () => retry([p], btn));

    li.append(meta, q, row);
    return li;
  }

  async function show() {
    if (!QuizAuth.isLoggedIn()) { showLoggedOut(); return; }
    note("<p>იტვირთება...</p>");
    try {
      const [rows, byId] = await Promise.all([
        QuizCloud.fetchAll("my_mistakes", "problem_id, attempts, last_attempt_at", "last_attempt_at"),
        loadProblems(),
        TagUI.ready,
      ]);
      // skip problems that no longer exist in the quiz files
      const items = rows.map(m => ({ m, p: byId.get(m.problem_id) })).filter(x => x.p);

      if (!items.length) {
        note(`<p>შეცდომები არ გაქვს 🎉</p>
              <p>როცა რომელიმე ამოცანას არასწორად უპასუხებ, აქ გამოჩნდება.</p>
              <a class="acc-btn" href="classes.html"><i class="fas fa-play"></i>ქვიზების ამოხსნა</a>`);
        return;
      }

      content.textContent = "";
      const toolbar = document.createElement("div");
      toolbar.className = "acc-toolbar";
      toolbar.innerHTML = `<span class="acc-count">${items.length} ამოცანა</span>` +
        '<button type="button" class="acc-btn"><i class="fas fa-rotate-right"></i>ყველას თავიდან ცდა</button>';
      const allBtn = toolbar.querySelector("button");
      if (items.length > MAX_RETRY_ALL) allBtn.title = `ბოლო ${MAX_RETRY_ALL} შეცდომა`;
      allBtn.addEventListener("click", () => retry(items.slice(0, MAX_RETRY_ALL).map(x => x.p), allBtn));

      const ul = document.createElement("ul");
      ul.className = "mistake-list";
      items.forEach(({ p, m }) => ul.appendChild(card(p, m)));
      content.append(toolbar, ul);

      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([ul]).catch(() => {});
      else window.addEventListener("load", () => window.MathJax && MathJax.typesetPromise && MathJax.typesetPromise([ul]), { once: true });
    } catch (err) {
      console.error(err);
      note("<p>ჩატვირთვა ვერ მოხერხდა. სცადე გვერდის განახლება.</p>");
    }
  }

  if (!window.QuizAuth || !window.QuizCloud) {
    note("<p>ანგარიშები ახლა მიუწვდომელია. სცადე მოგვიანებით.</p>");
    return;
  }
  QuizAuth.ready.then(show);
  QuizAuth.onChange(() => show());       // logged in / out on this page
})();
