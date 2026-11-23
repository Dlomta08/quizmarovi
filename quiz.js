
let timerInterval;
let timeLeft = 3 * 60 * 60;
let simulationMode = false;
const variantebi = ["ა) ", "ბ) ", "გ) ", "დ) ", "ე) ", "ვ) "];
const selectionFadeTimers = new WeakMap();

/**
 * Typesets the math inside `nodes`. MathJax loads async, and until it has started
 * window.MathJax is only the config object from the page <head>, with no typeset methods.
 * Content that is already on the page when MathJax starts is typeset by MathJax itself,
 * so nothing is lost by skipping it here. Calls are chained on startup.promise, as the
 * MathJax docs recommend, so two typesets never run at the same time.
 */
function typesetMath(nodes) {
  const mj = window.MathJax;
  if (!mj || typeof mj.typesetPromise !== "function" || !mj.startup || !mj.startup.promise) return;
  mj.startup.promise = mj.startup.promise
    .then(() => mj.typesetPromise(nodes))
    .catch(err => console.warn("MathJax:", err));
}

(function ensureGlobalStyles(){
  if (document.getElementById("quiz-global-styles")) return;
  const s = document.createElement("style");
  s.id = "quiz-global-styles";
  s.textContent = `
    /* ===== Option chips ===== */
    .option-chip{
      position: relative;
      overflow: hidden;
      display:inline-flex; align-items:center; gap:.5rem;
      padding:.6rem 1rem; margin:.25rem .35rem .25rem 0;
      border:1px solid var(--border-color, rgba(255,255,255,.15));
      border-radius:9999px;
      background: rgba(255,255,255,0.06);
      color: inherit;
      cursor: pointer;
      user-select: none;
      transition:
        background .20s ease,
        border-color .20s ease,
        color .18s ease,
        box-shadow .20s ease,
        transform .12s ease;
    }
    .option-chip input[type="radio"]{ position:absolute !important; opacity:0 !important; width:0 !important; height:0 !important; margin:0 !important; pointer-events:none !important; }
    .option-chip:hover{ transform: translateY(-1px); }
    .option-chip.pop { animation: pop .12s ease; }
    @keyframes pop { 0%{ transform: scale(.98) } 100%{ transform: scale(1) } }
    .option-chip.selected{
      background: rgba(var(--primary-rgb, 67,97,238), 0.28);
      border-color: rgba(var(--primary-rgb, 67,97,238), 0.75);
      box-shadow: 0 0 0 2px rgba(var(--primary-rgb, 67,97,238), 0.22) inset;
    }
    .option-chip.is-correct{
      background:#86efac !important; border-color:#86efac !important; color:#064e3b !important;
      box-shadow: 0 0 0 2px rgba(134,239,172,.35) inset, 0 6px 16px rgba(16,185,129,.25);
    }
    .option-chip.is-wrong{
      background:#fca5a5 !important; border-color:#fca5a5 !important; color:#7f1d1d !important;
      box-shadow: 0 0 0 2px rgba(252,165,165,.35) inset, 0 6px 16px rgba(239,68,68,.2);
    }
    .chip-ripple{ position:absolute; border-radius:50%; transform: translate(-50%,-50%) scale(0); animation: ripple .45s ease-out forwards; pointer-events:none; opacity:.85; }
    @keyframes ripple{ to { transform: translate(-50%,-50%) scale(18); opacity:0; } }

    /* ===== Buttons & layout ===== */
    button[type="submit"] {
      background: var(--primary-color);
      color: white;
      border: none;
      padding: 1rem;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 50px;
      cursor: pointer;
      transition: all var(--transition-speed, 0.2s) ease;
      box-shadow: 0 4px 12px rgba(var(--primary-rgb, 102, 126, 234), 0.3);
      width: 100%;
      max-width: 400px;
      display: block;
      margin: 1.5rem auto 0;
    }
    button[type="submit"]:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(var(--primary-rgb, 102, 126, 234), 0.4); background: var(--secondary-color); }
    button[type="submit"]:active { transform: translateY(0); }
    button[type="submit"]:disabled { background: #999; cursor: not-allowed; box-shadow: none; opacity: 0.6; }
    .mark-done-btn { background: var(--card-bg, white); color: var(--text-primary, #333); border: 2px solid var(--border-color, #ddd); padding: 0.8rem 1.8rem; font-size: 1rem; font-weight: 600; border-radius: 50px; cursor: pointer; transition: all var(--transition-speed, 0.2s) ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }
    .mark-done-btn:hover { border-color: var(--primary-color); color: var(--primary-color); transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); }
    .mark-done-btn.is-done { background: var(--primary-color); color: white; border-color: var(--primary-color); box-shadow: 0 3px 12px rgba(0,0,0, 0.3); }
    .mark-done-btn.is-done:hover { background: var(--secondary-color); border-color: var(--secondary-color); }
    .action-row { display: flex; gap: 12px; align-items: center; justify-content: center; margin-top: 1.5rem; flex-wrap: wrap; }
    .tick-mark { color: var(--primary-color); font-size: 1.5rem; font-weight: bold; animation: scaleIn .2s ease; }
    @keyframes scaleIn { 0%{transform:scale(0);opacity:0} 50%{transform:scale(1.15)} 100%{transform:scale(1);opacity:1} }
    @media (max-width: 640px) { .action-row { flex-direction: column; align-items: stretch; } button[type="submit"], .mark-done-btn { width: 100%; max-width: none; } }

    /* ===== Floating timer (detached to body) ===== */
    #floating-timer {
      position: fixed;
      top: max(10px, env(safe-area-inset-top));
      left: 50%;
      transform: translateX(-50%);
      z-index: 2147483647;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      font-weight: 900;
      font-size: 1.3rem;
      padding: 8px 16px;
      letter-spacing: .5px;
      border-radius: 9999px;
      border: 1px solid rgba(0,0,0,.08);
      background: rgba(255,255,255,0.92);
      backdrop-filter: blur(8px);
      box-shadow: 0 6px 18px rgba(0,0,0,.18);
      color: #111827;
      pointer-events: none;
    }
    [data-theme="dark"] #floating-timer {
      background: rgba(17,24,39, 0.74);
      color: #e5e7eb;
      border-color: rgba(255,255,255,.12);
      box-shadow: 0 6px 18px rgba(0,0,0,.45);
    }
    #floating-timer .dot {
      width: 10px; height: 10px; border-radius: 50%;
      background: #10b981;
      box-shadow: 0 0 0 6px rgba(16,185,129,.15);
      animation: pulse 1.6s ease-in-out infinite;
      pointer-events: none;
    }
    #floating-timer .time {
      font-variant-numeric: tabular-nums;
      min-width: 74px;
      text-align: center;
    }
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(16,185,129,.5); }
      70% { box-shadow: 0 0 0 10px rgba(16,185,129,0); }
      100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
    }
    @keyframes pulse-red {
      0% { box-shadow: 0 0 0 0 rgba(239,68,68,.5); }
      70% { box-shadow: 0 0 0 10px rgba(239,68,68,0); }
      100% { box-shadow: 0 0 0 0 rgba(239,68,68,0); }
    }
  `;
  document.head.appendChild(s);
})();

