# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static Georgian-language quiz site (komaroviqvizebi.ge) with past olympiad/school quizzes for grades 7–11, math and physics. Plain HTML/CSS/vanilla JS with no build step or framework, deployed on Vercel (`vercel.json` only sets `cleanUrls`). Math is rendered client-side by MathJax 3.2.2 from `$...$` in the quiz data. All user-facing text is Georgian.

## Commands

There is no package.json, test suite or linter. Node is used only for the scripts in `tools/` (no dependencies).

```sh
python -m http.server 8000 --bind 127.0.0.1   # run locally → http://127.0.0.1:8000/
node tools/build-quiz-index.js                # rebuild quizzes.json, data/problems.json, supabase/answer-key.sql AND sitemap.xml
node tools/build-problem-index.js             # rebuild only data/problems.json
node tools/validate-tags.js [--errors|--summary] [class-9]   # check tags against data/tags.json (exit 1 on errors)
node tools/auto-tag.js --dry | (none) | --force              # suggest tags into quiz files
node tools/build-answer-key.js                # rebuild supabase/answer-key.sql (then run it in Supabase)
```

Run `build-quiz-index.js` after adding/removing/emptying a quiz file; run `build-problem-index.js` (or the former) after changing any math problem's text, options or tags. The generated files (incl. `sitemap.xml`, which lists every quiz page) are committed. If `supabase/answer-key.sql` changed (answers, options or tags of math problems), it must also be re-run by hand in the Supabase SQL Editor, or answers/duels are graded against the old key.

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

## Student accounts (Supabase)

- SQL files in `supabase/` are run by hand in the Supabase SQL Editor, in order: `schema.sql`, `02-daily-problem.sql`, `03-daily-one-try.sql`, `duels.sql`, then `answer-key.sql` (generated; re-run `node tools/build-answer-key.js` + this file whenever math quizzes are added or answers change, otherwise new problems can't be saved). `02` replaces `record_attempt()`: the database now checks answers against the private `problem_keys` table and stores `attempts.xp_awarded`; XP numbers are the small functions `xp_per_correct`, `xp_daily_bonus`, `xp_daily_cap`, `burst_limit`.
- Home page (`body.home`): daily problem card (`daily.js`, `daily_problem()` RPC, one per grade per Tbilisi day) + subjects + continue card, laid out to fit one screen without scrolling.
- Optional Google login; guests can do everything. `supabase/schema.sql` is the base database: `profiles`, `attempts`, `bookmarks`, views `my_problem_stats` / `my_mistakes`, functions `record_attempt()` (saves an answer, updates XP and the Tbilisi-day streak) and `delete_my_account()`. RLS on everything; the browser can't write attempts, XP or streaks directly.
- `supabase-config.js` holds the project URL + public (publishable) key — public by design. Never put the service_role/secret key in the site.
- `auth.js` (`window.QuizAuth`): client, header login button/avatar menu, first-login onboarding. `cloud.js` (`window.QuizCloud`): `recordAttempt`, `fetchAll`, `lastAttempt`, `deleteAccount`; guest answers are buffered in sessionStorage `guest-attempts` and saved after login. Both load with `defer` after the supabase-js CDN script, so code that runs earlier must read `window.QuizAuth` lazily / after `DOMContentLoaded`.
- `quiz.js` `saveResult()` is the single place a graded answer is stored (progress.js + cloud.js); math only.
- Pages: `mistakes.html`/`mistakes.js`, `my-progress.html`/`my-progress.js`, `duel.html`/`duel.js` (styles in `account.css`, `noindex`, not in the sitemap), `privacy.html`. `practice.js` (`QuizPractice.start`) builds a quiz from `problems.json` rows and opens `random-quiz.html` (used by problems.js and mistakes.js).
- **Duels** (`duel.html`/`duel.js`, math only, login required): `supabase/duels.sql` adds `duels`, `duel_players`, `duel_answers` and the columns `area`, `topic_groups`, `difficulty` to the shared private `problem_keys` (used to pick duel problems; filled by the generated `answer-key.sql`). The browser has no table access; everything goes through RPCs (`create_duel`, `join_duel`, `start_duel`, `duel_answer`, `finish_duel`, `get_duel`, `my_duels`). The server picks the problems, grades answers, keeps the clock (per-player timer, 120 s per problem) and settles results/XP lazily in `duel_settle()`. Each duel answer is also saved via `record_attempt()`. Problem texts on the page come from `data/problems.json`; solutions are loaded from the quiz files after the player finishes.
- Problem ids in the DB are `grade-year-quiz-n` (n = position in the quiz file), so **never insert or reorder problems in a published quiz file — only append**, or saved answers point at the wrong problem.

## Conventions

- Every local CSS/JS link in the HTML pages carries a `?v=N` cache-busting query (the number differs per file); bump it in every HTML page that loads a file when that file changes.
- MathJax loads async and `window.MathJax` is only the config object until it starts, so never call `MathJax.typeset*` unguarded; in `quiz.js` use `typesetMath(nodes)`.
- `404.html` is served by Vercel for any missing URL, so it uses absolute asset paths.
- Quiz PDFs are named like `მათ-<grade>-<quiz>-<variant>[-პას]` (`-პას` = answer key) and map to `quizzes/class-G/YEAR/quiz-N.js`.
- After editing quiz files, check they still parse (e.g. `new Function(src + ';return quizData')()` in Node) and that MathJax renders without errors in the browser.
