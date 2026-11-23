/*
 * daily.js — the "დღის ამოცანა" (daily problem) card on the home page.
 *
 *  - The database picks one problem per grade per Tbilisi day (daily_problem() in
 *    supabase/02-daily-problem.sql); everyone in that grade gets the same one.
 *  - Logged in: your own grade. Guests: choose a grade (remembered in this browser).
 *  - "ამოხსნა" opens the problem as a one-question quiz (practice.js -> random-quiz.html).
 *    Solving it correctly gives +20 XP bonus (decided by the database) and counts for the streak.
 *  - The week row ticks the days you solved at least one problem (= your streak days).
 *
 * If accounts/Supabase are unavailable the card simply stays hidden.
 */
(function () {
  "use strict";

  const box = document.getElementById("daily");
  if (!box) return;
  const grid = box.closest(".home-grid");

  const WEEKDAYS = ["ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი", "კვირა"];
  const WEEKDAYS_SHORT = ["ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ", "კვი"];
  const MONTHS = ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი",
                  "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"];
  const GRADES = [7, 8, 9, 10, 11];
  const GRADE_KEY = "daily-grade";              // localStorage: grade chosen by a guest

  // ---------------------------------------------------------------- dates (Tbilisi)
  const fmt = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tbilisi" });   // -> "2026-11-26"
  const isoOf = ms => fmt.format(new Date(ms));
  function dayInfo(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    const weekday = (new Date(Date.UTC(y, m - 1, d)).getUTCDay() + 6) % 7;     // 0 = Monday
    return { iso, d, m, weekday };
  }
  const today = dayInfo(isoOf(Date.now()));
  // Monday..Sunday of this week
  const week = Array.from({ length: 7 }, (_, i) => dayInfo(isoOf(Date.now() + (i - today.weekday) * 864e5)));

  // ---------------------------------------------------------------- grade
  function guestGrade() {
    const saved = Number(localStorage.getItem(GRADE_KEY));
    if (GRADES.includes(saved)) return saved;
    try {                                       // first visit: the grade of the last quiz opened
      const last = JSON.parse(localStorage.getItem("last-visit"));
      if (last && last.subject === "math" && GRADES.includes(Number(last.class))) return Number(last.class);
    } catch {}
    return 9;
  }
  function currentGrade() {
    const p = QuizAuth.profile;
    return QuizAuth.isLoggedIn() && p ? p.grade : guestGrade();
  }

  // ---------------------------------------------------------------- guest progress (this browser)
  function localProgress() {
    try { return JSON.parse(localStorage.getItem("problem-progress")) || {}; } catch { return {}; }
  }

  // ---------------------------------------------------------------- loading the problem
  async function loadProblem(pid) {
    const m = /^(\d+)-(\d{4}-\d{2})-(\d+)-(\d+)$/.exec(pid || "");
    if (!m) return null;
    const ref = { g: Number(m[1]), y: m[2], q: Number(m[3]), n: Number(m[4]) };
    const data = await QuizPractice.loadQuizScript(`quizzes/class-${ref.g}/${ref.y}/quiz-${ref.q}.js`);
    const src = data && data[ref.n - 1];
    return src ? { ref, src } : null;
  }

  // ---------------------------------------------------------------- render
  function skeleton(grade) {
    const wd = WEEKDAYS[today.weekday];
    box.innerHTML = `
      <div class="dp-date"><small>${wd}</small><b>${today.d}</b><span>${MONTHS[today.m - 1]}</span></div>
      <div class="dp-main">
        <div class="dp-eyebrow"><i class="fas fa-sun" aria-hidden="true"></i> დღის ამოცანა
          <span class="dp-pill">მე-${grade} კლასი</span></div>
        <div class="dp-q">იტვირთება...</div>
        <div class="dp-extra"></div>
        <div class="dp-row"><div class="dp-action"></div><div class="dp-week"></div></div>
      </div>`;
  }

  function renderWeek(doneDays) {
    const el = box.querySelector(".dp-week");
    el.setAttribute("aria-label", "ამ კვირაში ამოხსნის დღეები");
    el.innerHTML = week.map((day, i) => {
      const done = doneDays.has(day.iso);
      const cls = (done ? " done" : "") + (day.iso === today.iso ? " today" : "");
      return `<span class="dp-day${cls}" title="${WEEKDAYS[i]}${done ? " · ამოხსნილი" : ""}"><i>${done ? "✓" : day.d}</i>${WEEKDAYS_SHORT[i]}</span>`;
    }).join("");
  }

  function renderGradeChips(grade) {
    const extra = box.querySelector(".dp-extra");
    extra.className = "dp-grades";
    extra.innerHTML = "კლასი: " + GRADES.map(g =>
      `<button type="button" data-grade="${g}" class="${g === grade ? "on" : ""}" aria-pressed="${g === grade}">${g}</button>`).join("");
    extra.addEventListener("click", e => {
      const b = e.target.closest("button[data-grade]");
      if (!b) return;
      try { localStorage.setItem(GRADE_KEY, b.dataset.grade); } catch {}
      show();
    });
  }

  function typeset(node) {
    if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([node]).catch(() => {});
    else window.addEventListener("load", () => window.MathJax && MathJax.typesetPromise && MathJax.typesetPromise([node]).catch(() => {}), { once: true });
  }

  function hide() {
    box.hidden = true;
    if (grid) grid.classList.remove("has-daily");
  }

  let renderId = 0;                             // ignore older renders (grade switched quickly)
  async function show() {
    const id = ++renderId;
    const loggedIn = QuizAuth.isLoggedIn();
    const grade = currentGrade();
    box.hidden = false;
    if (grid) grid.classList.add("has-daily");
    skeleton(grade);
    if (!loggedIn) renderGradeChips(grade);

    const pid = await QuizCloud.dailyProblem(grade);
    const problem = pid && await loadProblem(pid);
    if (id !== renderId) return;
    if (!problem) { hide(); return; }

    // question text (HTML from our own quiz files, same as on the quiz page)
    const q = box.querySelector(".dp-q");
    q.innerHTML = problem.src.question;
    if (problem.src.image) q.insertAdjacentHTML("beforeend", ' <span class="dp-note"><i class="fas fa-image"></i> ნახაზით</span>');
    typeset(q);

    // answered today? (one try: true = right, false = wrong, null = not yet) + streak days this week
    let tried, doneDays;
    if (loggedIn) {
      const [first, days] = await Promise.all([QuizCloud.firstAnswerToday(pid), QuizCloud.activeDays(week[0].iso)]);
      tried = first;
      doneDays = new Set(days);
    } else {
      const progress = localProgress();
      const r = progress[pid];
      tried = r && isoOf(r.t) === today.iso ? r.s === 1 : null;
      doneDays = new Set(Object.values(progress).filter(x => x && x.s === 1).map(x => isoOf(x.t)));
    }
    if (id !== renderId) return;
    renderWeek(doneDays);

    const action = box.querySelector(".dp-action");
    const open = () => QuizPractice.start([problem.ref], { back: "index.html", title: "დღის ამოცანა" });
    if (tried !== null) {
      // already answered today: show the result; "ნახვა" reopens it (to read the solution, no XP)
      action.innerHTML = tried
        ? `<span class="dp-solved"><i class="fas fa-circle-check" aria-hidden="true"></i> ამოხსნილია${loggedIn ? " · +20 XP" : ""}</span>`
        : `<span class="dp-solved dp-missed"><i class="fas fa-circle-xmark" aria-hidden="true"></i> არასწორია${loggedIn ? " · 0 XP" : ""} · ხვალ ახალი</span>`;
      action.insertAdjacentHTML("beforeend", ' <button type="button" class="dp-login dp-view">ნახვა</button>');
      action.querySelector(".dp-view").addEventListener("click", () => open().catch(console.error));
    } else {
      action.innerHTML = `<button type="button" class="dp-btn">ამოხსნა <i class="fas fa-arrow-right" aria-hidden="true"></i></button>
        <span class="dp-xp"><b>+20 XP</b>${loggedIn ? "" : ' · <button type="button" class="dp-login">შედი XP-სთვის</button>'}</span>`;
      const btn = action.querySelector(".dp-btn");
      btn.addEventListener("click", () => {
        btn.disabled = true;
        open().catch(err => {
          console.error(err);
          btn.disabled = false;
          alert("ამოცანის ჩატვირთვა ვერ მოხერხდა. სცადე თავიდან.");
        });
      });
      const login = action.querySelector(".dp-login");
      if (login) login.addEventListener("click", () => QuizAuth.signIn());
    }
  }

  // ---------------------------------------------------------------- start
  if (!window.QuizAuth || !window.QuizCloud || !window.QuizPractice) return;   // accounts unavailable: no card
  QuizAuth.ready.then(show);
  QuizAuth.onChange(() => show());            // logged in / out, or onboarding finished (grade known)
  window.QuizDaily = { refresh: show };
})();
