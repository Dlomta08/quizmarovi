---
name: run-local
description: Run the quizmarovi site locally in the browser, and stop the local server when asked. Use when the user says "run locally", "run local", "start the site" or "stop the local server".
---

The site is plain HTML/CSS/JS with no build step, so a static server is enough.

## Start
1. Check whether port 8000 is already in use. If a server is already running there, reuse it.
2. From the repo root, start it in the background:
   `python -m http.server 8000 --bind 127.0.0.1`
3. Check that http://127.0.0.1:8000/index.html returns 200.
4. Tell the user the address: http://127.0.0.1:8000/

## Notes
- Locally, use `.html` URLs (for example `/quiz.html?class=9&year=2024-25&number=1`). The `cleanUrls` setting only works on Vercel.
- Physics pages use `?subject=physics`.
- If the browser shows an old version, hard refresh with Ctrl+F5. The `?v=N` query on CSS/JS links is cache busting.

## Stop
When the user asks to stop it, stop the background server process and confirm that port 8000 no longer answers.

## Rules
- Never push or commit as part of this skill.
- Run the server in the background, so the session is not blocked.
