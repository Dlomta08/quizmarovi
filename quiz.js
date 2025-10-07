
let timerInterval;
let timeLeft = 3 * 60 * 60;
let simulationMode = false;
const fox = ["ა) ", "ბ) ", "გ) ", "დ) ", "ე) ", "ვ) "];
const selectionFadeTimers = new WeakMap(); // manage fade timers per label

/* ---------- Inject CSS (options + floating timer) ---------- */
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
    #floating-timer.warning .dot {
      background: #ef4444;
      box-shadow: 0 0 0 6px rgba(239,68,68,.25);
    }
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(16,185,129,.5); }
      70% { box-shadow: 0 0 0 10px rgba(16,185,129,0); }
      100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
    }
    #floating-timer.warning .dot {
      animation: pulse-red 1.6s ease-in-out infinite !important;
    }
    @keyframes pulse-red {
      0% { box-shadow: 0 0 0 0 rgba(239,68,68,.5); }
      70% { box-shadow: 0 0 0 10px rgba(239,68,68,0); }
      100% { box-shadow: 0 0 0 0 rgba(239,68,68,0); }
    }
  `;
  document.head.appendChild(s);
})();

/* -------------------- timer controls -------------------- */
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

function startQuiz(withTimer) {
  simulationMode = withTimer; 
  document.getElementById("mode-selection").style.display = "none";
  const quizForm = document.getElementById("quizForm");
  quizForm.style.display = "block";
  renderQuiz();

  const pageTimerEl = document.getElementById("timer");
  if (withTimer) {
    const customMinutesInput = document.getElementById("customTime");
    let customMinutes = 30;
    if (customMinutesInput) {
      const inputVal = parseInt(customMinutesInput.value);
      if (!isNaN(inputVal) && inputVal >= 1) customMinutes = inputVal;
    }
    timeLeft = customMinutes * 60;

    if (pageTimerEl) pageTimerEl.style.display = "none";
    const ft = createFloatingTimer();

    updateTimerDisplay();
    timerInterval = setInterval(() => {
      timeLeft--; updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("დრო ამოიწურა! ქვიზი ავტომატურად დასრულდა.");
        const form = document.getElementById("quizForm");
        form.requestSubmit();
      }
    }, 1000);
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
    if (timeLeft <= 1800) ftRoot.classList.add("warning");
    else ftRoot.classList.remove("warning");
  }
}

/* ------------ ripple utility ------------ */
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

/* ------------ reveal all answers (called on finish/timeout) ------------ */
function revealAllAnswers(form){
  const fieldsets = form.querySelectorAll("fieldset");
  let score = 0;

  fieldsets.forEach((fs, i) => {
    const q = quizData[i];
    fs.querySelectorAll("label.option-chip").forEach(l => {
      l.classList.remove("is-correct","is-wrong","pop");
    });

    const selected = form.querySelector(`input[name="question${i}"]:checked`);
    const selectedIdx = selected ? parseInt(selected.value,10) : null;

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

  return score;
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
      img.alt = q.alt || `Question ${i + 1} illustration`;
      img.className = "quiz-image";
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

    // Persistent selection used ONLY during simulation mode before finish
    function selectPersistent(selectedIdx, clickEvent){
      // Remove selection from others (radio behavior)
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
        // NO fade timer here; keep selected persistently (old behavior)
      }
    }

    // Post-finish simulation-style quick flash (0.2s solid + transition fade)
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

      label.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        radio.checked = true;
        const formEl = document.getElementById("quizForm");
        const isFinished = formEl && formEl.classList.contains("finished");

        if (isFinished || fieldset.classList.contains("answered")) {
          // after finish -> quick flash behavior
          selectOnly(j, e);
        } else if (simulationMode) {
          // during simulation with timer -> persistent tick like original
          selectPersistent(j, e);
        } else {
          // immediate mode -> grade & lock
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

      label.append(`${fox[j]}`);
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
  const category = urlParams.get("category");

  const doneKey = `done-${classNum}-${year}-${number}-${category}`;

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
  actionRow.appendChild(submitBtn);
  actionRow.appendChild(markDoneBtn);
  actionRow.appendChild(tickSpan);

  const result = document.createElement("div");
  result.id = "result";

  form.appendChild(actionRow);
  form.appendChild(result);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (timerInterval) clearInterval(timerInterval);

    const resultBox = document.getElementById("result");
    resultBox.innerHTML = "";

    const score = revealAllAnswers(form);

    resultBox.innerHTML = `<strong>ქულა: ${score} / ${quizData.length}`;

    // mark finished so clicks become quick-flash simulation
    form.classList.add("finished");

    if (simulationMode) form.querySelector("button[type='submit']").disabled = true;
    removeFloatingTimer();
    if (window.MathJax) MathJax.typeset();
  });
};
