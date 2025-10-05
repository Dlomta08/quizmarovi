let timerInterval;
let timeLeft = 3 * 60 * 60;
let simulationMode = false;
const fox = ["ა) ", "ბ) ", "გ) ", "დ) ", "ე) ", "ვ) "];

/* ---------- Inject minimal CSS for answer chips (once) ---------- */
(function ensureChipStyles(){
  if (document.getElementById("answer-chip-styles")) return;
  const s = document.createElement("style");
  s.id = "answer-chip-styles";
  s.textContent = `
    /* base look gets applied to each <label> used as an option */
    .option-chip{
      display:inline-flex; align-items:center; gap:.5rem;
      padding:.6rem 1rem; margin:.25rem .35rem .25rem 0;
      border:1px solid var(--border-color, rgba(255,255,255,.15));
      border-radius:9999px;
      background: rgba(255,255,255,0.06);
      color: inherit;
      transition: background .2s ease, border-color .2s ease, color .2s ease, transform .05s ease;
    }
    .option-chip input[type="radio"]{ accent-color: var(--primary-color); }
    .option-chip:hover{ transform: translateY(-1px); }

    /* green when correct */
    .option-chip.is-correct{
      background:#22c55e !important;     /* green */
      border-color:#22c55e !important;
      color:#fff !important;
    }

    /* ❌ soft red */
    .option-chip.is-wrong{
      background:#fca5a5 !important;
      border-color:#fca5a5 !important;
      color:#7f1d1d !important;
    }

    /* ========== Button Styles (using CSS variables) ========== */
    button[type="submit"] {
      background: var(--primary-color);
      color: white;
      border: none;
      padding: 1rem;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 50px;
      cursor: pointer;
      transition: all var(--transition-speed, 0.3s) ease;
      box-shadow: 0 4px 12px rgba(var(--primary-rgb, 102, 126, 234), 0.3);
      width: 100%;
      max-width: 400px;
      display: block;
      margin: 1.5rem auto 0;
    }

    button[type="submit"]:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(var(--primary-rgb, 102, 126, 234), 0.4);
      background: var(--secondary-color);
    }

    button[type="submit"]:active {
      transform: translateY(0);
    }

    button[type="submit"]:disabled {
      background: #999;
      cursor: not-allowed;
      box-shadow: none;
      opacity: 0.6;
    }

    /* Check answer button (შემოწმება) */
    button[type="button"]:not(.mark-done-btn) {
      background: var(--primary-color);
      color: white;
      border: none;
      padding: 0.5rem 1.2rem;
      font-size: 0.95rem;
      font-weight: 500;
      border-radius: 50px;
      cursor: pointer;
      transition: all var(--transition-speed, 0.3s) ease;
      box-shadow: 0 2px 8px rgba(var(--primary-rgb, 102, 126, 234), 0.25);
    }

    button[type="button"]:not(.mark-done-btn):hover {
      background: var(--secondary-color);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(var(--primary-rgb, 102, 126, 234), 0.35);
    }

    /* Mark as done button */
    .mark-done-btn {
      background: var(--card-bg, white);
      color: var(--text-primary, #333);
      border: 2px solid var(--border-color, #ddd);
      padding: 0.8rem 1.8rem;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 50px;
      cursor: pointer;
      transition: all var(--transition-speed, 0.3s) ease;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .mark-done-btn:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(var(--primary-rgb, 102, 126, 234), 0.2);
    }

    /* When marked as done */
    .mark-done-btn.is-done {
      background: var(--primary-color);
      color: white;
      border-color: var(--primary-color);
      box-shadow: 0 3px 12px rgba(var(--primary-rgb, 102, 126, 234), 0.3);
    }

    .mark-done-btn.is-done:hover {
      background: var(--secondary-color);
      border-color: var(--secondary-color);
    }

    /* Action row container */
    .action-row {
      display: flex;
      gap: 12px;
      align-items: center;
      justify-content: center;
      margin-top: 1.5rem;
      flex-wrap: wrap;
    }

    /* Checkmark styling */
    .tick-mark {
      color: var(--primary-color);
      font-size: 1.5rem;
      font-weight: bold;
      animation: scaleIn 0.3s ease;
    }

    @keyframes scaleIn {
      0% {
        transform: scale(0);
        opacity: 0;
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    /* Responsive design */
    @media (max-width: 640px) {
      .action-row {
        flex-direction: column;
        align-items: stretch;
      }
      
      button[type="submit"],
      .mark-done-btn {
        width: 100%;
        max-width: none;
      }
    }
  `;
  document.head.appendChild(s);
})();

/* -------------------- existing code -------------------- */
function timer() {
  const timeBox = document.getElementById("time-selection");
  simulationMode ^= 1;
  if (simulationMode) {
    timeBox.classList.add("visible");
  } else {
    timeBox.classList.remove("visible");
  }
}

function startQuiz(withTimer) {
  simulationMode = withTimer; 
  document.getElementById("mode-selection").style.display = "none";
  const quizForm = document.getElementById("quizForm");
  quizForm.style.display = "block";
  renderQuiz();
  if (withTimer) {
    const customMinutesInput = document.getElementById("customTime");
    let customMinutes = 180;
    if (customMinutesInput) {
      const inputVal = parseInt(customMinutesInput.value);
      if (!isNaN(inputVal) && inputVal >= 1) {
        customMinutes = inputVal;
      }
    }
    timeLeft = customMinutes * 60;
    document.getElementById("timer").style.display = "block";
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("დრო ამოიწურა! ქვიზი ავტომატურად დასრულდა.");
        quizForm.requestSubmit();
      }
    }, 1000);
  } else {
    document.getElementById("timer").style.display = "none";
  }
}