function timer() {
  const timeBox = document.getElementById("time-selection");
  simulationMode ^= 1;
  if (simulationMode) timeBox.classList.add("visible");
  else timeBox.classList.remove("visible");
}

function createFloatingTimer(){
  let ft = document.getElementById("floating-timer");
  if (!ft) {
    ft = document.createElement("div");
    ft.id = "floating-timer";
    ft.innerHTML = `<span class="dot"></span><span class="time" id="floating-time">00:00:00</span>`;
    document.body.appendChild(ft);
  }
  return ft;
}

function removeFloatingTimer(){
  const ft = document.getElementById("floating-timer");
  if (ft) ft.remove();
}

/* ===== Simulation progress saved in sessionStorage (survives a page refresh) ===== */
// One entry per quiz page (URL), shaped like { endTime: <ms timestamp>, answers: { "<question index>": <option index> } }.
const SIM_STATE_KEY = "sim-state:" + location.pathname + location.search;
let simState = null;

function loadSimState() {
  try {
    const s = JSON.parse(sessionStorage.getItem(SIM_STATE_KEY));
    return s && typeof s.endTime === "number" ? s : null;
  } catch { return null; }
}
function saveSimState() {
  if (!simState) return;
  try { sessionStorage.setItem(SIM_STATE_KEY, JSON.stringify(simState)); } catch {}
}
function clearSimState() {
  simState = null;
  try { sessionStorage.removeItem(SIM_STATE_KEY); } catch {}
}

// Re-select saved answers (and re-open used hints) after the quiz has been rendered.
function restoreSimAnswers() {
  if (!simState) return;
  Object.entries(simState.hints || {}).forEach(([qi, level]) => {
    if (hintControls[Number(qi)]) hintControls[Number(qi)].restore(level);
  });
  if (!simState.answers) return;
  const form = document.getElementById("quizForm");
  const fieldsets = form.querySelectorAll("fieldset");
  Object.entries(simState.answers).forEach(([qi, optIdx]) => {
    const fs = fieldsets[Number(qi)];
    if (!fs) return;
    const label = fs.querySelector(`label.option-chip[data-index="${optIdx}"]`);
    if (!label) return;
    label.classList.add("selected");
    const radio = label.querySelector('input[type="radio"]');
    if (radio) radio.checked = true;
  });
}

