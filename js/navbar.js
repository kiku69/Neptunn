document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('navbarToggle');
    const nav = document.getElementById('navLinks');
    const hamburger = toggle.querySelector('.hamburger');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !toggle.contains(e.target)) {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});