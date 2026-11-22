// Small "site is being updated" note, shown on every page load.
// Kept calm: no overlay, sits bottom-left away from the feedback button, slides in after a short
// delay and hides itself after a few seconds (paused while hovered or focused). × closes it at once.
(function () {
  const TITLE = "საიტი ახლდება";
  const TEXT = "საიტზე მიმდინარეობს ცვლილებები და თუ რაიმე ხარვეზს გადააწყდებით, გთხოვთ შეგვატყობინოთ.";
  const SHOW_DELAY = 1200;   // ms after the page loads
  const VISIBLE_FOR = 9000;  // ms before it hides itself

  function addStyles() {
    if (document.getElementById("site-notice-styles")) return;
    const s = document.createElement("style");
    s.id = "site-notice-styles";
    s.textContent = `
      .site-notice {
        --sn-accent: var(--primary-color, #9e5130);
        position: fixed; left: 20px; bottom: 20px; z-index: 900;
        width: min(380px, calc(100vw - 108px));
        display: grid; grid-template-columns: auto 1fr auto; gap: 12px; align-items: start;
        padding: 14px 14px 16px;
        background: var(--card-bg, #fff); color: var(--text-primary, #222);
        border: 1px solid var(--border-color, rgba(0,0,0,.12));
        border-radius: 16px;
        box-shadow: 0 2px 6px rgba(0,0,0,.05), 0 14px 34px rgba(0,0,0,.12);
        overflow: hidden;
        opacity: 0; transform: translateY(12px) scale(.98);
        transition: opacity .35s ease, transform .35s cubic-bezier(.2,.8,.2,1);
      }
      .site-notice.show { opacity: 1; transform: none; }
      .site-notice .sn-icon {
        width: 36px; height: 36px; border-radius: 50%;
        display: grid; place-items: center;
        background: rgba(var(--primary-rgb, 158,81,48), .12); color: var(--sn-accent);
        font-size: .95rem;
      }
      .site-notice .sn-title { margin: 1px 0 2px; font-weight: 700; font-size: .95rem; font-family: var(--heading-font, inherit); }
      .site-notice .sn-text { margin: 0; font-size: .86rem; line-height: 1.5; color: var(--text-secondary, #555); }
      .site-notice .sn-report {
        margin-top: 10px; display: inline-flex; align-items: center; gap: 6px;
        padding: 6px 12px; border-radius: 999px; cursor: pointer;
        font: inherit; font-size: .82rem; font-weight: 600;
        background: transparent; color: var(--sn-accent);
        border: 1.5px solid rgba(var(--primary-rgb, 158,81,48), .55);
        transition: background .2s, color .2s;
      }
      .site-notice .sn-report:hover { background: var(--sn-accent); color: var(--on-primary, #fff); }
      .site-notice .sn-close {
        width: 28px; height: 28px; border-radius: 50%; border: 0; cursor: pointer;
        display: grid; place-items: center; margin: -4px -4px 0 0;
        background: transparent; color: var(--text-secondary, #666); font-size: 1.15rem; line-height: 1;
      }
      .site-notice .sn-close:hover { background: var(--card-bg-secondary, rgba(0,0,0,.06)); color: var(--text-primary, #222); }
      .site-notice button:focus-visible { outline: 2px solid var(--sn-accent); outline-offset: 2px; }
      .site-notice .sn-timer {
        position: absolute; left: 0; bottom: 0; height: 3px; width: 100%;
        background: var(--sn-accent); opacity: .45; transform-origin: left;
        animation: sn-timer var(--sn-time) linear forwards;
      }
      .site-notice:hover .sn-timer, .site-notice:focus-within .sn-timer { animation-play-state: paused; }
      @keyframes sn-timer { from { transform: scaleX(1); } to { transform: scaleX(0); } }
      @media (max-width: 600px) {
        .site-notice { left: 12px; bottom: 12px; width: calc(100vw - 96px); padding: 12px 12px 14px; gap: 10px; }
        .site-notice .sn-icon { width: 30px; height: 30px; font-size: .85rem; }
      }
      @media (prefers-reduced-motion: reduce) {
        .site-notice { transition: opacity .2s; transform: none; }
      }
      @media print { .site-notice { display: none; } }
    `;
    document.head.appendChild(s);
  }

  function build() {
    addStyles();
    const hasFeedback = !!document.getElementById("fb-button");
    const box = document.createElement("aside");
    box.className = "site-notice";
    box.setAttribute("role", "status");
    box.style.setProperty("--sn-time", VISIBLE_FOR + "ms");
    box.innerHTML = `
      <span class="sn-icon" aria-hidden="true"><i class="fas fa-screwdriver-wrench"></i></span>
      <div>
        <p class="sn-title">${TITLE}</p>
        <p class="sn-text">${TEXT}</p>
        ${hasFeedback ? '<button type="button" class="sn-report"><i class="fas fa-comment-dots" aria-hidden="true"></i>შეგვატყობინეთ</button>' : ""}
      </div>
      <button type="button" class="sn-close" aria-label="დახურვა" title="დახურვა">&times;</button>
      <span class="sn-timer" aria-hidden="true"></span>`;
    document.body.appendChild(box);
    requestAnimationFrame(() => requestAnimationFrame(() => box.classList.add("show")));

    let closed = false;
    function close() {
      if (closed) return;
      closed = true;
      box.classList.remove("show");
      setTimeout(() => box.remove(), 400);
    }
    box.querySelector(".sn-timer").addEventListener("animationend", close);
    box.querySelector(".sn-close").addEventListener("click", close);
    const report = box.querySelector(".sn-report");
    if (report) report.addEventListener("click", () => {
      close();
      const fb = document.getElementById("fb-button");
      if (fb) fb.click();
    });
  }

  function start() { setTimeout(build, SHOW_DELAY); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