// If the page was refreshed during a simulation, continue it automatically.
// Called when the page has loaded (random-quiz.html, where quizData is set inline) and by
// quiz.html right after its quiz data file arrives. Safe to call more than once.
function resumeSavedSimulation() {
  const saved = loadSimState();
  if (!saved || typeof quizData === "undefined" || !Array.isArray(quizData)) return;
  const modeSel = document.getElementById("mode-selection");
  const form = document.getElementById("quizForm");
  if (!modeSel || !form || form.style.display === "block") return;
  startQuiz(true, saved);
}
window.addEventListener("load", resumeSavedSimulation);

function startQuiz(withTimer, savedState) {
  simulationMode = withTimer;
  document.getElementById("mode-selection").style.display = "none";
  const quizForm = document.getElementById("quizForm");
  quizForm.style.display = "block";
  renderQuiz();

  const pageTimerEl = document.getElementById("timer");
  if (withTimer) {
    if (savedState) {
      simState = savedState;
      if (!simState.answers) simState.answers = {};
    } else {
      const customMinutesInput = document.getElementById("customTime");
      let customMinutes = 180;
      if (customMinutesInput) {
        const inputVal = parseInt(customMinutesInput.value);
        if (!isNaN(inputVal) && inputVal >= 1) customMinutes = inputVal;
      }
      simState = { endTime: Date.now() + customMinutes * 60 * 1000, answers: {} };
      saveSimState();
    }
    restoreSimAnswers();

    if (pageTimerEl) pageTimerEl.style.display = "none";
    createFloatingTimer();

    // Time is computed from the saved end time, so it stays correct across refreshes
    // and doesn't drift when the tab is in the background.
    const tick = () => {
      timeLeft = Math.max(0, Math.round((simState.endTime - Date.now()) / 1000));
      updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("დრო ამოიწურა! ქვიზი ავტომატურად დასრულდა.");
        document.getElementById("quizForm").requestSubmit();
      }
    };
    timeLeft = Math.max(0, Math.round((simState.endTime - Date.now()) / 1000));
    updateTimerDisplay();
    timerInterval = setInterval(tick, 1000);
    if (timeLeft <= 0) setTimeout(tick, 0);
  } else {
    if (pageTimerEl) {
      pageTimerEl.style.display = "none";
    }
    removeFloatingTimer();
  }
}

function updateTimerDisplay() {
  const h = String(Math.floor(timeLeft / 3600)).padStart(2,"0");
  const m = String(Math.floor((timeLeft % 3600) / 60)).padStart(2,"0");
  const s = String(timeLeft % 60).padStart(2,"0");
  const t = `${h}:${m}:${s}`;

  const timeEl = document.getElementById("time");
  if (timeEl) timeEl.textContent = t;

  const floating = document.getElementById("floating-time");
  if (floating) floating.textContent = t;

  const ftRoot = document.getElementById("floating-timer");
  if (ftRoot) {
    const dot = ftRoot.querySelector(".dot");
    if (dot && timeLeft <= 1800) dot.style.background = "#ef4444";
    if (dot && timeLeft <= 1800) dot.style.animation = "pulse-red 1.6s ease-in-out infinite";
  }
}

function addRipple(el, x, y, color){
  const r = document.createElement('span');
  r.className = 'chip-ripple';
  r.style.left = x + 'px';
  r.style.top  = y + 'px';
  r.style.width = r.style.height = '10px';
  r.style.background = color;
  el.appendChild(r);
  r.addEventListener('animationend', () => r.remove());
}

/* ===== Hints, per-problem results and the topic breakdown (math problems with tags) ===== */

// Per question: the hint control (see renderQuiz) and the deepest hint level opened before answering.
let hintControls = [];
let hintUsed = [];
// Standard mode: the first option clicked per question (that's the answer that counts).
// Clicking other options afterwards only highlights them and must not change the score.
let firstAnswers = [];

// The answer that is graded for question i (index of the option, or null if unanswered).
function gradedAnswer(form, i) {
  if (!simulationMode) return firstAnswers[i] != null ? firstAnswers[i] : null;
  const sel = form.querySelector(`input[name="question${i}"]:checked`);
  return sel ? parseInt(sel.value, 10) : null;
}

function isAnswerCorrect(q, idx) {
  if (idx == null) return false;
  return Array.isArray(q.correct) ? q.correct.includes(idx) : idx === q.correct;
}

