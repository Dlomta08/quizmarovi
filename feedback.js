/*
 * Feedback chat widget ("მოგვწერეთ").
 * A button opens a small panel where visitors can send a message. On computers it is a floating
 * button in the bottom-right corner; on phones and tablets (≤1100px) it is a small icon in the top bar
 * instead, so nothing floats over answer options or the tab bar, and the panel opens under the top bar. Messages are delivered by Web3Forms (https://web3forms.com) to the
 * email address the access key was created for.
 *
 * The access key is not a secret: Web3Forms keys are meant to be used in public pages.
 */
(function () {
  "use strict";

  const WEB3FORMS_ACCESS_KEY = "0b01d067-7540-4ab2-8fbf-ae017bfbbce8";
  const COOLDOWN_MS = 30 * 1000;       // minimum time between two messages from one browser
  const MAX_LENGTH = 2000;
  const COOLDOWN_KEY = "feedback-last-sent";

  const isConfigured = WEB3FORMS_ACCESS_KEY && !WEB3FORMS_ACCESS_KEY.startsWith("YOUR_");

  function addStyles() {
    if (document.getElementById("feedback-styles")) return;
    const s = document.createElement("style");
    s.id = "feedback-styles";
    s.textContent = `
      #fb-button {
        position: fixed; right: 20px; bottom: 20px; z-index: 2147483000;
        width: 56px; height: 56px; border-radius: 50%; border: none; cursor: pointer;
        background: var(--primary-color, #4361ee); color: #fff; font-size: 1.4rem;
        box-shadow: 0 6px 18px rgba(0,0,0,.25);
        display: flex; align-items: center; justify-content: center;
        transition: transform .15s ease, background .2s ease;
      }
      #fb-button:hover { transform: translateY(-2px); background: var(--secondary-color, #3f37c9); }
      #fb-button:focus-visible { outline: 3px solid var(--accent-color, #4895ef); outline-offset: 3px; }

      #fb-panel {
        position: fixed; right: 20px; bottom: 88px; z-index: 2147483001;
        width: 340px; max-width: calc(100vw - 32px);
        background: var(--card-bg, #fff); color: var(--text-primary, #2b2d42);
        border: 1px solid var(--border-color, rgba(0,0,0,.1)); border-radius: 16px;
        box-shadow: 0 12px 32px rgba(0,0,0,.25);
        display: none; flex-direction: column; overflow: hidden;
        font-family: inherit;
      }
      #fb-panel.open { display: flex; animation: fb-in .18s ease; }
      @keyframes fb-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }

      #fb-panel .fb-head {
        display: flex; align-items: center; justify-content: space-between;
        padding: .8rem 1rem; background: var(--primary-color, #4361ee); color: #fff; font-weight: 600;
      }
      #fb-panel .fb-close {
        background: none; border: none; color: #fff; font-size: 1.2rem; cursor: pointer; line-height: 1;
        padding: .25rem;
      }
      #fb-panel form { display: flex; flex-direction: column; gap: .6rem; padding: 1rem; margin: 0; }
      #fb-panel .fb-intro { margin: 0; font-size: .9rem; color: var(--text-secondary, #6c757d); }
      #fb-panel label { font-size: .85rem; font-weight: 600; }
      #fb-panel textarea, #fb-panel input[type="text"] {
        width: 100%; box-sizing: border-box; font: inherit; font-size: .95rem;
        padding: .55rem .7rem; border-radius: 10px;
        border: 1px solid var(--border-color, rgba(0,0,0,.15));
        background: var(--card-bg-secondary, #f8f9fa); color: inherit;
      }
      #fb-panel textarea { min-height: 110px; resize: vertical; }
      #fb-panel textarea:focus, #fb-panel input[type="text"]:focus {
        outline: 2px solid var(--primary-color, #4361ee); outline-offset: 0; border-color: transparent;
      }
      #fb-panel .fb-hp { position: absolute !important; left: -9999px !important; }
      #fb-panel .fb-send {
        border: none; border-radius: 9999px; padding: .65rem 1rem; cursor: pointer;
        background: var(--primary-color, #4361ee); color: #fff; font: inherit; font-weight: 600;
      }
      #fb-panel .fb-send:disabled { opacity: .6; cursor: not-allowed; }
      #fb-panel .fb-status { font-size: .88rem; min-height: 1.2em; margin: 0; }
      #fb-panel .fb-status.ok { color: #16a34a; }
      #fb-panel .fb-status.err { color: #dc2626; }
      #fb-panel .fb-count { font-size: .75rem; color: var(--text-secondary, #6c757d); text-align: right; margin-top: -.4rem; }

      #fb-nav-button { display: none; }
      @media (max-width: 1100px) {
        #fb-button { display: none; }
        #fb-nav-button {
          display: grid; place-items: center; flex: none; width: 38px; height: 38px; padding: 0;
          border: 0; border-radius: 50%; background: transparent; cursor: pointer;
          color: var(--text-secondary, #6c757d); font-size: 1.1rem;
        }
        #fb-nav-button:hover, #fb-nav-button[aria-expanded="true"] { color: var(--primary-color, #4361ee); background: rgba(var(--primary-rgb, 67,97,238), .1); }
        #fb-nav-button:focus-visible { outline: 3px solid var(--primary-color, #4361ee); outline-offset: 2px; }
        #fb-panel { right: 12px; bottom: auto; top: calc(var(--nav-h, 64px) + 8px); max-height: calc(100vh - var(--nav-h, 64px) - 16px); overflow-y: auto; }
      }
      @media (max-width: 480px) {
        #fb-panel { left: 12px; width: auto; }
      }
      @media print { #fb-button, #fb-nav-button, #fb-panel { display: none !important; } }
    `;
    document.head.appendChild(s);
  }

  // Page context sent along with the message, so we know which quiz it is about.
  function pageContext() {
    const p = new URLSearchParams(location.search);
    const parts = [];
    const subject = window.QUIZ_SUBJECT === "physics" || /physics/.test(location.pathname) ? "ფიზიკა" : "მათემატიკა";
    if (p.get("class")) parts.push(`კლასი: ${p.get("class")}`);
    if (p.get("year")) parts.push(`წელი: ${p.get("year").replace("-", "/")}`);
    if (p.get("number")) parts.push(`ქვიზი: ${p.get("number")}`);
    return {
      page: location.href,
      page_title: document.title,
      quiz: parts.length ? `${subject}, ${parts.join(", ")}` : "",
      screen: `${window.innerWidth}×${window.innerHeight}`
    };
  }

  function lastSent() {
    try { return Number(localStorage.getItem(COOLDOWN_KEY)) || 0; } catch { return 0; }
  }
  function markSent() {
    try { localStorage.setItem(COOLDOWN_KEY, String(Date.now())); } catch {}
  }

  function build() {
    if (document.getElementById("fb-button")) return;
    addStyles();

    const button = document.createElement("button");
    button.id = "fb-button";
    button.type = "button";
    button.setAttribute("aria-label", "მოგვწერეთ");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", "fb-panel");
    button.title = "მოგვწერეთ";
    button.innerHTML = '<i class="fas fa-comment-dots" aria-hidden="true"></i>';

    const panel = document.createElement("div");
    panel.id = "fb-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "მოგვწერეთ");
    panel.innerHTML = `
      <div class="fb-head">
        <span>მოგვწერეთ</span>
        <button type="button" class="fb-close" aria-label="დახურვა">&times;</button>
      </div>
      <form novalidate>
        <p class="fb-intro">შეცდომა ამოცანაში? იდეა ან შეკითხვა? მოგვწერეთ და ჩვენ წავიკითხავთ.</p>
        <label for="fb-message">შეტყობინება</label>
        <textarea id="fb-message" name="message" maxlength="${MAX_LENGTH}" required
          placeholder="მაგ.: მე-8 კლასის მე-2 ქვიზის მე-5 ამოცანაში პასუხი არასწორია..."></textarea>
        <div class="fb-count"><span class="fb-len">0</span>/${MAX_LENGTH}</div>
        <label for="fb-contact">თქვენი ელფოსტა <span style="font-weight:400">(არასავალდებულო, თუ გსურთ პასუხი)</span></label>
        <input id="fb-contact" name="contact" type="text" autocomplete="email" maxlength="200">
        <input class="fb-hp" type="checkbox" name="botcheck" tabindex="-1" autocomplete="off" aria-hidden="true">
        <button type="submit" class="fb-send">გაგზავნა</button>
        <p class="fb-status" role="status" aria-live="polite"></p>
      </form>
    `;

    document.body.append(button, panel);

    // phones and tablets: the same panel opens from an icon in the top bar (before the theme switch)
    const navButton = document.createElement("button");
    navButton.id = "fb-nav-button";
    navButton.type = "button";
    navButton.title = "მოგვწერეთ";
    navButton.setAttribute("aria-label", "მოგვწერეთ");
    navButton.setAttribute("aria-expanded", "false");
    navButton.setAttribute("aria-controls", "fb-panel");
    navButton.innerHTML = '<i class="fas fa-comment-dots" aria-hidden="true"></i>';
    const navContent = document.querySelector(".main-nav .nav-content");
    const themeSwitch = document.getElementById("toggle-dark");   // auth.js may have moved it into its own group
    if (themeSwitch && navContent && navContent.contains(themeSwitch)) themeSwitch.before(navButton);
    else if (navContent) navContent.appendChild(navButton);
    const openers = [button, navButton];
    let opener = button;

    const form = panel.querySelector("form");
    const message = panel.querySelector("#fb-message");
    const contact = panel.querySelector("#fb-contact");
    const honeypot = panel.querySelector(".fb-hp");
    const sendBtn = panel.querySelector(".fb-send");
    const status = panel.querySelector(".fb-status");
    const len = panel.querySelector(".fb-len");

    function setStatus(text, kind) {
      status.textContent = text;
      status.className = "fb-status" + (kind ? " " + kind : "");
    }
    function open() {
      panel.classList.add("open");
      openers.forEach(b => b.setAttribute("aria-expanded", "true"));
      setTimeout(() => message.focus(), 50);
    }
    function close() {
      panel.classList.remove("open");
      openers.forEach(b => b.setAttribute("aria-expanded", "false"));
      // back to the button that opened it, if it is visible (the other one is hidden at this width)
      (opener.offsetParent ? opener : openers.find(b => b.offsetParent) || opener).focus();
    }

    openers.forEach(b => b.addEventListener("click", () => {
      opener = b;
      panel.classList.contains("open") ? close() : open();
    }));
    panel.querySelector(".fb-close").addEventListener("click", close);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && panel.classList.contains("open")) close();
    });
    message.addEventListener("input", () => { len.textContent = message.value.length; });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const text = message.value.trim();
      if (!text) { setStatus("გთხოვთ, დაწეროთ შეტყობინება.", "err"); message.focus(); return; }
      if (honeypot.checked) return; // bot
      if (!isConfigured) {
        console.warn("feedback.js: set WEB3FORMS_ACCESS_KEY to enable sending.");
        setStatus("გაგზავნა დროებით მიუწვდომელია.", "err");
        return;
      }
      const wait = COOLDOWN_MS - (Date.now() - lastSent());
      if (wait > 0) {
        setStatus(`გთხოვთ, დაელოდოთ ${Math.ceil(wait / 1000)} წამს და სცადოთ თავიდან.`, "err");
        return;
      }

      const ctx = pageContext();
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "ახალი შეტყობინება საიტიდან" + (ctx.quiz ? ` (${ctx.quiz})` : ""),
        from_name: "კომაროვის ქვიზები",
        message: text,
        contact: contact.value.trim() || "—",
        quiz: ctx.quiz || "—",
        page: ctx.page,
        page_title: ctx.page_title,
        screen: ctx.screen,
        botcheck: false
      };
      // If the visitor left an email, let us reply to it directly.
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.contact)) payload.replyto = payload.contact;

      sendBtn.disabled = true;
      setStatus("იგზავნება...");
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(payload)
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.success) {
          markSent();
          form.reset();
          len.textContent = "0";
          setStatus("მადლობა! შეტყობინება გაიგზავნა.", "ok");
        } else {
          setStatus("გაგზავნა ვერ მოხერხდა. სცადეთ მოგვიანებით.", "err");
          console.warn("feedback.js: Web3Forms error", data);
        }
      } catch (err) {
        setStatus("კავშირის შეცდომა. შეამოწმეთ ინტერნეტი და სცადეთ თავიდან.", "err");
      } finally {
        sendBtn.disabled = false;
      }
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
