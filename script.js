
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('#main-nav a');

    // Toggle the navigation menu
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
        navToggle.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('is-open');
    });

    // Close the menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
});
