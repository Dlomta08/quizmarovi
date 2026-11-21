# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static Georgian-language quiz site (komaroviqvizebi.ge) with past olympiad/school quizzes for grades 7–11, math and physics. Plain HTML/CSS/vanilla JS with no build step or framework, deployed on Vercel (`vercel.json` only sets `cleanUrls`). Math is rendered client-side by MathJax 3.2.2 from `$...$` in the quiz data. All user-facing text is Georgian.

## Commands

There is no package.json, test suite or linter. Node is used only for the scripts in `tools/` (no dependencies).

```sh
python -m http.server 8000 --bind 127.0.0.1   # run locally → http://127.0.0.1:8000/
node tools/build-quiz-index.js                # rebuild quizzes.json AND data/problems.json
node tools/build-problem-index.js             # rebuild only data/problems.json
node tools/validate-tags.js [--errors|--summary] [class-9]   # check tags against data/tags.json (exit 1 on errors)
node tools/auto-tag.js --dry | (none) | --force              # suggest tags into quiz files
```

Run `build-quiz-index.js` after adding/removing/emptying a quiz file; run `build-problem-index.js` (or the former) after changing any math problem's text, options or tags. Both generated JSON files are committed.

## Data model

- Quiz files: `quizzes/class-G/YEAR/quiz-N.js` (math) and `physics-quizzes/class-G/YEAR/quiz-N.js` (physics). Each is a script that assigns a global `quizData = [...]` array — loaded by injecting a `<script>` tag, not via fetch/JSON. Images live in `quizzes/class-G/images/`.
- Problem fields: `question`, `options` (6 choices, letters ა–ვ; empty `[]` = open question with no auto-check), `correct` (0-based index), optional `image`, `intro`/`task`, `solution` (HTML string; steps joined with `<br><br>`, ending `<strong>პასუხი:</strong> X) ...`), and the tag fields `area, topics, grade, difficulty, type, method, source, tagsReviewed` (order defined in `tools/tags-lib.js` `TAG_FIELDS`).
- Note the existing `source` field is the textbook reference ({book, section, number}) — don't reuse that name for anything else (random quizzes use `origin` for the original grade/year/quiz/number).
- Tags exist only for math. `data/tags.json` is the tag taxonomy (areas, nested topics, difficulty, types, methods). Problems with `tagsReviewed: true` are never touched by `auto-tag.js`.
- `quizzes.json` lists which quizzes exist per subject/grade/year; every listing page and the random generator read it, so a quiz file not in it won't appear.
- `data/problems.json` is the problem-browser index generated from the quiz files, with short keys (`g y q n a t d ty m x o i in`). Quiz files remain the source of truth.

## Page architecture

- **One page set for both subjects** via `?subject=physics` (absent = math). `subjects.js` sets `window.QUIZ_SUBJECT` and provides `QuizSite` helpers (page URLs, `loadQuizIndex`). Old `physics*.html` pages just redirect.
- Flow: `index.html` → `classes.html` → `class-quizzes.html?class=G` → `quiz.html?class=G&year=YYYY-YY&number=N`.
- `quiz.js` is the shared quiz engine for `quiz.html` and `random-quiz.html`: standard mode (instant per-question grading) and simulation mode (3h timer, graded on submit, state saved under `sim-state:` in sessionStorage so refresh resumes). It renders stepped hints (tag chips via `tags-ui.js`), collapsible solutions, hint-use and per-topic result stats.
- `random-quiz-generator.html` + `rand.js` build a random quiz; `problems.html` + `problems.js` is the filterable problem browser over `data/problems.json` and can also build a quiz from current filters. Both hand the quiz to `random-quiz.html` through sessionStorage (`randomQuizData` / `randomQuizConfig`, incl. a `back` link).
- `progress.js` (`window.QuizProgress`) saves per-problem right/wrong results in localStorage `problem-progress`, keyed `${grade}-${year}-${quiz}-${n}`; math only. Quiz completion uses `done-…` keys, with a `physics-` prefix for physics.
- `feedback.js` is a Web3Forms feedback widget (public key by design); `darkmode.js` handles the theme; `teacher-tool.html` is a standalone page.

## Conventions

- CSS/JS links for the quiz/problem pages carry a `?v=N` cache-busting query (currently `v=4`); bump it in every HTML page that loads a file when that file changes.
- Quiz PDFs are named like `მათ-<grade>-<quiz>-<variant>[-პას]` (`-პას` = answer key) and map to `quizzes/class-G/YEAR/quiz-N.js`.
- After editing quiz files, check they still parse (e.g. `new Function(src + ';return quizData')()` in Node) and that MathJax renders without errors in the browser.
