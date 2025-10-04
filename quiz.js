let timerInterval;
let timeLeft = 3 * 60 * 60;
let simulationMode = false;
const fox = ["ა) ", "ბ) ", "გ) ", "დ) ", "ე) ", "ვ) "];

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

    if (Array.isArray(q.correct)) {
      isCorrect = q.correct.includes(userIdx);
    } else {
      isCorrect = (userIdx === q.correct);
    }

    if (isCorrect) {
      feedback.innerHTML = `<span style="color: green;">პასუხი სწორია ✔️</span>`;
    } else {
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
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question${i}`;
      radio.value = j;
      radio.addEventListener("change", () => {
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
      const isCorrect = answer && parseInt(answer.value) === q.correct;
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

/* =====================
   📸 Image Modal Feature
   ===================== */
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.createElement("div");
  modal.className = "img-modal";
  modal.innerHTML = `
    <span class="img-modal-close">&times;</span>
    <img class="img-modal-content" id="imgInModal">
  `;
  document.body.appendChild(modal);

  const modalImg = modal.querySelector("#imgInModal");
  const closeBtn = modal.querySelector(".img-modal-close");
  let scale = 1;

  // open modal
  document.body.addEventListener("click", e => {
    if (e.target.classList.contains("quiz-image")) {
      modal.style.display = "block";
      modalImg.src = e.target.src;
      scale = 1;
      modalImg.style.transform = "scale(1)";
    }
  });

  // close modal
  closeBtn.onclick = () => modal.style.display = "none";
  modal.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

  // zoom with scroll wheel
  modalImg.addEventListener("wheel", e => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    scale = Math.min(Math.max(1, scale + delta), 5);
    modalImg.style.transform = `scale(${scale})`;
  });

  // reset zoom on double click
  modalImg.addEventListener("dblclick", () => {
    scale = 1;
    modalImg.style.transform = "scale(1)";
  });
});
