
let timerInterval;
let timeLeft = 3 * 60 * 60;
let simulationMode = false;
const variantebi = ["ა) ", "ბ) ", "გ) ", "დ) ", "ე) ", "ვ) "];
const selectionFadeTimers = new WeakMap();

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

// Re-select saved answers after the quiz has been rendered.
function restoreSimAnswers() {
  if (!simState || !simState.answers) return;
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
// "load" waits for the quiz data script (added dynamically in quiz.html / physics-game.html).
window.addEventListener("load", () => {
  const saved = loadSimState();
  if (!saved || typeof quizData === "undefined" || !Array.isArray(quizData)) return;
  const modeSel = document.getElementById("mode-selection");
  const form = document.getElementById("quizForm");
  if (!modeSel || !form || form.style.display === "block") return;
  startQuiz(true, saved);
});

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

function revealAllAnswers(form){
  const fieldsets = form.querySelectorAll("fieldset");
  let score = 0, minpt = -1;
  fieldsets.forEach((fs, i) => {
    const q = quizData[i];
    fs.querySelectorAll("label.option-chip").forEach(l => {
      l.classList.remove("is-correct","is-wrong","pop");
    });

    const selected = form.querySelector(`input[name="question${i}"]:checked`);
    const selectedIdx = selected ? parseInt(selected.value,10) : null;
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
  form.innerHTML = "";

  quizData.forEach((q, i) => {
    const fieldset = document.createElement("fieldset");

    if (quizData.length > 0 && typeof quizData[i].intro === "string" && quizData[i].intro.trim() !== "") {
      const introDiv = document.createElement("div");
      introDiv.className = "introduction";
      introDiv.innerHTML = quizData[i].intro;
      form.appendChild(introDiv);
      if (window.MathJax) MathJax.typeset();
    }
    if (quizData.length > 0 && typeof quizData[i].task === "string" && quizData[i].task.trim() !== "") {
      const taskDiv = document.createElement("div");
      taskDiv.className = "task";
      taskDiv.innerHTML = quizData[i].task;
      form.appendChild(taskDiv);
      if (window.MathJax) MathJax.typeset();
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

    form.appendChild(fieldset);
    
  });

  if (window.MathJax) MathJax.typeset();

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

  // Physics pages set window.QUIZ_SUBJECT = "physics" so their progress doesn't collide with math.
  // Math keeps the original key format so existing saved progress still shows.
  const subjectPrefix = window.QUIZ_SUBJECT ? `${window.QUIZ_SUBJECT}-` : "";
  const doneKey = `done-${subjectPrefix}${classNum}-${year}-${number}`;

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
      resultBox.appendChild(bestLine);
    }

    clearSimState();
    form.classList.add("finished");

    if (simulationMode) form.querySelector("button[type='submit']").disabled = true;
    removeFloatingTimer();
    if (window.MathJax) MathJax.typeset();
  });
};





