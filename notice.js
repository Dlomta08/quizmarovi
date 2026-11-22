// Small, dismissible "site is being updated" note.
// Calm by design: appears once per visit (session), never again after it is closed,
// no overlay, sits bottom-left away from the feedback button, and fades in after a short delay.
(function () {
  const KEY = "notice-dismissed:site-update-2026";
  const SESSION_KEY = "notice-shown:site-update-2026";
  const TEXT = "საიტზე მიმდინარეობს ცვლილებები და თუ რაიმე ხარვეზს გადააწყდებით, გთხოვთ შეგვატყობინოთ.";

  function get(store, k) { try { return store.getItem(k); } catch (e) { return null; } }
  function set(store, k, v) { try { store.setItem(k, v); } catch (e) {} }

  if (get(localStorage, KEY) || get(sessionStorage, SESSION_KEY)) return;

  function addStyles() {
    const s = document.createElement("style");
    s.id = "site-notice-styles";
    s.textContent = `
      .site-notice {
        position: fixed; left: 16px; bottom: 16px; z-index: 900;
        max-width: min(360px, calc(100vw - 104px));
        display: flex; gap: 10px; align-items: flex-start;
        padding: 12px 12px 12px 14px;
        background: var(--card-bg, #fff); color: var(--text-primary, #222);
        border: 1px solid var(--border-color, rgba(0,0,0,.12));
        border-left: 3px solid var(--primary-color, #9e5130);
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0,0,0,.10);
        font-size: .9rem; line-height: 1.5;
        opacity: 0; transform: translateY(8px);
        transition: opacity .4s ease, transform .4s ease;
      }
      .site-notice.show { opacity: 1; transform: none; }
      .site-notice i.lead { color: var(--primary-color, #9e5130); margin-top: 3px; }
      .site-notice p { margin: 0; }
      .site-notice .sn-report {
        background: none; border: 0; padding: 0; margin-top: 4px; font: inherit; font-weight: 600;
        color: var(--primary-color, #9e5130); cursor: pointer; text-decoration: underline; text-underline-offset: 3px;
      }
      .site-notice .sn-close {
        flex: none; background: none; border: 0; cursor: pointer; padding: 2px 4px; margin: -2px -2px 0 0;
        color: var(--text-secondary, #666); font-size: 1.1rem; line-height: 1; border-radius: 6px;
      }
      .site-notice .sn-close:hover { color: var(--text-primary, #222); }
      .site-notice button:focus-visible { outline: 2px solid var(--primary-color, #9e5130); outline-offset: 2px; }
      @media (prefers-reduced-motion: reduce) { .site-notice { transition: none; transform: none; } }
      @media print { .site-notice { display: none; } }
    `;
    document.head.appendChild(s);
  }

  function build() {
    set(sessionStorage, SESSION_KEY, "1");
    addStyles();
    const box = document.createElement("div");
    box.className = "site-notice";
    box.setAttribute("role", "status");
    box.innerHTML = `
      <i class="fas fa-screwdriver-wrench lead" aria-hidden="true"></i>
      <div>
        <p>${TEXT}</p>
        ${document.getElementById("fb-button") ? '<button type="button" class="sn-report">შეგვატყობინეთ</button>' : ""}
      </div>
      <button type="button" class="sn-close" aria-label="დახურვა" title="დახურვა">&times;</button>`;
    document.body.appendChild(box);
    requestAnimationFrame(() => requestAnimationFrame(() => box.classList.add("show")));

    function dismiss() {
      set(localStorage, KEY, "1");
      box.classList.remove("show");
      setTimeout(() => box.remove(), 400);
    }
    box.querySelector(".sn-close").addEventListener("click", dismiss);
    const report = box.querySelector(".sn-report");
    if (report) report.addEventListener("click", () => {
      dismiss();
      const fb = document.getElementById("fb-button");
      if (fb) fb.click();
    });
  }

  function start() { setTimeout(build, 1500); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
