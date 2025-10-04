// Dark mode system with system preference detection and smooth transitions
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-dark');
    const root = document.documentElement;
    
    // Function to update theme
    function updateTheme(isDark) {
        // Update theme attribute
        root.setAttribute('data-theme', isDark ? 'dark' : 'light');
        
        // Update button icon and title
        const icon = toggleButton.querySelector('i');
        icon.classList.remove('fa-sun', 'fa-moon');
        icon.classList.add(isDark ? 'fa-sun' : 'fa-moon');
        toggleButton.setAttribute('title', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
        
        // Store preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial state based on localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const initialDark = savedTheme ? savedTheme === 'dark' : prefersDark.matches;
    updateTheme(initialDark);

    // Listen for system theme changes
    prefersDark.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            updateTheme(e.matches);
        }
    });

    // Add click handler with animation
    toggleButton.addEventListener('click', () => {
        const isDark = root.getAttribute('data-theme') === 'dark';
        toggleButton.classList.add('rotate');
        updateTheme(!isDark);
        setTimeout(() => toggleButton.classList.remove('rotate'), 500);
    });
});