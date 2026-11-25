const root = document.documentElement;

function applyTheme() {
    const savedTheme = localStorage.getItem('theme');
    // The light notebook is the default; dark (chalkboard) only when the student chose it with the toggle.
    root.setAttribute('data-theme', savedTheme === 'dark' ? 'dark' : 'light');
}

applyTheme();

// "უკან დაბრუნება" (the arrow link in the top bar): go back to the page the student actually came from,
// like the browser's Back button. The link's own href stays as the fallback for a page opened directly
// (a shared link, a new tab, a reload) or reached from another site. Ctrl/middle click still opens the href.
// Lives here because darkmode.js is the one script every page with a back link loads.
document.addEventListener('click', (e) => {
    const link = e.target.closest('.main-nav a.logo');
    if (!link || !link.querySelector('.fa-arrow-left')) return;
    if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    let from;
    try { from = new URL(document.referrer); } catch (err) { return; }
    if (from.origin !== location.origin || from.href === location.href || history.length < 2) return;
    e.preventDefault();
    history.back();
});

window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        applyTheme();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-dark');
    if (!toggleButton) return;
    
    const icon = toggleButton.querySelector('i');
    if (!icon) return;

    function updateTheme(isDark) {
        root.setAttribute('data-theme', isDark ? 'dark' : 'light');
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        toggleButton.title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    const currentTheme = root.getAttribute('data-theme');
    const isDark = currentTheme === 'dark';
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    toggleButton.title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';

    toggleButton.addEventListener('click', () => {
        const isDark = root.getAttribute('data-theme') === 'dark';
        toggleButton.classList.add('rotate');
        updateTheme(!isDark);
        setTimeout(() => toggleButton.classList.remove('rotate'), 500);
    });
});