function updateTimerDisplay() {
  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
}

function renderQuiz(){
  const form = document.getElementById("quizForm");
  form.innerHTML = "";
  quizData.forEach((q, i) => {
    const fieldset = document.createElement("fieldset");
      
    // intro
    if (quizData.length > 0 && typeof quizData[i].intro === "string" && quizData[i].intro.trim() !== "") {
      const introDiv = document.createElement("div");
      introDiv.className = "introduction";
      introDiv.innerHTML = quizData[i].intro;
      form.appendChild(introDiv);
      if (window.MathJax) MathJax.typeset();
    }
      
    // task
    if (quizData.length > 0 && typeof quizData[i].task === "string" && quizData[i].task.trim() !== "") {
      const taskDiv = document.createElement("div");
      taskDiv.className = "task";
      taskDiv.innerHTML = quizData[i].task;
      form.appendChild(taskDiv);
      if (window.MathJax) MathJax.typeset();
    }

    // warning
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

    // image inside wrapper
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

    const checkBtn = document.createElement("button");
    checkBtn.type = "button";
    checkBtn.textContent = "შემოწმება";
    checkBtn.style.display = "none";

    function clearChipColors() {
      fieldset.querySelectorAll("label.option-chip").forEach(l => {
        l.classList.remove("is-correct","is-wrong");
      });
    }

    checkBtn.addEventListener("click", () => {
      if (Array.isArray(q.correct) && q.correct.length === q.options.length) {
        feedback.innerHTML = `<span style="color: green;">ყველა პასუხი სწორია ✔️</span>`;
        if (window.MathJax) MathJax.typeset();
        return;
      }

      const selected = form.querySelector(`input[name="question${i}"]:checked`);
      clearChipColors();

      if (!selected) {
        feedback.innerHTML = `<span style="color: orange;">პასუხი არ არის არჩეული</span>`;
      } else {
        const userIdx = parseInt(selected.value, 10);
        const parentLabel = selected.closest("label");

        let isCorrect;
        if (Array.isArray(q.correct)) {
          isCorrect = q.correct.includes(userIdx);
        } else {
          isCorrect = (userIdx === q.correct);
        }

        if (isCorrect) {
          parentLabel.classList.add("is-correct");
          feedback.innerHTML = `<span style="color: green;">პასუხი სწორია ✔️</span>`;
        } else {
          parentLabel.classList.add("is-wrong");
          if (Array.isArray(q.correct)) {
            const allCorrectOptions = q.correct
              .map(idx => fox[idx] + " " + q.options[idx])
              .join(", ");
            feedback.innerHTML = `
              <span style="color: red;">პასუხი არასწორია ❌</span>
              – სწორი პასუხებია: <strong>${allCorrectOptions}</strong>
            `;
          } else {
            feedback.innerHTML = `
              <span style="color: red;">პასუხი არასწორია ❌</span>
              – სწორი პასუხია: <strong>${fox[q.correct]} ${q.options[q.correct]}</strong>
            `;
          }
        }
        if (window.MathJax) MathJax.typeset();
      }
    });

    q.options.forEach((opt, j) => {
      const label = document.createElement("label");
      label.classList.add("option-chip");

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question${i}`;
      radio.value = j;
      radio.addEventListener("change", () => {
        label.classList.remove("is-correct","is-wrong");
        if (!simulationMode) checkBtn.style.display = "inline-block";
      });

      label.append(`${fox[j]}`);
      label.appendChild(radio);
      label.append(`${opt}`);
      fieldset.appendChild(label);
    });

    if(!simulationMode) fieldset.appendChild(checkBtn);
    fieldset.appendChild(feedback);
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

  // Create action row and append buttons in correct order
  const actionRow = document.createElement("div");
  actionRow.className = "action-row";
  actionRow.appendChild(submitBtn);
  actionRow.appendChild(markDoneBtn);
  actionRow.appendChild(tickSpan);
  
  // Create result div
  const result = document.createElement("div");
  result.id = "result";
  
  // Append to form in correct order
  form.appendChild(actionRow);
  form.appendChild(result);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    
    let score = 0;
    const result = document.getElementById("result");
    result.innerHTML = "";

    const tagStats = {};

    quizData.forEach((q, i) => {
      const answer = form.querySelector(`input[name="question${i}"]:checked`);
      const fieldset = form.querySelectorAll("fieldset")[i];
      const feedback = fieldset.querySelector(".feedback");
      const isCorrect = answer && (Array.isArray(q.correct)
        ? q.correct.includes(parseInt(answer.value,10))
        : parseInt(answer.value,10) === q.correct);

      if (isCorrect) score++;

      if(!answer){
        feedback.innerHTML = `<span style="color: orange;">პასუხი არ არის არჩეული</span>`;
      }else{
        feedback.innerHTML = isCorrect
          ? `<span style="color: green;">პასუხი სწორია ✔️</span>`
          : `<span style="color: red;">პასუხი არასწორია ❌</span> – სწორი პასუხია: <strong> ${fox[q.correct]} ${q.options[q.correct]} </strong>`;
      }
      fieldset.appendChild(feedback);
    });

    result.innerHTML = `<strong>ქულა: ${score} / ${quizData.length}`;
    for (let tag in tagStats) {
      const { correct, total } = tagStats[tag];
      const percentage = ((correct / total) * 100).toFixed(1);
      result.innerHTML += `<p>${tag}: ${correct} / ${total} (${percentage}%)</p>`;
    }

    if(simulationMode) form.querySelector("button[type='submit']").disabled = true;
    if (window.MathJax) MathJax.typeset();
  });
}