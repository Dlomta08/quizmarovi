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

    // Dark mode is the black notebook under a desk lamp: the switch shows a moon by day and a lit bulb at night.
    function showSwitch(isDark) {
        icon.className = isDark ? 'fas fa-lightbulb' : 'fas fa-moon';
        toggleButton.title = isDark ? 'ლამპის გამორთვა (ნათელი რეჟიმი)' : 'ლამპის ანთება (ღამის რეჟიმი)';
        toggleButton.setAttribute('aria-label', toggleButton.title);
    }

    function updateTheme(isDark) {
        root.setAttribute('data-theme', isDark ? 'dark' : 'light');
        showSwitch(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        if (isDark) {                       // the lamp light fades in once (theme.css .lamp-turning-on)
            root.classList.add('lamp-turning-on');
            setTimeout(() => root.classList.remove('lamp-turning-on'), 950);
        }
    }

    showSwitch(root.getAttribute('data-theme') === 'dark');

    toggleButton.addEventListener('click', () => {
        const isDark = root.getAttribute('data-theme') === 'dark';
        toggleButton.classList.add('rotate');
        updateTheme(!isDark);
        setTimeout(() => toggleButton.classList.remove('rotate'), 500);
    });
});

// The lamp follows the mouse on computers: its light (theme.css, :root[data-theme="dark"] body::after)
// glides towards the pointer. Only a mouse moves it — on touch screens, and with "reduce motion",
// the lamp stays where it hangs (top middle). It only runs in dark mode, one small step per frame.
(function lampFollowsMouse() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const HOME_Y = 0.16;                    // where the lamp hangs when the mouse is away (16% from the top)
    let x = innerWidth / 2, y = innerHeight * HOME_Y, tx = x, ty = y, frame = 0;

    function step() {
        x += (tx - x) * 0.12;
        y += (ty - y) * 0.12;
        root.style.setProperty('--lamp-x', x.toFixed(1) + 'px');
        root.style.setProperty('--lamp-y', y.toFixed(1) + 'px');
        frame = (Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5) ? requestAnimationFrame(step) : 0;
    }
    function aim(nx, ny) {
        tx = nx; ty = ny;
        if (!frame && root.getAttribute('data-theme') === 'dark') frame = requestAnimationFrame(step);
    }

    document.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse') aim(e.clientX, e.clientY); }, { passive: true });
    document.documentElement.addEventListener('mouseleave', () => aim(innerWidth / 2, innerHeight * HOME_Y));
    window.addEventListener('resize', () => { if (!frame) aim(innerWidth / 2, innerHeight * HOME_Y); });
})();