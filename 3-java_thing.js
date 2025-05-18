// Mobile Navigation Setup
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // Toggle mobile menu when burger icon is clicked
    burger.addEventListener('click', () => {
        // Show/hide navigation menu
        nav.classList.toggle('nav-active');
        
        // Animate burger icon to X shape
        burger.classList.toggle('toggle');
        
        // Create staggered animation effect for each nav link
        navLinks.forEach((link, index) => {
            // Reset or apply animation with calculated delay
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                // Formula: base delay + position-based offset
                const delay = index / 7 + 0.3;
                link.style.animation = `navLinkFade 0.5s ease forwards ${delay}s`;
            }
        });
    });
});

// Background Visibility Controller
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const body = document.body;
    
    // Manage background visibility based on scroll position
    function checkScroll() {
        // Get hero section's bottom edge position relative to viewport
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        
        // Toggle background class when scrolling past hero section
        if (heroBottom <= 0) {
            body.classList.add('hide-bg');
        } else {
            body.classList.remove('hide-bg');
        }
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll();
});