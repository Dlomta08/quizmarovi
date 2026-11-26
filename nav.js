// Site navigation: the same four sections on every page.
// - Computers (wider than 1100px): links in the top bar, after the logo or the back link (theme.css .nav-links).
// - Phones and tablets: a bottom tab bar (theme.css .tabbar), because the top bar has no room for the links.
//   Quiz pages (quiz.html, random-quiz.html) get no tab bar: solving keeps the whole screen,
//   and the top bar's back link leads out.
// Also keeps --nav-h (the top bar's height) on <html> for things placed under it (quiz.js, feedback.js).
(function () {
  "use strict";

  const icon = (paths) =>
    `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" ` +
    `stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths}</svg>`;

  // Absolute paths, so the links also work from 404.html (served at any URL).
  const SECTIONS = [
    { href: "/", label: "ქვიზები", page: "index",
      pages: ["index", "classes", "class-quizzes", "random-quiz-generator", "quiz", "random-quiz"],
      icon: icon('<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h11"/>') },
    { href: "/problems.html", label: "ამოცანები", page: "problems", pages: ["problems"],
      icon: icon('<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>') },
    { href: "/theory.html", label: "თეორია", page: "theory", pages: ["theory"],
      icon: icon('<path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z"/><path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"/>') },
    { href: "/my-progress.html", label: "ჩემი პროგრესი", short: "პროგრესი", page: "my-progress",
      pages: ["my-progress", "mistakes", "mastery"],
      icon: icon('<path d="M4 20V11"/><path d="M10 20V5"/><path d="M16 20v-6"/><path d="M21 20H3"/>') },
  ];
  const NO_TAB_BAR = ["quiz", "random-quiz"];

  // "/classes", "/classes.html" and "/" -> "classes" / "index"
  const page = location.pathname.replace(/\/+$/, "").split("/").pop().replace(/\.html$/, "") || "index";
  const current = SECTIONS.find((s) => s.pages.includes(page));

  function link(s, cls, text) {
    const a = document.createElement("a");
    a.href = s.href;
    if (cls) a.className = cls;
    a.innerHTML = text;
    if (s === current) a.setAttribute("aria-current", s.page === page ? "page" : "true");
    return a;
  }

  function trackNavHeight(nav) {
    const set = () => document.documentElement.style.setProperty("--nav-h", nav.offsetHeight + "px");
    set();
    if (window.ResizeObserver) new ResizeObserver(set).observe(nav);
    else window.addEventListener("resize", set);
  }

  function build() {
    const bar = document.querySelector(".main-nav");
    const content = bar && bar.querySelector(".nav-content");
    if (!content) return;
    trackNavHeight(bar);

    // top-bar links: the home page has them in its HTML (kept as they are without JS), other pages get them here
    let links = content.querySelector(".nav-links");
    if (!links) {
      links = document.createElement("div");
      links.className = "nav-links";
      const logo = content.querySelector(".logo");
      if (logo) logo.after(links); else content.prepend(links);
    }
    links.replaceChildren(...SECTIONS.map((s) => {
      const a = link(s, "", "");
      a.textContent = s.label;
      return a;
    }));

    if (NO_TAB_BAR.includes(page)) return;
    const tabs = document.createElement("nav");
    tabs.className = "tabbar";
    tabs.setAttribute("aria-label", "მთავარი მენიუ");
    SECTIONS.forEach((s) => {
      const a = link(s, "tab", s.icon + "<span></span>");
      a.querySelector("span").textContent = s.short || s.label;
      tabs.appendChild(a);
    });
    document.body.appendChild(tabs);
    document.body.classList.add("has-tabbar");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
