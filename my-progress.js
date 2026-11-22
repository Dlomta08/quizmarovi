/*
 * my-progress.js — the "my progress" page (my-progress.html).
 *
 * For the logged-in student shows: problems solved, accuracy, daily streak, XP, accuracy per
 * topic group (weakest first), and the "delete my account" button.
 *
 * Data: the profile (QuizAuth.profile) + the my_problem_stats view (one row per problem tried:
 * attempts and correct_count). Topics come from data/problems.json (same ids as the database).
 */
(function () {
  "use strict";

  const content = document.getElementById("content");
  const hello = document.getElementById("hello");
  const WEAK = 60;                        // below this % a topic is marked "სუსტი" (same as quiz.js)

  function note(html) {
    content.innerHTML = `<div class="acc-note">${html}</div>`;
  }

  function showLoggedOut() {
    hello.textContent = "";
    note(`<p>პროგრესის სანახავად შედი ანგარიშზე. სტუმრადაც შეგიძლია ამოცანების ამოხსნა.</p>
          <button type="button" class="acc-btn" id="login"><i class="fab fa-google"></i>შესვლა Google-ით</button>`);
    document.getElementById("login").addEventListener("click", () => QuizAuth.signIn());
  }

  function stat(label, value, sub) {
    const d = document.createElement("div");
    d.className = "acc-stat";
    d.innerHTML = "<small></small><b></b><div class='sub'></div>";
    d.querySelector("small").textContent = label;
    d.querySelector("b").textContent = value;
    d.querySelector(".sub").textContent = sub;
    return d;
  }

  // Accuracy per topic group, e.g. ტრიგონომეტრია: right answers / all answers on its problems.
  function topicRows(stats, byId) {
    const groups = new Map();
    stats.forEach(s => {
      const p = byId.get(s.problem_id);
      if (!p) return;
      const ids = new Set((p.t || []).map(t => {
        const info = TagUI.state.topic.get(t);
        return info && info.parent ? info.parent : t;   // leaf topic -> its group
      }));
      ids.forEach(id => {
        const g = groups.get(id) || { id, right: 0, total: 0 };
        g.right += s.correct_count;
        g.total += s.attempts;
        groups.set(id, g);
      });
    });
    return [...groups.values()]
      .map(g => ({ ...g, pct: Math.round((g.right / g.total) * 100) }))
      .sort((a, b) => a.pct - b.pct || b.total - a.total);
  }

  function topicBox(rows) {
    const box = document.createElement("div");
    box.className = "acc-box";
    box.innerHTML = "<h2>სიზუსტე თემების მიხედვით</h2>";
    if (!rows.length) {
      box.insertAdjacentHTML("beforeend", '<p class="empty">ჯერ არცერთ ამოცანას არ უპასუხე.</p>');
      return box;
    }
    rows.forEach(g => {
      const a = document.createElement("a");
      a.className = "bar-row" + (g.pct < WEAK ? " weak" : "");
      a.href = TagUI.filterUrl("topic", g.id);    // this topic's problems in the problem browser
      a.title = `${g.right} სწორი ${g.total} პასუხიდან · ამ თემის ამოცანები`;
      a.innerHTML = '<span class="name"></span><span class="bar"><i></i></span><span class="pct"></span>';
      a.querySelector(".name").textContent = TagUI.label("topic", g.id);
      a.querySelector(".bar i").style.width = g.pct + "%";
      a.querySelector(".pct").textContent = g.pct + "%";
      box.appendChild(a);
    });
    return box;
  }

  function deleteBox() {
    const box = document.createElement("div");
    box.className = "acc-box acc-danger";
    box.innerHTML = `<h2>ანგარიშის წაშლა</h2>
      <p>წაიშლება შენი პროფილი, ყველა პასუხი და შენახული ამოცანა. ამის დაბრუნება შეუძლებელია.</p>
      <button type="button" class="acc-btn acc-btn-danger"><i class="fas fa-trash"></i> ანგარიშის წაშლა</button>`;
    const btn = box.querySelector("button");
    btn.addEventListener("click", async () => {
      if (!confirm("ნამდვილად გინდა ანგარიშის და ყველა მონაცემის სამუდამოდ წაშლა?")) return;
      btn.disabled = true;
      const err = await QuizCloud.deleteAccount();
      if (err) { alert(err); btn.disabled = false; return; }
      alert("ანგარიში წაიშალა.");
      location.href = "index.html";
    });
    return box;
  }

  async function show() {
    if (!QuizAuth.isLoggedIn()) { showLoggedOut(); return; }
    note("<p>იტვირთება...</p>");
    try {
      const [profile, stats, problems] = await Promise.all([
        QuizAuth.refreshProfile(),        // fresh XP / streak
        QuizCloud.fetchAll("my_problem_stats", "problem_id, attempts, correct_count"),
        fetch("data/problems.json", { cache: "no-cache" }).then(r => (r.ok ? r.json() : [])),
        TagUI.ready,
      ]);
      const byId = new Map(problems.map(p => [`${p.g}-${p.y}-${p.q}-${p.n}`, p]));

      if (profile) {
        hello.textContent = `გამარჯობა, ${profile.username} ${QuizAuth.avatarEmoji(profile.avatar)} · მე-${profile.grade} კლასი`;
      }

      const solved = stats.filter(s => s.correct_count > 0).length;
      const answers = stats.reduce((n, s) => n + s.attempts, 0);
      const right = stats.reduce((n, s) => n + s.correct_count, 0);
      const accuracy = answers ? Math.round((right / answers) * 100) + "%" : "—";
      const streak = QuizAuth.liveStreak();

      const tiles = document.createElement("div");
      tiles.className = "acc-stats";
      tiles.append(
        stat("ამოხსნილი", String(solved), "ამოცანა"),
        stat("სიზუსტე", accuracy, `${answers} პასუხიდან`),
        stat("სერია", (streak > 0 ? "🔥 " : "") + streak, `საუკეთესო: ${profile ? profile.longest_streak : 0} დღე`),
        stat("XP", String(profile ? profile.xp : 0), "+10 ახალ სწორ პასუხზე"),
      );

      content.textContent = "";
      content.append(tiles, topicBox(topicRows(stats, byId)), deleteBox());
    } catch (err) {
      console.error(err);
      note("<p>ჩატვირთვა ვერ მოხერხდა. სცადე გვერდის განახლება.</p>");
    }
  }

  if (!window.QuizAuth || !window.QuizCloud) {
    note("<p>ანგარიშები ახლა მიუწვდომელია. სცადე მოგვიანებით.</p>");
    return;
  }
  QuizAuth.ready.then(show);
  QuizAuth.onChange(() => show());
})();