// Id for QuizProgress, or null when the problem can't be identified (physics, untagged, old random quiz).
function problemIdFor(q, i) {
  if (!window.QuizProgress || !Array.isArray(q.topics)) return null;
  // random quizzes: rand.js / problems.js add `origin` (problems' own `source` is the book reference)
  const o = q.origin;
  if (o && o.n) return QuizProgress.id(o.class, o.year, o.quiz, o.n);
  if (window.QUIZ_SUBJECT) return null;
  const p = new URLSearchParams(location.search);
  const g = p.get("class"), y = p.get("year"), n = p.get("number");
  return g && y && n ? QuizProgress.id(g, y, n, i + 1) : null;
}

// Time spent per answer (saved for logged-in students): seconds since the quiz started or
// since the previous answer, whichever is later. Over an hour = the tab was left open -> unknown.
let answerClock = Date.now();
function secondsSinceLastAnswer() {
  const now = Date.now();
  const s = (now - answerClock) / 1000;
  answerClock = now;
  return s > 3600 ? null : s;
}

// Saves one graded answer: in this browser (progress.js) and, for logged-in students,
// in the database (cloud.js). Returns the problem id, or null if it can't be identified.
function saveResult(q, i, idx, isCorrect, seconds) {
  const pid = problemIdFor(q, i);
  if (!pid) return null;
  QuizProgress.record(pid, isCorrect);
  if (window.QuizCloud) QuizCloud.recordAttempt(pid, idx, isCorrect, seconds);
  return pid;
}

// Small note for guests after a wrong answer: "log in to save this to your mistakes notebook".
// Answers given before logging in are kept in this tab and saved after login (cloud.js).
// Returns null when accounts are unavailable or the student is already logged in.
function guestNudge(text) {
  const A = window.QuizAuth;
  if (!A || !window.QuizCloud || A.isLoggedIn()) return null;
  const box = document.createElement("div");
  box.className = "guest-nudge";
  box.innerHTML = '<i class="fas fa-book-bookmark" aria-hidden="true"></i><span></span>' +
    '<button type="button" class="guest-nudge-btn"><i class="fab fa-google" aria-hidden="true"></i>შესვლა</button>';
  box.querySelector("span").textContent = text;
  box.querySelector("button").addEventListener("click", () => A.signIn());
  return box;
}

// Results by topic group, e.g. "ტრიგონომეტრია 2/4", weakest first; each row links to the problem browser.
function renderTopicStats(box, rows) {
  const groups = new Map();
  rows.forEach(({ q, correct }) => {
    const ids = new Set((q.topics || []).map(t => {
      const info = TagUI.state.topic.get(t);
      return info && info.parent ? info.parent : t;
    }));
    ids.forEach(id => {
      const g = groups.get(id) || { id, right: 0, total: 0 };
      g.total++;
      if (correct) g.right++;
      groups.set(id, g);
    });
  });
  if (!groups.size) return;

  const list = [...groups.values()].sort((a, b) =>
    a.right / a.total - b.right / b.total || b.total - a.total);

  const wrap = document.createElement("div");
  wrap.className = "topic-stats";
  const h = document.createElement("div");
  h.className = "topic-stats-title";
  h.textContent = "შედეგი თემების მიხედვით";
  wrap.appendChild(h);

  const ul = document.createElement("ul");
  list.forEach(g => {
    const pct = Math.round((g.right / g.total) * 100);
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "topic-stat" + (pct < 60 ? " is-weak" : "");
    a.href = TagUI.filterUrl("topic", g.id);
    a.target = "_blank";
    a.rel = "noopener";
    const area = TagUI.areaOf("topic", g.id);
    if (area) a.dataset.area = area;
    a.title = "ამ თემის ამოცანები ამოცანების ბაზაში";

    const name = document.createElement("span");
    name.className = "topic-stat-name";
    name.textContent = TagUI.label("topic", g.id);
    const bar = document.createElement("span");
    bar.className = "topic-stat-bar";
    bar.innerHTML = `<span style="width:${pct}%"></span>`;
    const num = document.createElement("span");
    num.className = "topic-stat-num";
    num.textContent = `${g.right}/${g.total}`;
    a.append(name, bar, num);
    if (pct < 60) a.insertAdjacentHTML("beforeend", `<span class="topic-stat-practice">ივარჯიშე <i class="fas fa-arrow-right" aria-hidden="true"></i></span>`);
    li.appendChild(a);
    ul.appendChild(li);
  });
  wrap.appendChild(ul);
  box.appendChild(wrap);
}

