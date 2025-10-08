function toggleAllClasses() {
    const checkboxes = document.querySelectorAll('input[name="class"]');
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);
    checkboxes.forEach(cb => {
        cb.checked = !allChecked;
        cb.dispatchEvent(new Event('change'));
    });
}

function toggleAllQuizzes() {
    const checkboxes = document.querySelectorAll('input[name="quiz"]');
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);
    checkboxes.forEach(cb => {
        cb.checked = !allChecked;
        cb.dispatchEvent(new Event('change'));
    });
}

async function loadQuizScript(path) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = path + '?v=' + Math.random();
        script.onload = () => {
            if (typeof quizData !== 'undefined' && Array.isArray(quizData)) {
                const dataCopy = [...quizData];
                delete window.quizData;
                resolve(dataCopy);
            } else {
                resolve(null);
            }
        };
        script.onerror = () => reject(`Failed to load ${path}`);
        document.head.appendChild(script);
    });
}

async function generateQuiz() {
    const errorDiv = document.getElementById('errorMessage');
    const loadingDiv = document.getElementById('loadingSpinner');
    const generateBtn = document.querySelector('.generate-btn');

    errorDiv.style.display = 'none';
    loadingDiv.style.display = 'none';

    const classes = Array.from(document.querySelectorAll('input[name="class"]:checked')).map(cb => cb.value);
    const quizNumbers = Array.from(document.querySelectorAll('input[name="quiz"]:checked')).map(cb => cb.value);
    const problemCount = parseInt(document.getElementById('problemCount').value);

    if (classes.length === 0 || quizNumbers.length === 0 || isNaN(problemCount) || problemCount < 1 || problemCount > 100){
        errorDiv.textContent = 'გთხოვთ შეავსოთ ყველა ველი და აირჩიოთ მინიმუმ 1 და მაქსიმუმ 100 ამოცანა.';
        errorDiv.style.display = 'block';
        return;
    }

    loadingDiv.style.display = 'block';
    generateBtn.disabled = true;

    const years = ['2020-21', '2021-22', '2022-23', '2023-24', '2024-25'];
    let allProblems = [];

    for (const year of years) {
        for (const classNum of classes) {
            for (const quizNum of quizNumbers) {
                const path = `class-${classNum}/${year}/quiz-${quizNum}.js`;
                console.log('Loading:', path);
                try {
                    const data = await loadQuizScript(path);
                    if (data) {
                        data.forEach(p => {
                            p.source = { class: classNum, year: year, quiz: quizNum };
                            if(p.random == 1){
                                p.intro = "";
                                p.task = "";
                            }
                            if(p.options.length) allProblems.push(p);
                        });
                    }
                } catch (err) {
                    console.warn(err);
                }
            }
        }
    }
    loadingDiv.style.display = 'none';
    generateBtn.disabled = false;

    if (allProblems.length == 0) {
        errorDiv.textContent = 'არჩეული პარამეტრებით ამოცანები ვერ მოიძებნა.';
        errorDiv.style.display = 'block';
        return;
    }

    const shuffled = allProblems.sort(() => 0.5 - Math.random());
    const selectedProblems = shuffled.slice(0, Math.min(problemCount, allProblems.length));

    try {
        sessionStorage.setItem('randomQuizData', JSON.stringify(selectedProblems));
        const config = { classes, quizNumbers, totalAvailable: allProblems.length };
        sessionStorage.setItem('randomQuizConfig', JSON.stringify(config));
        window.location.href = 'random-quiz.html';
    } catch (e) {
        errorDiv.textContent = 'მონაცემების შენახვისას მოხდა შეცდომა.';
        errorDiv.style.display = 'block';
    }
}