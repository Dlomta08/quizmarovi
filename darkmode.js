const root = document.documentElement;

function applyTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const initialDark = savedTheme ? savedTheme === 'dark' : prefersDark.matches;
    root.setAttribute('data-theme', initialDark ? 'dark' : 'light');
}

applyTheme();

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

    if (!localStorage.getItem('theme')) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        prefersDark.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                updateTheme(e.matches);
            }
        });
    }

    toggleButton.addEventListener('click', () => {
        const isDark = root.getAttribute('data-theme') === 'dark';
        toggleButton.classList.add('rotate');
        updateTheme(!isDark);
        setTimeout(() => toggleButton.classList.remove('rotate'), 500);
    });
});