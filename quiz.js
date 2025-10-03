let timerInterval;
let timeLeft = 3 * 60 * 60;
let simulationMode = false;

function startQuiz(withTimer) {
  simulationMode = withTimer; 
  document.getElementById("mode-selection").style.display = "none";
  const quizForm = document.getElementById("quizForm");
  quizForm.style.display = "block";
  renderQuiz();
  if (withTimer) {
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


    if (typeof q.warning === "string" && q.warning.trim() !== "") {
      const warnDiv = document.createElement("div");
      warnDiv.className = "warning";
      warnDiv.innerText = q.warning;
      fieldset.appendChild(warnDiv);
    }


    const legend = document.createElement("legend");
    legend.innerHTML = `<strong>${i + 1}.</strong><br>${q.question}`;
    fieldset.appendChild(legend);

    if (q.image) {
      const img = document.createElement("img");
      img.src = q.image;
      img.alt = q.alt || `Question ${i+1} illustration`;
      img.style.maxWidth = "100%";
      img.style.margin   = "8px 0";
      fieldset.appendChild(img);
    }

    const feedback = document.createElement("div");
    feedback.className = "feedback";

    const checkBtn = document.createElement("button");
    checkBtn.type = "button";
    checkBtn.textContent = "შემოწმება";
    checkBtn.style.marginTop = "8px";
    checkBtn.style.display = "none"; // initially hidden

    checkBtn.addEventListener("click", () => {
      if (Array.isArray(q.correct) && q.correct.length === q.options.length) {
        feedback.innerHTML = `<span style="color: green;">ყველა პასუხი სწორია ✔️</span>`;
        if (window.MathJax) MathJax.typeset();
        return;
      }

      const selected = form.querySelector(`input[name="question${i}"]:checked`);
      if (!selected) {
    feedback.innerHTML = `<span style="color: orange;">პასუხი არ არის არჩეული</span>`;
  } else {
    const userIdx = parseInt(selected.value);
    let isCorrect;

    // If q.correct is an array, check if userIdx is included;
    // otherwise compare directly as before.
    if (Array.isArray(q.correct)) {
      isCorrect = q.correct.includes(userIdx);
    } else {
      isCorrect = (userIdx === q.correct);
    }

    if (isCorrect) {
      // If every answer is correct, the simplest feedback is:
      feedback.innerHTML = `<span style="color: green;">პასუხი სწორია ✔️</span>`;
    } else {
      // If q.correct is an array, show all “correct” options; else show the single one.
      if (Array.isArray(q.correct)) {
        // Build a comma‐separated list of all correct options:
        const allCorrectOptions = q.correct
          .map(idx => q.options[idx])
          .join(", ");
        feedback.innerHTML = `
          <span style="color: red;">პასუხი არასწორია ❌</span>
          – სწორი პასუხებია: <strong>${allCorrectOptions}</strong>
        `;
      } else {
        feedback.innerHTML = `
          <span style="color: red;">პასუხი არასწორია ❌</span>
          – სწორი პასუხია: <strong>${q.options[q.correct]}</strong>
        `;
      }
    }
      if (window.MathJax) MathJax.typeset();
  }
});

    q.options.forEach((opt, j) => {
      const label = document.createElement("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question${i}`;
      radio.value = j;
      radio.addEventListener("change", () => {
        if (!simulationMode) checkBtn.style.display = "inline-block";
      });
      label.appendChild(radio);
      label.append(` ${opt}`);
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
      const isCorrect = answer && parseInt(answer.value) === q.correct;
      if (isCorrect) score++;
      if(!answer){
        feedback.innerHTML = `<span style="color: orange;">პასუხი არ არის არჩეული</span>`;
      }else{
        feedback.innerHTML = isCorrect
        ? `<span style="color: green;">პასუხი სწორია ✔️</span>`
        : `<span style="color: red;">პასუხი არასწორია ❌</span> – სწორი პასუხია: <strong>${q.options[q.correct]}</strong>`;
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
