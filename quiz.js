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
    .option-chip{
      display:inline-flex; align-items:center; gap:.5rem;
      padding:.6rem 1rem; margin:.25rem .35rem .25rem 0;
      border:1px solid var(--border-color, rgba(255,255,255,.15));
      border-radius:9999px;
      background: rgba(255,255,255,0.06);
      color: inherit;
      transition: background .25s ease, border-color .25s ease, color .25s ease, transform .05s ease;
    }
    .option-chip input[type="radio"]{ accent-color: var(--primary-color); }
    .option-chip:hover{ transform: translateY(-1px); }

    /* ✅ soft green */
    .option-chip.is-correct{
      background:#86efac !important;     /* minty green */
      border-color:#86efac !important;
      color:#064e3b !important;          /* dark teal text for contrast */
    }

    /* ❌ soft red */
    .option-chip.is-wrong{
      background:#fca5a5 !important;     /* light coral red */
      border-color:#fca5a5 !important;
      color:#7f1d1d !important;          /* deep red text */
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
    let customMinutes = 180; // fallback
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
    checkBtn.style.marginTop = "8px";
    checkBtn.style.display = "none"; // initially hidden

    /* ---------- helper: clear previous green/red states on this question ---------- */
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
        const parentLabel = selected.closest("label"); // the chip to color

        let isCorrect;
        if (Array.isArray(q.correct)) {
          isCorrect = q.correct.includes(userIdx);
        } else {
          isCorrect = (userIdx === q.correct);
        }

        if (isCorrect) {
          parentLabel.classList.add("is-correct");      // ✅ GREEN chip
          feedback.innerHTML = `<span style="color: green;">პასუხი სწორია ✔️</span>`;
        } else {
          parentLabel.classList.add("is-wrong");        // ❌ RED chip
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
      label.classList.add("option-chip");       // ← make the whole pill colorable

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question${i}`;
      radio.value = j;
      radio.addEventListener("change", () => {
        // when user changes selection, hide previous color until "check"
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
  submitBtn.style.marginTop = "20px";
  form.appendChild(submitBtn);

  const result = document.createElement("div");
  result.id = "result";
  result.style.marginTop = "12px";
  form.appendChild(result);

  const markDoneBtn = document.createElement("button");
  markDoneBtn.type = "button";
  markDoneBtn.textContent = "ქვიზის გაკეთებულად მონიშვნა";
  markDoneBtn.style.marginLeft = "10px";
  markDoneBtn.style.transition = "background-color 0.3s ease, color 0.3s ease";

  const tickSpan = document.createElement("span");
  tickSpan.style.marginLeft = "8px";
  tickSpan.style.color = "green";
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
    markDoneBtn.style.backgroundColor = "#28a745"; 
    markDoneBtn.style.color = "white";
    markDoneBtn.textContent = "ქვიზი მონიშნულია";
  }

  markDoneBtn.addEventListener("click", () => {
    isMarkedDone = !isMarkedDone;
    if (isMarkedDone) {
      localStorage.setItem(doneKey, "true");
      tickSpan.textContent = "✔";
      markDoneBtn.style.backgroundColor = "#28a745";
      markDoneBtn.style.color = "white";
      markDoneBtn.textContent = "ქვიზი მონიშნულია";
    } else {
      localStorage.removeItem(doneKey);
      tickSpan.textContent = "";
      markDoneBtn.style.backgroundColor = "";
      markDoneBtn.style.color = "";
      markDoneBtn.textContent = "ქვიზის გაკეთებულად მონიშვნა";
    }
  });

  form.appendChild(markDoneBtn);
  form.appendChild(tickSpan);

  const actionRow = document.createElement("div");
  actionRow.style.gap = "10px";
  actionRow.style.alignItems = "center";
  actionRow.style.marginTop = "20px";
  actionRow.appendChild(submitBtn);
  actionRow.appendChild(markDoneBtn);
  actionRow.appendChild(tickSpan);
  form.appendChild(actionRow);

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
;
