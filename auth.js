// auth.js — optional student accounts (Google login through Supabase).
//
// What this file does:
//  1. Creates the Supabase client (the library itself is loaded from a CDN by a
//     <script> tag before this file, and the URL/key come from supabase-config.js).
//  2. Puts a "შესვლა" (log in) button — or, when logged in, the avatar + username +
//     streak with a small menu — into the page header, next to the dark-mode button.
//  3. On the first login, shows the onboarding window (username, grade, avatar)
//     and saves it to the `profiles` table.
//  4. Exposes window.QuizAuth so other scripts (quiz.js, the progress page...) can
//     ask "who is logged in?" and react to login/logout.
//
// Login is OPTIONAL: if anything here fails (offline, CDN blocked...), the site
// simply works as before for guests.
(function () {
  'use strict';

  // ---------------------------------------------------------------- setup
  const cfg = window.SUPABASE_CONFIG;
  if (!cfg || !window.supabase || !window.supabase.createClient) {
    console.warn('auth.js: Supabase library or config missing; accounts disabled.');
    return;
  }

  const client = window.supabase.createClient(cfg.url, cfg.anonKey, {
    auth: {
      persistSession: true,       // stay logged in after closing the tab (stored in localStorage)
      autoRefreshToken: true,
      detectSessionInUrl: true,   // finish the login when Google sends the user back here
      flowType: 'pkce'            // returns ?code=... instead of tokens in the URL #hash
    }
  });

  // Preset avatars (key saved in the DB -> emoji shown). Keep keys short and stable:
  // changing a key would break existing profiles that use it.
  const AVATARS = {
    fox: '🦊', panda: '🐼', owl: '🦉', turtle: '🐢', cat: '🐱', dog: '🐶',
    lion: '🦁', frog: '🐸', penguin: '🐧', koala: '🐨', octopus: '🐙', unicorn: '🦄'
  };
  const GRADES = [7, 8, 9, 10, 11];
  // Same rule as the username_format CHECK in supabase/schema.sql.
  const USERNAME_RE = /^[A-Za-z0-9_ა-ჰ-]{3,20}$/;

  // Current state, shared with the rest of the site through window.QuizAuth.
  const state = { user: null, profile: null };
  const listeners = [];

  // Today's date in Tbilisi as 'YYYY-MM-DD' (the same "day" the database uses for streaks).
  function tbilisiDate(offsetDays) {
    const d = new Date(Date.now() + (offsetDays || 0) * 86400000);
    return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tbilisi' }).format(d);
  }

  // The DB only updates the streak when you solve something, so an old streak may
  // still be stored after a missed day. Show it only if it is still "alive".
  function liveStreak(p) {
    if (!p || !p.last_active_date) return 0;
    const alive = p.last_active_date === tbilisiDate(0) || p.last_active_date === tbilisiDate(-1);
    return alive ? p.current_streak : 0;
  }

  // ---------------------------------------------------------------- data
  async function loadProfile(userId) {
    const { data, error } = await client
      .from('profiles')
      .select('id, username, grade, avatar, xp, current_streak, longest_streak, last_active_date, show_on_leaderboard')
      .eq('id', userId)
      .maybeSingle();            // null (not an error) when the row doesn't exist yet
    if (error) { console.warn('auth.js: profile load failed', error); return null; }
    return data;
  }

  async function refreshProfile() {
    state.profile = state.user ? await loadProfile(state.user.id) : null;
    render();
    return state.profile;
  }

  function notify() {
    listeners.forEach(fn => { try { fn(state); } catch (e) { console.error(e); } });
  }

  // ---------------------------------------------------------------- actions
  function signIn() {
    // Google sends the user back to this exact page after login.
    return client.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: location.href.split('#')[0] }
    });
  }

  async function signOut() {
    await client.auth.signOut();
  }

  // Creates the profile on first login. Returns an error message (Georgian) or null.
  async function createProfile({ username, grade, avatar }) {
    if (!state.user) return 'ჯერ შედი ანგარიშზე.';
    const { error } = await client
      .from('profiles')
      .insert({ id: state.user.id, username, grade, avatar });
    if (error) {
      if (error.code === '23505') return 'ეს სახელი უკვე დაკავებულია — სცადე სხვა.';
      if (error.code === '23514') return 'სახელი: 3–20 სიმბოლო (ასოები, ციფრები, _ ან -).';
      console.warn('auth.js: profile insert failed', error);
      return 'ვერ შევინახეთ. სცადე თავიდან.';
    }
    await refreshProfile();
    notify();
    return null;
  }

  // ---------------------------------------------------------------- styles
  function injectStyles() {
    if (document.getElementById('auth-styles')) return;
    const css = `
.nav-actions{display:flex;align-items:center;gap:.6rem}
#auth-slot{display:flex;align-items:center;position:relative}
.auth-login{display:inline-flex;align-items:center;gap:.45rem;font:600 .95rem 'Noto Sans Georgian',sans-serif;
  color:var(--primary-color);background:transparent;border:1.5px solid rgba(var(--primary-rgb),.55);
  border-radius:999px;padding:.38rem .95rem;cursor:pointer;white-space:nowrap}
.auth-login:hover{background:rgba(var(--primary-rgb),.08)}
.auth-login i{font-size:.9rem}
.auth-user{display:inline-flex;align-items:center;gap:.5rem;background:var(--card-bg);border:1px solid var(--border-color);
  border-radius:999px;padding:.22rem .75rem .22rem .25rem;cursor:pointer;font:600 .95rem 'Noto Sans Georgian',sans-serif;
  color:var(--text-primary)}
.auth-avatar{width:32px;height:32px;border-radius:50%;display:inline-grid;place-items:center;font-size:1.15rem;
  background:rgba(var(--primary-rgb),.12);flex:none}
.auth-name{max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.auth-streak,.auth-xp{color:var(--primary-color);font-size:.85rem;font-weight:600;white-space:nowrap}
.auth-xp:empty,.auth-streak:empty{display:none}
.auth-caret{color:var(--text-secondary);font-size:.7rem}
.auth-menu{position:absolute;right:0;top:calc(100% + 8px);min-width:250px;white-space:nowrap;background:var(--card-bg);
  border:1px solid var(--border-color);border-radius:12px;box-shadow:0 12px 30px rgba(0,0,0,.14);padding:.4rem;z-index:1500}
.auth-menu[hidden]{display:none}
.auth-menu a,.auth-menu button{display:flex;width:100%;gap:.6rem;align-items:center;padding:.55rem .7rem;border-radius:8px;
  color:var(--text-primary);text-decoration:none;font:500 .95rem 'Noto Sans Georgian',sans-serif;background:none;border:0;cursor:pointer;text-align:left}
.auth-menu i{color:var(--primary-color);width:1.1rem;text-align:center}
.auth-menu a:hover,.auth-menu button:hover{background:var(--card-bg-secondary)}
.auth-menu hr{border:0;border-top:1px solid var(--border-color);margin:.3rem 0}
.auth-menu .auth-out{color:var(--text-secondary)}
@media (max-width:600px){
  .nav-content .auth-name,.nav-content .auth-caret{display:none}
  .auth-user{padding-right:.55rem}
}
/* narrow phones: login becomes a round icon so the logo stays on one line */
@media (max-width:480px){
  .auth-login span{display:none}
  .auth-login{width:38px;height:38px;padding:0;justify-content:center}
  .nav-actions{gap:.2rem}
  .auth-xp-unit{display:none}
  .auth-user{gap:.3rem;padding:.15rem .5rem .15rem .15rem}
  .auth-avatar{width:26px;height:26px;font-size:.95rem}
  .auth-streak,.auth-xp{font-size:.78rem}
  .nav-content .logo span{white-space:nowrap}
}
@media (max-width:400px){
  .nav-content{padding-left:1rem;padding-right:1rem}
  .nav-content .logo{gap:.4rem}
  .nav-content .logo span{font-size:1.05rem}
  .nav-content .logo i{font-size:1.3rem !important}
}
/* onboarding window */
.auth-backdrop{position:fixed;inset:0;background:rgba(46,38,32,.35);display:grid;place-items:center;z-index:2000;padding:16px;overflow:auto}
.auth-modal{width:min(440px,100%);background:var(--card-bg);border:1px solid var(--border-color);border-radius:16px;
  padding:1.6rem 1.5rem 1.4rem;box-shadow:0 20px 50px rgba(0,0,0,.22);font-family:'Noto Sans Georgian',sans-serif;
  color:var(--text-primary);box-sizing:border-box}
.auth-modal h2{margin:0 0 .25rem;font-size:1.4rem;font-family:var(--heading-font)}
.auth-modal .sub{margin:0 0 .6rem;color:var(--text-secondary);font-size:.92rem}
.auth-modal label{display:block;font-weight:600;font-size:.92rem;margin:1rem 0 .4rem}
.auth-modal input{width:100%;box-sizing:border-box;padding:.6rem .8rem;border-radius:10px;border:1px solid var(--border-color);
  background:var(--background-light);color:var(--text-primary);font:inherit}
.auth-modal input:focus{outline:2px solid rgba(var(--primary-rgb),.4);outline-offset:1px}
.auth-hint{font-size:.8rem;color:var(--text-secondary);margin-top:.3rem}
.auth-err{font-size:.85rem;color:var(--bad-fg);background:var(--bad-bg);border:1px solid var(--bad-border);
  border-radius:8px;padding:.45rem .7rem;margin-top:.9rem}
.auth-err:empty{display:none}
.auth-chips{display:flex;gap:.45rem;flex-wrap:wrap}
.auth-chips button{padding:.4rem .9rem;border-radius:8px;border:1px solid var(--border-color);background:var(--card-bg-secondary);
  font:600 1rem 'Noto Sans Georgian',sans-serif;color:var(--text-primary);cursor:pointer}
.auth-avatars{display:grid;grid-template-columns:repeat(6,1fr);gap:.45rem}
.auth-avatars button{aspect-ratio:1;border-radius:12px;display:grid;place-items:center;font-size:1.5rem;cursor:pointer;
  background:var(--card-bg-secondary);border:2px solid transparent;padding:0}
.auth-chips button.on,.auth-avatars button.on{border-color:var(--primary-color);background:rgba(var(--primary-rgb),.14);color:var(--primary-color)}
.auth-go{display:flex;align-items:center;justify-content:center;gap:.5rem;width:100%;margin-top:1.3rem;padding:.7rem 1rem;
  border-radius:10px;border:0;cursor:pointer;background:var(--primary-color);color:var(--on-primary,#fffaf3);
  font:600 1rem 'Noto Sans Georgian',sans-serif}
.auth-go:disabled{opacity:.6;cursor:default}
.auth-privacy{font-size:.78rem;color:var(--text-secondary);text-align:center;margin:.8rem 0 0}
.auth-privacy button{background:none;border:0;color:var(--primary-color);cursor:pointer;font:inherit;text-decoration:underline;padding:0}
`;
    const style = document.createElement('style');
    style.id = 'auth-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  // ---------------------------------------------------------------- header widget
  let slot = null;   // <div id="auth-slot"> inside the header
  let currentMenu = null;

  // Close the user menu when clicking elsewhere or pressing Escape (added once).
  document.addEventListener('click', (e) => {
    if (currentMenu && !currentMenu.contains(e.target)) currentMenu.hidden = true;
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && currentMenu) currentMenu.hidden = true;
  });

  function ensureSlot() {
    if (slot) return slot;
    const nav = document.querySelector('.nav-content');
    if (!nav) return null;
    // Wrap the dark-mode button and our widget together on the right side of the header.
    const actions = document.createElement('div');
    actions.className = 'nav-actions';
    slot = document.createElement('div');
    slot.id = 'auth-slot';
    actions.appendChild(slot);
    const toggle = document.getElementById('toggle-dark');
    if (toggle && toggle.parentNode === nav) {
      nav.insertBefore(actions, toggle);
      actions.appendChild(toggle);    // moving the element keeps its click handler
    } else {
      nav.appendChild(actions);
    }
    return slot;
  }

  function render() {
    if (!ensureSlot()) return;
    slot.textContent = '';
    currentMenu = null;
    if (!state.user) {
      const btn = document.createElement('button');
      btn.className = 'auth-login';
      btn.type = 'button';
      btn.title = 'შესვლა Google-ით';
      btn.setAttribute('aria-label', 'შესვლა Google-ით');
      btn.innerHTML = '<i class="fab fa-google"></i><span>შესვლა</span>';
      btn.addEventListener('click', signIn);
      slot.appendChild(btn);
      closeOnboarding();
      return;
    }

    const p = state.profile;
    const chip = document.createElement('button');
    chip.className = 'auth-user';
    chip.type = 'button';
    chip.setAttribute('aria-haspopup', 'true');
    chip.innerHTML = '<span class="auth-avatar"></span><span class="auth-name"></span>' +
                     '<span class="auth-xp"></span><span class="auth-streak"></span><i class="fas fa-chevron-down auth-caret"></i>';
    chip.querySelector('.auth-avatar').textContent = p ? (AVATARS[p.avatar] || '🙂') : '🙂';
    chip.querySelector('.auth-name').textContent = p ? p.username : '…';   // textContent = safe, no HTML injection
    const streak = liveStreak(p);
    chip.querySelector('.auth-streak').textContent = streak > 0 ? '🔥 ' + streak : '';
    if (p) {   // "⭐ 130 XP" (the word "XP" is hidden on phones, see CSS)
      const xpEl = chip.querySelector('.auth-xp');
      xpEl.textContent = '⭐ ' + (p.xp || 0);
      const unit = document.createElement('span');
      unit.className = 'auth-xp-unit';
      unit.textContent = ' XP';
      xpEl.appendChild(unit);
    }
    chip.title = streak > 0 ? `${streak} დღე ზედიზედ · ${p.xp || 0} XP` : (p ? `${p.xp || 0} XP` : '');

    const menu = document.createElement('div');
    menu.className = 'auth-menu';
    menu.hidden = true;
    menu.innerHTML =
      '<a href="my-progress.html"><i class="fas fa-chart-line"></i>ჩემი პროგრესი</a>' +
      '<a href="mistakes.html"><i class="fas fa-book"></i>შეცდომების რვეული</a>' +
      '<a href="duel.html"><i class="fas fa-bolt"></i>დუელები</a>' +
      '<hr><button type="button" class="auth-out"><i class="fas fa-right-from-bracket"></i>გასვლა</button>';
    menu.querySelector('.auth-out').addEventListener('click', signOut);

    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.hidden = !menu.hidden;
      chip.setAttribute('aria-expanded', String(!menu.hidden));
    });
    currentMenu = menu;
    slot.append(chip, menu);

    if (!p) openOnboarding(); else closeOnboarding();
  }

  // ---------------------------------------------------------------- onboarding
  let modal = null;

  function closeOnboarding() {
    if (modal) { modal.remove(); modal = null; }
  }

  function openOnboarding() {
    if (modal) return;
    let grade = null;
    let avatar = 'fox';

    modal = document.createElement('div');
    modal.className = 'auth-backdrop';
    modal.innerHTML = `
<div class="auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-title">
  <h2 id="auth-title">მოგესალმებით! 👋</h2>
  <p class="sub">სამი პატარა ნაბიჯი და დავიწყოთ.</p>
  <label for="auth-username">მომხმარებლის სახელი</label>
  <input id="auth-username" maxlength="20" autocomplete="off" spellcheck="false" placeholder="მაგ. nika_math">
  <div class="auth-hint">3–20 სიმბოლო: ასოები, ციფრები, _ ან - · ნამდვილი სახელი საჭირო არ არის</div>
  <label>კლასი</label>
  <div class="auth-chips">${GRADES.map(g => `<button type="button" data-grade="${g}">${g}</button>`).join('')}</div>
  <label>ავატარი</label>
  <div class="auth-avatars">${Object.entries(AVATARS).map(([k, e]) =>
    `<button type="button" data-avatar="${k}" aria-label="${k}">${e}</button>`).join('')}</div>
  <div class="auth-err" role="alert"></div>
  <button type="button" class="auth-go">დაწყება <i class="fas fa-arrow-right"></i></button>
  <p class="auth-privacy">ვინახავთ მხოლოდ სახელს, კლასს, ავატარს და შენს პასუხებს.
    <a href="privacy.html" target="_blank" rel="noopener" style="color:var(--primary-color)">დაწვრილებით</a> ·
    <button type="button" class="auth-cancel">გასვლა</button></p>
</div>`;

    const input = modal.querySelector('#auth-username');
    const err = modal.querySelector('.auth-err');
    const go = modal.querySelector('.auth-go');

    function mark(container, attr, value) {
      container.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset[attr] === String(value)));
    }
    const chips = modal.querySelector('.auth-chips');
    const avatars = modal.querySelector('.auth-avatars');
    chips.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      grade = Number(b.dataset.grade); mark(chips, 'grade', grade);
    });
    avatars.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      avatar = b.dataset.avatar; mark(avatars, 'avatar', avatar);
    });
    mark(avatars, 'avatar', avatar);

    go.addEventListener('click', async () => {
      const username = input.value.trim();
      err.textContent = '';
      if (!USERNAME_RE.test(username)) { err.textContent = 'სახელი: 3–20 სიმბოლო (ასოები, ციფრები, _ ან -).'; input.focus(); return; }
      if (!grade) { err.textContent = 'აირჩიე კლასი.'; return; }
      go.disabled = true;
      const msg = await createProfile({ username, grade, avatar });
      go.disabled = false;
      if (msg) { err.textContent = msg; if (modal) input.focus(); }
      // on success refreshProfile() -> render() closes the window
    });
    input.addEventListener('keydown', e => { if (e.key === 'Enter') go.click(); });
    modal.querySelector('.auth-cancel').addEventListener('click', signOut);

    document.body.appendChild(modal);
    setTimeout(() => input.focus(), 50);
  }

  // ---------------------------------------------------------------- start
  let readyResolve;
  const ready = new Promise(r => { readyResolve = r; });

  // Fires once at start (INITIAL_SESSION) and on every login/logout/token refresh.
  client.auth.onAuthStateChange((event, session) => {
    const newUser = session ? session.user : null;
    const changed = (newUser && newUser.id) !== (state.user && state.user.id);
    state.user = newUser;
    // Run outside the callback (Supabase recommends not awaiting other calls inside it).
    if (event === 'INITIAL_SESSION') {
      // first check on page load -> resolves QuizAuth.ready (pages wait for this)
      setTimeout(async () => { await refreshProfile(); readyResolve(state); }, 0);
    } else if (changed) {
      // later login/logout on this page -> tell the listeners (QuizAuth.onChange)
      setTimeout(async () => { await refreshProfile(); notify(); }, 0);
    }
  });

  function start() { injectStyles(); render(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();

  // ---------------------------------------------------------------- public API
  window.QuizAuth = {
    client,                                   // the Supabase client (used by cloud.js later)
    ready,                                    // Promise: resolves once we know if someone is logged in
    get user() { return state.user; },
    get profile() { return state.profile; },
    isLoggedIn() { return !!state.user; },
    signIn, signOut, refreshProfile,
    onChange(fn) { listeners.push(fn); },     // fn({user, profile}) after login/logout/profile change
    AVATARS, avatarEmoji: key => AVATARS[key] || '🙂',
    liveStreak: () => liveStreak(state.profile),
    tbilisiDate
  };
})();
