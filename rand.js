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

// Subject comes from the URL (?subject=physics) via subjects.js.
const RANDOM_SUBJECT = window.QuizSite.subject.id;
const QUIZ_BASE_DIR = window.QuizSite.subject.dir;

// Loads one quiz file and returns its quizData array (or null).
// Files are fetched and run in their own scope instead of being added as <script> tags,
// because physics files declare `const quizData`, which can't be declared twice on one page.
async function loadQuizScript(path) {
    try {
        const res = await fetch(path);
        if (!res.ok) return null;
        const source = (await res.text())
            .replace(/^﻿/, '')
            .replace(/^\s*(?:const|let|var)\s+quizData\s*=/m, 'quizData =');
        const data = new Function('let quizData;\n' + source + '\n;return quizData;')();
        return Array.isArray(data) ? data : null;
    } catch (err) {
        console.warn(`Failed to load ${path}:`, err);
        return null;
    }
}

// Unbiased Fisher–Yates shuffle (returns a new array).
function shuffle(array) {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
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

    // Only request quiz files that exist (listed in quizzes.json).
    let index = {};
    try { index = await window.QuizSite.loadQuizIndex(); } catch (err) { console.warn('quizzes.json not loaded', err); }

    const paths = [];
    for (const classNum of classes) {
        for (const [year, numbers] of Object.entries(index[classNum] || {})) {
            for (const quizNum of quizNumbers) {
                if (!numbers.includes(Number(quizNum))) continue;
                paths.push({
                    path: `${QUIZ_BASE_DIR}/class-${classNum}/${year}/quiz-${quizNum}.js`,
                    meta: { class: classNum, year: year, quiz: quizNum }
                });
            }
        }
    }
    
    const results = await Promise.all(
        paths.map(async ({path, meta}) => {
            try {
                const data = await loadQuizScript(path);
                if (data) {
                    return data.map(p => ({
                        ...p,
                        source: meta,
                        intro: p.random == 1 ? "" : p.intro,
                        task: p.random == 1 ? "" : p.task
                    })).filter(p => p.options && p.options.length);
                }
                return [];
            } catch (err) {
                console.warn(`Failed to load ${path}:`, err);
                return [];
            }
        })
    );

    const allProblems = results.flat();
    
    loadingDiv.style.display = 'none';
    generateBtn.disabled = false;

    if (allProblems.length == 0) {
        errorDiv.textContent = 'არჩეული პარამეტრებით ამოცანები ვერ მოიძებნა.';
        errorDiv.style.display = 'block';
        return;
    }

    const shuffled = shuffle(allProblems);
    const selectedProblems = shuffled.slice(0, Math.min(problemCount, allProblems.length));

    try {
        // A new random quiz has the same URL as the previous one, so drop any unfinished
        // simulation progress saved for it (see SIM_STATE_KEY in quiz.js).
        Object.keys(sessionStorage)
            .filter(k => k.startsWith('sim-state:/random-quiz'))
            .forEach(k => sessionStorage.removeItem(k));
        sessionStorage.setItem('randomQuizData', JSON.stringify(selectedProblems));
        const config = { subject: RANDOM_SUBJECT, classes, quizNumbers, totalAvailable: allProblems.length };
        sessionStorage.setItem('randomQuizConfig', JSON.stringify(config));
        window.location.href = 'random-quiz.html';
    } catch (e) {
        errorDiv.textContent = 'მონაცემების შენახვისას მოხდა შეცდომა.';
        errorDiv.style.display = 'block';
    }
}