function revealAllAnswers(form){
  const fieldsets = form.querySelectorAll("fieldset");
  let score = 0, minpt = -1;
  fieldsets.forEach((fs, i) => {
    const q = quizData[i];
    fs.querySelectorAll("label.option-chip").forEach(l => {
      l.classList.remove("is-correct","is-wrong","pop");
    });

    const selectedIdx = gradedAnswer(form, i);
    const selected = selectedIdx != null;
    if(q.minpoint != null) minpt = q.minpoint;
    if (Array.isArray(q.correct)) {
      q.correct.forEach(idx => {
        const lbl = fs.querySelector(`label.option-chip[data-index="${idx}"]`);
        if (lbl) lbl.classList.add("is-correct");
      });
      if (selected && !q.correct.includes(selectedIdx)) {
        const wrongLbl = fs.querySelector(`label.option-chip[data-index="${selectedIdx}"]`);
        if (wrongLbl) wrongLbl.classList.add("is-wrong");
      }
      if (selected && q.correct.includes(selectedIdx)) score++;
    } else {
      const correctLbl = fs.querySelector(`label.option-chip[data-index="${q.correct}"]`);
      if (correctLbl) correctLbl.classList.add("is-correct");
      if (selectedIdx != null) {
        if (selectedIdx === q.correct) score++;
        else {
          const wrongLbl = fs.querySelector(`label.option-chip[data-index="${selectedIdx}"]`);
          if (wrongLbl) wrongLbl.classList.add("is-wrong");
        }
      }
    }

    fs.classList.add("answered");
  });

  return [score, minpt];
}

