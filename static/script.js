// Scroll to top functionality
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mars rotation speed changes on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const mars = document.querySelector('.mars-sphere');
    const scrollSpeed = Math.abs(window.pageYOffset - lastScroll);
    mars.style.animationDuration = Math.max(10, 20 - scrollSpeed / 10) + 's';
    lastScroll = window.pageYOffset;
});
