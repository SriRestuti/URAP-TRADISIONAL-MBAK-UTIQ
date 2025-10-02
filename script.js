// Fungsi untuk navigasi antar section
function navigate(targetId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

// Toggle menu mobile
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('mobile-menu-open');
}

// Default ke halaman home
document.addEventListener('DOMContentLoaded', () => {
    const initialSection = window.location.hash.substring(1) || 'home';
    navigate(initialSection);
    window.addEventListener('hashchange', () => {
        const newSection = window.location.hash.substring(1) || 'home';
        navigate(newSection);
    });
});