function renderQuiz(){
  const form = document.getElementById("quizForm");
  // Forget math MathJax typeset in an earlier render before throwing that markup away.
  if (window.MathJax && typeof MathJax.typesetClear === "function") MathJax.typesetClear([form]);
  form.innerHTML = "";
  hintControls = [];
  hintUsed = [];
  firstAnswers = [];
  answerClock = Date.now();

  quizData.forEach((q, i) => {
    const fieldset = document.createElement("fieldset");

    if (quizData.length > 0 && typeof quizData[i].intro === "string" && quizData[i].intro.trim() !== "") {
      const introDiv = document.createElement("div");
      introDiv.className = "introduction";
      introDiv.innerHTML = quizData[i].intro;
      form.appendChild(introDiv);
    }
    if (quizData.length > 0 && typeof quizData[i].task === "string" && quizData[i].task.trim() !== "") {
      const taskDiv = document.createElement("div");
      taskDiv.className = "task";
      taskDiv.innerHTML = quizData[i].task;
      form.appendChild(taskDiv);
    }
    if (typeof q.warning === "string" && q.warning.trim() !== "") {
      const warnDiv = document.createElement("div");
      warnDiv.className = "warning";
      warnDiv.innerText = q.warning;
      fieldset.appendChild(warnDiv);
    }

    const contentWrapper = document.createElement("div");
    contentWrapper.className = "quiz-question-wrapper";

    const legend = document.createElement("legend");
    legend.innerHTML = `<strong>${i + 1}.</strong><br>${q.question}`;
    contentWrapper.appendChild(legend);

    if (q.image) {
      const img = document.createElement("img");
      img.src = q.image;
      img.alt = q.alt || `${i + 1}-ე ამოცანის ნახაზი`;
      img.className = "quiz-image";
      img.loading = "lazy";
      img.decoding = "async";
      contentWrapper.appendChild(img);
    }

    fieldset.appendChild(contentWrapper);

    // Tag chips (math only), hidden behind a hint button that opens in steps:
    // 1st click: topic + difficulty, 2nd click: type + method (these give away more), then "hide".
    if (Array.isArray(q.topics) && window.TagUI) {
      const maxLevel = (q.type || []).length || (q.method || []).length ? 2 : 1;
      let level = 0;
      hintUsed[i] = 0;

      const hint = document.createElement("div");
      hint.className = "tag-hint";
      hint.dataset.level = "0";
      const hintBtn = document.createElement("button");
      hintBtn.type = "button";
      hintBtn.className = "tag-hint-btn";
      hintBtn.setAttribute("aria-expanded", "false");
      hintBtn.innerHTML = '<i class="fas fa-lightbulb" aria-hidden="true"></i><span></span>';
      const btnText = hintBtn.querySelector("span");
      const chips = document.createElement("div");

      const show = l => {
        level = l;
        hint.dataset.level = String(l);
        chips.hidden = l === 0;
        btnText.textContent = l === 0 ? "მინიშნება" : l < maxLevel ? "მეტი მინიშნება" : "დამალვა";
        hintBtn.setAttribute("aria-expanded", String(l > 0));
        hintBtn.classList.toggle("is-open", l > 0);
      };
      // A hint counts only if it was opened before the problem was answered / the quiz was finished.
      const markUsed = l => {
        if (l <= hintUsed[i]) return;
        hintUsed[i] = l;
        fieldset.classList.add("used-hint");
        if (!legend.querySelector(".hint-used-mark")) {
          legend.querySelector("strong").insertAdjacentHTML("afterend",
            ' <i class="fas fa-lightbulb hint-used-mark" title="მინიშნება გამოყენებულია" aria-label="მინიშნება გამოყენებულია"></i>');
        }
      };
      show(0);

      hintBtn.addEventListener("click", () => {
        const next = level >= maxLevel ? 0 : level + 1;
        show(next);
        const finished = form.classList.contains("finished") || fieldset.classList.contains("answered");
        if (next > 0 && !finished) {
          markUsed(next);
          if (simState) {
            (simState.hints = simState.hints || {})[i] = hintUsed[i];
            saveSimState();
          }
        }
      });
      hintControls[i] = { restore: l => { markUsed(l); show(Math.min(l, maxLevel)); } };

      hint.append(hintBtn, chips);
      fieldset.appendChild(hint);
      // chips open in a new tab so clicking one doesn't leave the quiz
      TagUI.ready.then(() => TagUI.renderChips(chips, q, { newTab: true })).catch(() => hint.remove());
    }

    const feedback = document.createElement("div");
    feedback.className = "feedback";

    function gradeAndLock(selectedIdx, clickEvent) {
      fieldset.querySelectorAll("label.option-chip").forEach(l => {
        l.classList.remove("selected","pop");
      });

      const selectedLabel = fieldset.querySelector(`label.option-chip[data-index="${selectedIdx}"]`);
      let isCorrect = false;

      if (selectedLabel){
        selectedLabel.classList.add("pop");
      }

      if (Array.isArray(q.correct)) {
        isCorrect = q.correct.includes(selectedIdx);
        q.correct.forEach(idx => {
          const lbl = fieldset.querySelector(`label.option-chip[data-index="${idx}"]`);
          if (lbl) lbl.classList.add("is-correct");
        });
        if (!isCorrect && selectedLabel) selectedLabel.classList.add("is-wrong");
      } else {
        isCorrect = (selectedIdx === q.correct);
        const correctLabel = fieldset.querySelector(`label.option-chip[data-index="${q.correct}"]`);
        if (isCorrect) {
          if (selectedLabel) selectedLabel.classList.add("is-correct");
        } else {
          if (selectedLabel) selectedLabel.classList.add("is-wrong");
          if (correctLabel) correctLabel.classList.add("is-correct");
        }
      }

      if (selectedLabel && clickEvent){
        const rect = selectedLabel.getBoundingClientRect();
        const x = clickEvent.clientX - rect.left;
        const y = clickEvent.clientY - rect.top;
        const rippleColor = isCorrect ? "rgba(134,239,172,.7)" : "rgba(252,165,165,.75)";
        addRipple(selectedLabel, x, y, rippleColor);
      }

      fieldset.classList.add("answered");
      // standard mode: the first answer is the one that counts (the question is locked after it)
      firstAnswers[i] = selectedIdx;
      const pid = saveResult(q, i, selectedIdx, isCorrect, secondsSinceLastAnswer());
      if (pid && !isCorrect && !fieldset.querySelector(".guest-nudge")) {
        const nudge = guestNudge("შედი ანგარიშზე, რომ ეს ამოცანა შეცდომების რვეულში შეინახო.");
        const sol = fieldset.querySelector(".solution");
        if (nudge) fieldset.insertBefore(nudge, sol);   // above the solution (or at the end if none)
      }
    }

    function selectPersistent(selectedIdx, clickEvent){
      fieldset.querySelectorAll("label.option-chip").forEach(l => {
        l.classList.remove("selected","pop");
        const pending = selectionFadeTimers.get(l);
        if (pending) { clearTimeout(pending); selectionFadeTimers.delete(l); }
      });
      const selectedLabel = fieldset.querySelector(`label.option-chip[data-index="${selectedIdx}"]`);
      if (selectedLabel){
        selectedLabel.classList.add("selected","pop");
        const radio = selectedLabel.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
        if (clickEvent){
          const rect = selectedLabel.getBoundingClientRect();
          const x = clickEvent.clientX - rect.left;
          const y = clickEvent.clientY - rect.top;
          addRipple(selectedLabel, x, y, "rgba(67,97,238,.3)");
        }
        // Remember the answer so a refresh doesn't lose it.
        if (simState) {
          simState.answers[i] = selectedIdx;
          saveSimState();
        }
      }
    }

    function selectOnly(selectedIdx, clickEvent){
      fieldset.querySelectorAll("label.option-chip").forEach(l => {
        l.classList.remove("selected","pop");
        const pending = selectionFadeTimers.get(l);
        if (pending) { clearTimeout(pending); selectionFadeTimers.delete(l); }
      });

      const selectedLabel = fieldset.querySelector(`label.option-chip[data-index="${selectedIdx}"]`);
      if (selectedLabel){
        selectedLabel.classList.add("selected","pop");
        const radio = selectedLabel.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;

        if (clickEvent){
          const rect = selectedLabel.getBoundingClientRect();
          const x = clickEvent.clientX - rect.left;
          const y = clickEvent.clientY - rect.top;
          addRipple(selectedLabel, x, y, "rgba(67,97,238,.3)");
        }

        const fadeId = setTimeout(() => {
          selectedLabel.classList.remove("selected");
          selectionFadeTimers.delete(selectedLabel);
        }, 200);
        selectionFadeTimers.set(selectedLabel, fadeId);
      }
    }

    q.options.forEach((opt, j) => {
      const label = document.createElement("label");
      label.classList.add("option-chip");
      label.dataset.index = j;
      label.setAttribute("tabindex", "0");

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question${i}`;
      radio.value = j;

      // "click" (not "pointerdown") so a touch-scroll that starts on an option doesn't select it.
      label.addEventListener("click", (e) => {
        e.preventDefault(); // stop the label from re-dispatching a click to the radio
        if (e.target === radio) return;
        radio.checked = true;
        const formEl = document.getElementById("quizForm");
        const isFinished = formEl && formEl.classList.contains("finished");

        if (isFinished || fieldset.classList.contains("answered")) {
          selectOnly(j, e);
        } else if (simulationMode) {
          selectPersistent(j, e);
        } else {
          gradeAndLock(j, e);
        }
      });

      label.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const formEl = document.getElementById("quizForm");
          const isFinished = formEl && formEl.classList.contains("finished");
          radio.checked = true;

          if (isFinished || fieldset.classList.contains("answered")) {
            selectOnly(j, null);
          } else if (simulationMode) {
            selectPersistent(j, null);
          } else {
            gradeAndLock(j, null);
          }
        }
      });

      label.append(`${variantebi[j]}`);
      label.appendChild(radio);
      label.append(`${opt}`);
      fieldset.appendChild(label);
    });

    // Optional solution ("ამოხსნა"), collapsed by default.
    // For multiple-choice questions it stays hidden until the question is answered
    // (standard mode) or the quiz is finished (simulation mode); see .solution in quiz-style.css.
    if (typeof q.solution === "string" && q.solution.trim() !== "") {
      const sol = document.createElement("details");
      sol.className = "solution";
      if (q.options && q.options.length) sol.dataset.afterAnswer = "";
      const summary = document.createElement("summary");
      summary.textContent = "ამოხსნა";
      const body = document.createElement("div");
      body.className = "solution-body";
      body.innerHTML = q.solution;
      sol.append(summary, body);
      fieldset.appendChild(sol);
    }

    form.appendChild(fieldset);
    
  });

  typesetMath([form]);

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "დასრულება";

  const markDoneBtn = document.createElement("button");
  markDoneBtn.type = "button";
  markDoneBtn.className = "mark-done-btn";
  markDoneBtn.textContent = "ქვიზის გაკეთებულად მონიშვნა";

  const tickSpan = document.createElement("span");
  tickSpan.className = "tick-mark";
  tickSpan.textContent = "";

  const urlParams = new URLSearchParams(window.location.search);
  const year = urlParams.get("year");
  const number = urlParams.get("number");
  const classNum = urlParams.get("class");

  // subjects.js sets window.QUIZ_SUBJECT = "physics" on physics pages so their progress doesn't collide with math.
  // Math keeps the original key format so existing saved progress still shows.
  const subjectPrefix = window.QUIZ_SUBJECT ? `${window.QUIZ_SUBJECT}-` : "";
  const doneKey = `done-${subjectPrefix}${classNum}-${year}-${number}`;

  // Remember the last regular quiz opened on this device, for "continue where you left off" on the home page.
  if (classNum && year && number) {
    try {
      localStorage.setItem("last-visit", JSON.stringify({
        subject: window.QUIZ_SUBJECT || "math", class: classNum, year, number, t: Date.now(),
      }));
    } catch {}
  }

  let isMarkedDone = localStorage.getItem(doneKey) === "true";
  if (isMarkedDone) {
    tickSpan.textContent = "✔";
    markDoneBtn.classList.add("is-done");
    markDoneBtn.textContent = "ქვიზი მონიშნულია";
  }

  markDoneBtn.addEventListener("click", () => {
    isMarkedDone = !isMarkedDone;
    if (isMarkedDone) {
      localStorage.setItem(doneKey, "true");
      tickSpan.textContent = "✔";
      markDoneBtn.classList.add("is-done");
      markDoneBtn.textContent = "ქვიზი მონიშნულია";
    } else {
      localStorage.removeItem(doneKey);
      tickSpan.textContent = "";
      markDoneBtn.classList.remove("is-done");
      markDoneBtn.textContent = "ქვიზის გაკეთებულად მონიშვნა";
    }
  });

  const actionRow = document.createElement("div");
  actionRow.className = "action-row";
  if (quizData.some(q => q.options && q.options.length > 0)){
    actionRow.appendChild(submitBtn);
    actionRow.appendChild(markDoneBtn);
    actionRow.appendChild(tickSpan);
    const result = document.createElement("div");
    result.id = "result";

    form.appendChild(actionRow);
    form.appendChild(result);
  }else{
    actionRow.appendChild(markDoneBtn);
    actionRow.appendChild(tickSpan);
    form.appendChild(actionRow);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (timerInterval) clearInterval(timerInterval);

    const resultBox = document.getElementById("result");
    resultBox.innerHTML = "";

    let [score, minpt] = revealAllAnswers(form);
    // Only multiple-choice questions can be scored; open questions don't count toward the total.
    const gradedCount = quizData.filter(q => q.options && q.options.length).length;
    // Default pass mark: 60% of graded questions (15 of 25 for a standard math quiz).
    if (minpt == -1) minpt = Math.ceil(gradedCount * 0.6);
    const message = document.createElement("span");
    if (score >= minpt) {
      message.textContent = "ბარიერი გადალახულია!";
      message.style.color = "green";
    } else {
      message.textContent = "ბარიერი არ არის გადალახული!";
      message.style.color = "red";
    }
    resultBox.innerHTML = `<strong>ქულა: ${score} / ${gradedCount}</strong><br>`;
    resultBox.appendChild(message);

    // Per-question results for tagged (math) problems: hint use, saved progress, topic breakdown.
    const tagged = [];
    quizData.forEach((q, i) => {
      if (!q.options || !q.options.length || !Array.isArray(q.topics)) return;
      const idx = gradedAnswer(form, i);
      const correct = isAnswerCorrect(q, idx);
      tagged.push({ q, correct, hint: hintUsed[i] > 0 });
      // simulation: record every answered question now (standard mode recorded them on answer).
      // Time per question is unknown here (answers can be changed freely), so it's saved as null.
      if (simulationMode && idx != null) saveResult(q, i, idx, correct, null);
    });

    if (simulationMode && tagged.some(r => !r.correct)) {
      const nudge = guestNudge("შედი ანგარიშზე, რომ შეცდომები შეცდომების რვეულში შეინახო.");
      if (nudge) resultBox.appendChild(nudge);
    }

    const withHint = tagged.filter(r => r.hint);
    if (withHint.length) {
      const hintLine = document.createElement("div");
      hintLine.className = "hint-score-line";
      const rightNoHint = tagged.filter(r => !r.hint && r.correct).length;
      const rightHint = withHint.filter(r => r.correct).length;
      hintLine.innerHTML = `<i class="fas fa-lightbulb" aria-hidden="true"></i> ` +
        `მინიშნებით: ${withHint.length} ამოცანა (სწორი ${rightHint}) · მინიშნების გარეშე სწორი: ${rightNoHint}`;
      resultBox.appendChild(hintLine);
    }

    if (tagged.length && window.TagUI) {
      const statsBox = document.createElement("div");
      resultBox.appendChild(statsBox);
      TagUI.ready.then(() => renderTopicStats(statsBox, tagged)).catch(() => {});
    }

    // Keep the best score for regular quizzes (random quizzes have no class/year/number).
    // Key matches the "done" key with "best-" instead of "done-"; the quiz list pages read it.
    if (classNum && year && number && gradedCount > 0) {
      const bestKey = doneKey.replace(/^done-/, "best-");
      let best = null;
      try { best = JSON.parse(localStorage.getItem(bestKey)); } catch {}
      if (!best || typeof best.score !== "number" || score > best.score || best.total !== gradedCount) {
        best = { score, total: gradedCount };
        try { localStorage.setItem(bestKey, JSON.stringify(best)); } catch {}
      }
      const bestLine = document.createElement("div");
      bestLine.className = "best-score-line";
      bestLine.textContent = `საუკეთესო შედეგი: ${best.score} / ${best.total}`;
      message.after(bestLine);   // right under the score, above the hint line / topic breakdown
    }

    clearSimState();
    form.classList.add("finished");

    if (simulationMode) form.querySelector("button[type='submit']").disabled = true;
    removeFloatingTimer();
    typesetMath([form]);
  });
};





