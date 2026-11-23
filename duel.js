/*
 * duel.js — the duel page (duel.html). Math only; login required to play.
 *
 *   duel.html              -> create a duel, join by code, list of my duels
 *   duel.html?code=K7P2QX  -> that duel: invitation / start / play / result, depending on its state
 *
 * Everything that matters is decided in the database (supabase/duels.sql): the server picks the
 * problems, grades every answer, keeps the clock and decides the winner. This page only shows it.
 * Problem texts come from data/problems.json (no answers in it); the answer key and solutions are
 * shown only after the player has finished.
 */
(function () {
  "use strict";

  const content = document.getElementById("content");
  const LETTERS = ["ა", "ბ", "გ", "დ", "ე", "ვ"];
  const GRADES = [7, 8, 9, 10, 11];
  const COUNTS = [5, 10, 15];
  const SECONDS_PER_PROBLEM = 120;          // same as duel_seconds_per_problem() in duels.sql
  const MIN_PROBLEMS = 3;                   // create_duel() needs at least this many
  const POLL_MS = 20000;                    // waiting for the opponent: check again this often

  const ERRORS = [
    ["not enough problems", "ამ არჩევანით საკმარისი ამოცანა ვერ მოიძებნა. აირჩიე სხვა თემა ან სირთულე."],
    ["too many open duels", "ერთდროულად მაქსიმუმ 10 დაუსრულებელი დუელი შეიძლება. ჯერ დაასრულე რომელიმე."],
    ["duel not open", "ეს დუელი უკვე აღარ არის ღია."],
    ["duel closed", "დუელის ვადა გავიდა."],
    ["no profile", "ჯერ დაასრულე ანგარიშის შექმნა (სახელი, კლასი, ავატარი)."],
    ["not logged in", "ჯერ შედი ანგარიშზე."],
  ];
  function errText(err) {
    const m = String((err && (err.message || err.details)) || "");
    const hit = ERRORS.find(([key]) => m.includes(key));
    return hit ? hit[1] : "რაღაც შეცდომა მოხდა. სცადე თავიდან.";
  }

  const code = (new URLSearchParams(location.search).get("code") || "").trim().toUpperCase();

  /* ---------------------------------------------------------------- helpers */

  async function rpc(name, args) {
    const { data, error } = await QuizAuth.client.rpc(name, args || {});
    if (error) throw error;
    return data;
  }

  // Small DOM helper: h("div", "cls", "text") — text is set with textContent (safe for usernames).
  function h(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function note(html) {
    content.innerHTML = `<div class="acc-note">${html}</div>`;
  }

  // Same as typesetMath() in quiz.js: MathJax typesets what is on the page when it starts,
  // later content is typeset here, one call after another.
  function typeset(nodes) {
    const mj = window.MathJax;
    if (!mj || typeof mj.typesetPromise !== "function" || !mj.startup || !mj.startup.promise) return;
    mj.startup.promise = mj.startup.promise
      .then(() => mj.typesetPromise(nodes))
      .catch(err => console.warn("MathJax:", err));
  }

  let problemsById = null;                // "10-2025-26-1-7" -> row of data/problems.json
  let problemList = null;
  function loadProblems() {
    if (problemsById) return Promise.resolve(problemsById);
    return fetch("data/problems.json", { cache: "no-cache" })
      .then(r => (r.ok ? r.json() : Promise.reject(new Error("HTTP " + r.status))))
      .then(list => {
        problemList = list;
        problemsById = new Map(list.map(p => [`${p.g}-${p.y}-${p.q}-${p.n}`, p]));
        return problemsById;
      });
  }

  const pidParts = pid => {
    const m = /^(\d+)-(\d{4}-\d{2})-(\d+)-(\d+)$/.exec(pid);
    return m ? { g: m[1], y: m[2], q: m[3], n: Number(m[4]) } : null;
  };

  function mmss(ms) {
    const s = Math.max(0, Math.round(ms / 1000));
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  }
  const minutes = sec => `${Math.round(sec / 60)} წთ`;

  function dateTime(iso) {
    return new Intl.DateTimeFormat("ka-GE", {
      day: "numeric", month: "short", hour: "2-digit", minute: "2-digit", timeZone: "Asia/Tbilisi",
    }).format(new Date(iso));
  }

  // "მე-9 კლასი · ალგებრა · საშუალო · 10 ამოცანა"
  function settingsText(d) {
    const parts = [`მე-${d.grade} კლასი`];
    parts.push(d.topic_group ? TagUI.label("topic", d.topic_group) : "ყველა თემა");
    if (d.difficulty) parts.push(TagUI.label("difficulty", d.difficulty));
    parts.push(`${d.count} ამოცანა`);
    return parts.join(" · ");
  }

  function avatar(key) {
    return h("span", "duel-avatar", QuizAuth.avatarEmoji(key));
  }

  // Server time minus local time (so a wrong clock on the student's device doesn't matter).
  let clockOffset = 0;
  const serverNow = () => Date.now() + clockOffset;

  // Timers / polling of the current view; cleared on every re-render.
  let cleanups = [];
  function cleanup() {
    cleanups.forEach(fn => { try { fn(); } catch {} });
    cleanups = [];
  }

  function shareBox(d) {
    const url = `${location.origin}${location.pathname}?code=${d.code}`;
    const box = h("div", "duel-share");
    box.appendChild(h("p", null, "გაუგზავნე ეს ბმული მეგობარს (ან უთხარი კოდი " + d.code + "):"));
    const row = h("div", "duel-share-row");
    const input = h("input");
    input.readOnly = true;
    input.value = url;
    input.addEventListener("focus", () => input.select());
    const copy = h("button", "acc-btn");
    copy.type = "button";
    copy.innerHTML = '<i class="fas fa-copy"></i>კოპირება';
    copy.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(url); } catch { input.select(); document.execCommand("copy"); }
      copy.innerHTML = '<i class="fas fa-check"></i>დაკოპირდა';
      setTimeout(() => { copy.innerHTML = '<i class="fas fa-copy"></i>კოპირება'; }, 2000);
    });
    row.append(input, copy);
    if (navigator.share) {
      const share = h("button", "acc-btn");
      share.type = "button";
      share.innerHTML = '<i class="fas fa-share-nodes"></i>გაზიარება';
      share.addEventListener("click", () => {
        navigator.share({ title: "დუელი", text: "გამოგიწვიე მათემატიკის დუელში!", url }).catch(() => {});
      });
      row.appendChild(share);
    }
    box.appendChild(row);
    return box;
  }

  /* ---------------------------------------------------------------- router */

  // One render at a time; a request that arrives meanwhile (e.g. login) renders again afterwards.
  let showing = false;
  let again = false;
  async function show() {
    if (showing) { again = true; return; }
    showing = true;
    try {
      do {
        again = false;
        cleanup();
        await TagUI.ready.catch(() => {});
        if (!code) await showHome();
        else await showDuel();
      } while (again);
    } finally {
      showing = false;
    }
  }

  async function showDuel() {
    note("<p>იტვირთება...</p>");
    let d;
    try {
      d = await rpc("get_duel", { p_code: code });
    } catch (err) {
      console.error(err);
      note("<p>ჩატვირთვა ვერ მოხერხდა. სცადე გვერდის განახლება.</p>");
      return;
    }
    if (!d) {
      note(`<p>დუელი კოდით <b>${code.replace(/[^A-Z0-9]/g, "")}</b> ვერ მოიძებნა.</p>
            <a class="acc-btn" href="duel.html"><i class="fas fa-arrow-left"></i>დუელები</a>`);
      return;
    }
    clockOffset = Date.parse(d.server_now) - Date.now();

    if (!QuizAuth.isLoggedIn() || !d.is_player) return showInvite(d);
    const me = d.me;
    if (!me.started_at) {
      if (d.status === "open" || d.status === "active") return showReady(d);
      return showResult(d);                // expired, or finished without playing
    }
    if (!me.finished_at) return showPlay(d);
    return showResult(d);
  }

  /* ---------------------------------------------------------------- home: create / join / list */

  async function showHome() {
    content.textContent = "";
    if (!QuizAuth.isLoggedIn()) {
      note(`<p>დუელისთვის საჭიროა ანგარიში — ასე გაიგებს მეგობარი, ვისთან თამაშობს.</p>
            <button type="button" class="acc-btn" id="login"><i class="fab fa-google"></i>შესვლა Google-ით</button>`);
      document.getElementById("login").addEventListener("click", () => QuizAuth.signIn());
      content.appendChild(joinBox());
      return;
    }
    if (!QuizAuth.profile) {
      note("<p>ჯერ დაასრულე ანგარიშის შექმნა (სახელი, კლასი, ავატარი).</p>");
      return;
    }
    note("<p>იტვირთება...</p>");
    let duels = [];
    try {
      [duels] = await Promise.all([rpc("my_duels", { p_limit: 30 }), loadProblems()]);
    } catch (err) {
      console.error(err);
      note("<p>ჩატვირთვა ვერ მოხერხდა. სცადე გვერდის განახლება.</p>");
      return;
    }
    content.textContent = "";
    const top = h("div", "duel-top");
    top.append(createBox(), joinBox());
    content.append(top, listBox(duels));
  }

  function chips(values, current, label, onPick) {
    const wrap = h("div", "duel-chips");
    values.forEach(v => {
      const b = h("button", v === current ? "on" : "", label(v));
      b.type = "button";
      b.addEventListener("click", () => {
        wrap.querySelectorAll("button").forEach(x => x.classList.remove("on"));
        b.classList.add("on");
        onPick(v);
      });
      wrap.appendChild(b);
    });
    return wrap;
  }

  function createBox() {
    const box = h("div", "acc-box duel-create");
    box.appendChild(h("h2", null, "ახალი დუელი"));
    const s = {
      grade: GRADES.includes(QuizAuth.profile.grade) ? QuizAuth.profile.grade : 9,
      topic: "", difficulty: "", count: 10,
    };

    const field = (text, control) => {
      const f = h("div", "duel-field");
      f.append(h("label", null, text), control);
      return f;
    };

    const topicSel = h("select");
    const diffSel = h("select");
    diffSel.appendChild(new Option("ნებისმიერი", ""));
    [1, 2, 3].forEach(n => diffSel.appendChild(new Option(TagUI.label("difficulty", n), String(n))));
    diffSel.addEventListener("change", () => { s.difficulty = diffSel.value; fillTopics(); });
    topicSel.addEventListener("change", () => { s.topic = topicSel.value; });

    // Topic groups that have enough multiple-choice problems for this grade (and difficulty).
    function fillTopics() {
      const counts = new Map();
      problemList.forEach(p => {
        if (p.g !== s.grade || !p.o || (s.difficulty && String(p.d) !== s.difficulty)) return;
        new Set((p.t || []).map(t => {
          const info = TagUI.state.topic.get(t);
          return info ? info.parent || info.id : null;
        })).forEach(g => { if (g) counts.set(g, (counts.get(g) || 0) + 1); });
      });
      topicSel.textContent = "";
      topicSel.appendChild(new Option("ყველა თემა", ""));
      [...counts].filter(([, n]) => n >= MIN_PROBLEMS)
        .sort((a, b) => TagUI.label("topic", a[0]).localeCompare(TagUI.label("topic", b[0]), "ka"))
        .forEach(([id, n]) => topicSel.appendChild(new Option(`${TagUI.label("topic", id)} (${n})`, id)));
      if (![...topicSel.options].some(o => o.value === s.topic)) s.topic = "";
      topicSel.value = s.topic;
    }
    fillTopics();

    box.append(
      field("კლასი", chips(GRADES, s.grade, String, v => { s.grade = v; fillTopics(); })),
      field("თემა", topicSel),
      field("სირთულე", diffSel),
      field("ამოცანების რაოდენობა",
        chips(COUNTS, s.count, n => `${n} · ${minutes(n * SECONDS_PER_PROBLEM)}`, v => { s.count = v; })),
    );

    const err = h("div", "duel-err");
    err.setAttribute("role", "alert");
    const go = h("button", "duel-go");
    go.type = "button";
    go.innerHTML = '<i class="fas fa-bolt"></i>დუელის შექმნა';
    go.addEventListener("click", async () => {
      err.textContent = "";
      go.disabled = true;
      try {
        const res = await rpc("create_duel", {
          p_grade: s.grade, p_count: s.count,
          p_topic_group: s.topic || null, p_difficulty: s.difficulty ? Number(s.difficulty) : null,
        });
        location.href = `duel.html?code=${res.code}`;
      } catch (e) {
        console.error(e);
        err.textContent = errText(e);
        go.disabled = false;
      }
    });
    box.append(err, go);
    box.appendChild(h("p", "duel-small",
      "ამოცანებს სერვერი შეარჩევს (ჯერ ისეთებს, რომლებიც ჯერ არ გიცდია), ასე რომ წინასწარ ვერავინ ნახავს."));
    return box;
  }

  function joinBox() {
    const box = h("div", "acc-box duel-join");
    box.appendChild(h("h2", null, "შესვლა კოდით"));
    box.appendChild(h("p", "duel-small", "მეგობარმა კოდი გამოგიგზავნა? ჩაწერე აქ."));
    const row = h("form", "duel-share-row");
    const input = h("input");
    input.maxLength = 6;
    input.placeholder = "K7P2QX";
    input.autocomplete = "off";
    input.spellcheck = false;
    input.className = "duel-code-input";
    const btn = h("button", "acc-btn");
    btn.type = "submit";
    btn.innerHTML = '<i class="fas fa-arrow-right"></i>გახსნა';
    row.addEventListener("submit", e => {
      e.preventDefault();
      const c = input.value.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
      if (c.length === 6) location.href = `duel.html?code=${c}`;
      else input.focus();
    });
    row.append(input, btn);
    box.appendChild(row);
    return box;
  }

  // Short status of a duel in the list.
  function rowStatus(x) {
    if (x.status === "finished") {
      const score = x.started ? `${x.score} : ${x.opp_score ?? 0}` : "";
      if (x.result === "win") return { text: `მოიგე 🏆 ${score}`, cls: "win" };
      if (x.result === "loss") return { text: `წააგე ${score}`, cls: "loss" };
      return { text: `ფრე ${score}`, cls: "draw" };
    }
    if (x.status === "expired") return { text: "ვადა გავიდა", cls: "muted" };
    if (!x.started) return { text: "შენი ჯერია", cls: "turn" };
    if (!x.finished) return { text: "მიმდინარე", cls: "turn" };
    return { text: x.opp_username ? "ელოდება მოწინააღმდეგეს" : "ელოდება მიღებას", cls: "muted" };
  }

  function listBox(duels) {
    const box = h("div", "acc-box");
    box.appendChild(h("h2", null, "ჩემი დუელები"));
    if (!duels.length) {
      box.appendChild(h("p", "empty", "ჯერ არცერთი დუელი არ გქონია. შექმენი პირველი და გაუგზავნე მეგობარს!"));
      return box;
    }
    const wins = duels.filter(x => x.result === "win").length;
    const draws = duels.filter(x => x.result === "draw").length;
    const losses = duels.filter(x => x.result === "loss").length;
    if (wins + draws + losses) {
      box.appendChild(h("p", "duel-record", `მოგება ${wins} · ფრე ${draws} · წაგება ${losses}`));
    }
    const ul = h("ul", "duel-list");
    duels.forEach(x => ul.appendChild(duelRow(x)));
    box.appendChild(ul);
    return box;
  }

  function duelRow(x) {
    const li = h("li");
    const a = h("a", "duel-row");
    a.href = `duel.html?code=${x.code}`;
    a.appendChild(x.opp_username ? avatar(x.opp_avatar) : h("span", "duel-avatar", "?"));
    const mid = h("span", "duel-row-mid");
    mid.appendChild(h("b", null, x.opp_username ? `vs ${x.opp_username}` : "მოწინააღმდეგე ჯერ არ არის"));
    mid.appendChild(h("small", null, `${settingsText(x)} · ${dateTime(x.created_at)}`));
    const st = rowStatus(x);
    a.append(mid, h("span", "duel-pill " + st.cls, st.text));
    li.appendChild(a);
    return li;
  }

  /* ---------------------------------------------------------------- invitation (not a player yet) */

  function showInvite(d) {
    content.textContent = "";
    const box = h("div", "acc-box duel-invite");
    const who = h("div", "duel-invite-who");
    if (d.creator) {
      who.append(avatar(d.creator.avatar), h("b", null, `${d.creator.username} გიწვევს დუელში`));
    } else {
      who.append(h("b", null, "დუელი"));
    }
    box.append(who, h("p", "duel-settings", `${settingsText(d)} · ${minutes(d.time_limit)}`));

    if (d.status !== "open" || Date.parse(d.expires_at) < serverNow()) {
      box.appendChild(h("p", "duel-small",
        d.status === "expired" ? "ამ დუელის ვადა გავიდა." : "ამ დუელს უკვე ორი მოთამაშე ჰყავს."));
      const back = h("a", "acc-btn");
      back.href = "duel.html";
      back.innerHTML = '<i class="fas fa-bolt"></i>შექმენი შენი დუელი';
      box.appendChild(back);
      content.appendChild(box);
      return;
    }

    box.appendChild(rules(d));
    box.appendChild(h("p", "duel-small", `მიღება შეგიძლია ${dateTime(d.expires_at)}-მდე.`));
    const err = h("div", "duel-err");
    const go = h("button", "duel-go");
    go.type = "button";
    if (!QuizAuth.isLoggedIn()) {
      go.innerHTML = '<i class="fab fa-google"></i>შედი და მიიღე გამოწვევა';
      go.addEventListener("click", () => QuizAuth.signIn());
    } else {
      go.innerHTML = '<i class="fas fa-handshake"></i>მიღება';
      go.addEventListener("click", async () => {
        go.disabled = true;
        err.textContent = "";
        try {
          await rpc("join_duel", { p_code: d.code });
          show();
        } catch (e) {
          console.error(e);
          err.textContent = errText(e);
          go.disabled = false;
        }
      });
    }
    box.append(err, go);
    content.appendChild(box);
  }

  function rules(d) {
    const ul = h("ul", "duel-rules");
    [
      `${d.count} ამოცანა, ${minutes(d.time_limit)}. ტაიმერი „დაწყებაზე“ დაჭერისას ირთვება და აღარ ჩერდება.`,
      "ყოველ ამოცანას ერთხელ პასუხობ — პასუხს ვეღარ შეცვლი.",
      "მინიშნებები და ამოხსნები ჩანს მხოლოდ დასრულების შემდეგ.",
      "იგებს ვინც მეტს სწორად ამოხსნის; თანაბარ ქულაზე — ვინც ნაკლებ დროს დახარჯავს.",
      "მოგება +30 XP, ფრე +15, მონაწილეობა +5.",
    ].forEach(t => ul.appendChild(h("li", null, t)));
    return ul;
  }

  /* ---------------------------------------------------------------- ready to start */

  function vsRow(d) {
    const me = QuizAuth.profile;
    const row = h("div", "duel-vs");
    const side = (av, name, sub) => {
      const s = h("div", "duel-side");
      s.append(av, h("b", null, name), h("small", null, sub));
      return s;
    };
    row.appendChild(side(avatar(me && me.avatar), me ? me.username : "შენ", "შენ"));
    row.appendChild(h("span", "duel-vs-mark", "VS"));
    if (d.opponent) {
      const o = d.opponent;
      row.appendChild(side(avatar(o.avatar), o.username,
        o.finished ? "დაასრულა" : o.started ? "თამაშობს" : "ჯერ არ დაუწყია"));
    } else {
      row.appendChild(side(h("span", "duel-avatar", "?"), "…", "ჯერ არ მიუღია"));
    }
    return row;
  }

  function showReady(d) {
    content.textContent = "";
    const box = h("div", "acc-box duel-invite");
    box.append(vsRow(d), h("p", "duel-settings", `${settingsText(d)} · ${minutes(d.time_limit)}`));
    if (d.status === "open") box.appendChild(shareBox(d));
    box.appendChild(rules(d));
    box.appendChild(h("p", "duel-small",
      `დაწყება შეგიძლია ${dateTime(d.expires_at)}-მდე` +
      (d.status === "open" ? " — მეგობრის მოლოდინი საჭირო არ არის." : ".")));
    const err = h("div", "duel-err");
    const go = h("button", "duel-go");
    go.type = "button";
    go.innerHTML = '<i class="fas fa-play"></i>დაწყება';
    go.addEventListener("click", async () => {
      go.disabled = true;
      err.textContent = "";
      try {
        await rpc("start_duel", { p_id: d.id });
        show();
      } catch (e) {
        console.error(e);
        err.textContent = errText(e);
        go.disabled = false;
      }
    });
    box.append(err, go);
    content.appendChild(box);
  }

  /* ---------------------------------------------------------------- play */

  function problemBody(p, i) {
    const wrap = h("div", "duel-q");
    const num = h("div", "duel-q-num", `${i + 1}.`);
    wrap.appendChild(num);
    if (!p) {
      wrap.appendChild(h("p", "duel-small", "ამოცანა ვერ ჩაიტვირთა."));
      return wrap;
    }
    // question HTML comes from our own quiz files (same as on the quiz page)
    const text = h("div", "duel-q-text");
    text.innerHTML = (p.in ? `<div class="duel-q-intro">${p.in}</div>` : "") + (p.x || "");
    wrap.appendChild(text);
    if (p.i) {
      const img = h("img");
      img.src = p.i;
      img.alt = `${i + 1}-ე ამოცანის ნახაზი`;
      img.loading = "lazy";
      wrap.appendChild(img);
    }
    return wrap;
  }

  function optionButtons(p) {
    const opts = h("div", "duel-options");
    (p ? p.o || [] : []).forEach((o, j) => {
      const b = h("button", "option-chip");
      b.type = "button";
      b.dataset.index = j;
      b.innerHTML = `<span class="duel-letter">${LETTERS[j]})</span> <span>${o}</span>`;
      opts.appendChild(b);
    });
    return opts;
  }

  async function showPlay(d) {
    note("<p>იტვირთება...</p>");
    try { await loadProblems(); } catch (err) {
      console.error(err);
      note("<p>ამოცანები ვერ ჩაიტვირთა. სცადე გვერდის განახლება.</p>");
      return;
    }
    content.textContent = "";
    const total = d.problems.length;
    const answered = new Map((d.me.answers || []).map(a => [a.idx, a]));
    const deadline = Date.parse(d.me.started_at) + d.time_limit * 1000;
    let finishing = false;

    // sticky bar: timer, progress, finish button
    const bar = h("div", "duel-bar");
    const clock = h("span", "duel-clock");
    const progress = h("span", "duel-progress");
    const finishBtn = h("button", "acc-btn", "დასრულება");
    finishBtn.type = "button";
    bar.append(clock, progress, finishBtn);

    const updateProgress = () => {
      const right = [...answered.values()].filter(a => a.correct).length;
      progress.textContent = `${answered.size}/${total} · ✓ ${right}`;
    };

    async function finish() {
      if (finishing) return;
      finishing = true;
      finishBtn.disabled = true;
      try { await rpc("finish_duel", { p_id: d.id }); } catch (e) { console.error(e); }
      show();
    }
    finishBtn.addEventListener("click", () => {
      const left = total - answered.size;
      if (left && !confirm(`დარჩა ${left} უპასუხო ამოცანა — ისინი არასწორად ჩაითვლება. დავასრულო?`)) return;
      finish();
    });

    const tick = () => {
      const left = deadline - serverNow();
      clock.innerHTML = `<i class="fas fa-stopwatch"></i> ${mmss(left)}`;
      clock.classList.toggle("low", left < 60000);
      if (left <= 0) finish();
    };
    tick();
    const timer = setInterval(tick, 1000);
    cleanups.push(() => clearInterval(timer));

    const list = h("ol", "duel-problems");
    d.problems.forEach((pid, i) => {
      const p = problemsById.get(pid);
      const li = h("li", "duel-problem");
      li.appendChild(problemBody(p, i));
      const opts = optionButtons(p);
      li.appendChild(opts);
      const buttons = [...opts.querySelectorAll("button")];

      const lock = (a) => {
        li.classList.add("answered");
        buttons.forEach(b => { b.disabled = true; });
        const chosen = buttons[a.answer];
        if (chosen) chosen.classList.add(a.correct ? "is-correct" : "is-wrong");
      };
      if (answered.has(i)) lock(answered.get(i));

      buttons.forEach((b, j) => b.addEventListener("click", async () => {
        if (li.classList.contains("answered") || li.classList.contains("pending") || finishing) return;
        li.classList.add("pending");
        buttons.forEach(x => { x.disabled = true; });
        b.classList.add("selected");
        try {
          const res = await rpc("duel_answer", { p_id: d.id, p_idx: i, p_answer: j });
          if (res.timeup) { show(); return; }
          const a = { idx: i, answer: j, correct: !!res.correct };
          answered.set(i, a);
          b.classList.remove("selected");
          li.classList.remove("pending");
          lock(a);
          updateProgress();
          if (res.finished) { finishing = true; setTimeout(show, 900); }
        } catch (e) {
          console.error(e);
          const m = String(e && e.message || "");
          if (/already (answered|finished)|not started/.test(m)) { show(); return; }
          li.classList.remove("pending");
          b.classList.remove("selected");
          buttons.forEach(x => { x.disabled = false; });
          alert("პასუხი ვერ შეინახა. შეამოწმე ინტერნეტი და სცადე თავიდან.");
        }
      }));
      list.appendChild(li);
    });
    updateProgress();

    content.append(bar, list);
    typeset([list]);
  }

  /* ---------------------------------------------------------------- result */

  function scoreSide(av, name, score, total, ms, extra) {
    const s = h("div", "duel-side");
    s.append(av, h("b", null, name));
    s.appendChild(h("span", "duel-score", score == null ? "?" : `${score}/${total}`));
    s.appendChild(h("small", null, ms == null ? extra || "" : `⏱ ${mmss(ms)}${extra ? " · " + extra : ""}`));
    return s;
  }

  function banner(d) {
    const me = d.me;
    if (d.status === "finished") {
      const xp = me.xp ? ` · +${me.xp} XP` : "";
      if (d.result === "win") return h("div", "duel-banner win", `🏆 მოიგე!${xp}`);
      if (d.result === "loss") return h("div", "duel-banner loss", `ამჯერად წააგე — შემდეგ ჯერზე!${xp}`);
      return h("div", "duel-banner draw", `🤝 ფრე!${xp}`);
    }
    if (d.status === "expired") return h("div", "duel-banner muted", "ვადა გავიდა — გამოწვევა არავინ მიიღო.");
    if (!d.opponent) return h("div", "duel-banner muted", "შენი შედეგი შენახულია. ველოდებით, როდის მიიღებს მეგობარი გამოწვევას.");
    return h("div", "duel-banner muted", `შენი შედეგი შენახულია. ველოდებით ${d.opponent.username}-ს.`);
  }

  async function showResult(d) {
    note("<p>იტვირთება...</p>");
    try { await loadProblems(); } catch (err) { console.error(err); }
    content.textContent = "";
    const me = d.me;
    const profile = QuizAuth.profile;
    const finished = d.status === "finished";

    const box = h("div", "acc-box duel-result");
    box.appendChild(banner(d));
    const row = h("div", "duel-vs");
    row.appendChild(scoreSide(avatar(profile && profile.avatar), profile ? profile.username : "შენ",
      me.started_at ? me.score : 0, d.count, me.started_at ? me.total_ms : null,
      me.started_at ? "" : "არ უთამაშია"));
    row.appendChild(h("span", "duel-vs-mark", "VS"));
    if (d.opponent) {
      const o = d.opponent;
      row.appendChild(scoreSide(avatar(o.avatar), o.username,
        finished ? (o.started ? o.score : 0) : null, d.count, finished && o.started ? o.total_ms : null,
        finished ? (o.started ? "" : "არ უთამაშია") : o.finished ? "დაასრულა" : o.started ? "თამაშობს" : "ჯერ არ დაუწყია"));
    } else {
      row.appendChild(scoreSide(h("span", "duel-avatar", "?"), "…", null, d.count, null, "ჯერ არ მიუღია"));
    }
    box.appendChild(row);

    if (d.status === "open") box.appendChild(shareBox(d));

    const actions = h("div", "duel-actions");
    if (finished && d.opponent) {
      const rematchBtn = h("button", "duel-go");
      rematchBtn.type = "button";
      rematchBtn.innerHTML = '<i class="fas fa-rotate-right"></i>რევანში';
      rematchBtn.title = "იგივე პარამეტრები, ახალი ამოცანები";
      const err = h("div", "duel-err");
      rematchBtn.addEventListener("click", async () => {
        rematchBtn.disabled = true;
        try {
          const res = await rpc("create_duel", {
            p_grade: d.grade, p_count: COUNTS.find(c => c >= d.count) || 15,
            p_topic_group: d.topic_group, p_difficulty: d.difficulty, p_rematch_of: d.id,
          });
          location.href = `duel.html?code=${res.code}`;
        } catch (e) {
          console.error(e);
          err.textContent = errText(e);
          rematchBtn.disabled = false;
        }
      });
      actions.append(rematchBtn, err);
    }
    const home = h("a", "acc-btn");
    home.href = "duel.html";
    home.innerHTML = '<i class="fas fa-list"></i>ჩემი დუელები';
    actions.appendChild(home);
    box.appendChild(actions);
    content.appendChild(box);

    if (d.problems && d.keys) {
      const rev = await review(d);
      content.appendChild(rev);
      typeset([rev]);
    }

    // waiting for the opponent: check again now and then
    if (!finished && d.status !== "expired") {
      const poll = setInterval(async () => {
        if (document.hidden) return;
        try {
          const fresh = await rpc("get_duel", { p_code: d.code });
          const o = fresh && fresh.opponent;
          const changed = fresh && (fresh.status !== d.status || !!o !== !!d.opponent ||
            (o && (o.started !== d.opponent.started || o.finished !== d.opponent.finished)));
          if (changed) show();
        } catch (e) { console.warn(e); }
      }, POLL_MS);
      cleanups.push(() => clearInterval(poll));
    }
  }

  // Problem-by-problem review with the right answers and solutions (after the player finished).
  async function review(d) {
    const box = h("div", "acc-box");
    box.appendChild(h("h2", null, "ამოცანები და ამოხსნები"));
    const mine = new Map((d.me.answers || []).map(a => [a.idx, a]));
    const theirs = d.opponent && d.opponent.answers ? new Map(d.opponent.answers.map(a => [a.idx, a])) : null;

    // solutions live in the quiz files (problems.json has none)
    const files = new Map();
    d.problems.forEach(pid => {
      const x = pidParts(pid);
      if (x) files.set(`quizzes/class-${x.g}/${x.y}/quiz-${x.q}.js`, null);
    });
    await Promise.all([...files.keys()].map(async f => files.set(f, await QuizPractice.loadQuizScript(f))));

    const list = h("ol", "duel-problems review");
    d.problems.forEach((pid, i) => {
      const p = problemsById && problemsById.get(pid);
      const x = pidParts(pid);
      const src = x ? (files.get(`quizzes/class-${x.g}/${x.y}/quiz-${x.q}.js`) || [])[x.n - 1] : null;
      const key = d.keys[i] || [];
      const li = h("li", "duel-problem answered");

      const marks = h("div", "duel-marks");
      const mark = (label, a) => {
        const cls = !a ? "none" : a.correct ? "ok" : "bad";
        const txt = !a ? "—" : `${a.correct ? "✓" : "✗"} ${LETTERS[a.answer]}`;
        const m = h("span", "duel-mark " + cls);
        m.append(h("small", null, label), document.createTextNode(" " + txt));
        return m;
      };
      marks.appendChild(mark("შენ:", mine.get(i)));
      if (theirs) marks.appendChild(mark(`${d.opponent.username}:`, theirs.get(i)));
      li.append(marks, problemBody(p, i));

      const opts = optionButtons(p);
      opts.querySelectorAll("button").forEach((b, j) => {
        b.disabled = true;
        if (key.includes(j)) b.classList.add("is-correct");
        else if (mine.get(i) && mine.get(i).answer === j) b.classList.add("is-wrong");
      });
      li.appendChild(opts);

      if (src && typeof src.solution === "string" && src.solution.trim()) {
        const sol = h("details", "solution");
        sol.appendChild(h("summary", null, "ამოხსნა"));
        const body = h("div", "solution-body");
        body.innerHTML = src.solution;
        sol.appendChild(body);
        li.appendChild(sol);
      }
      list.appendChild(li);
    });
    box.appendChild(list);
    return box;
  }

  /* ---------------------------------------------------------------- start */

  if (!window.QuizAuth) {
    note("<p>ანგარიშები ახლა მიუწვდომელია. სცადე მოგვიანებით.</p>");
    return;
  }
  QuizAuth.ready.then(show);
  QuizAuth.onChange(() => show());       // logged in / out, or profile created, on this page
})();
