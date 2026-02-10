// ============================================
// GSAP ANIMATIONS & INTERACTIVITY
// ============================================

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ============================================
// LOADER
// ============================================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const loaderBar = document.querySelector('.loader-bar');
    
    const tl = gsap.timeline();
    
    tl.to(loaderBar, {
        width: '100%',
        duration: 0.8,
        ease: 'power2.inOut'
    })
    .to(loader, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
        delay: 0.2
    })
    .from('#hero-tag', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
    }, '-=0.4')
    .from('#hero-title', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.5')
    .from('#hero-desc', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
    }, '-=0.5')
    .from('#hero-buttons', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
    }, '-=0.4')
    .from('#hero-image', {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.8');
});

// ============================================
// NAVIGATION
// ============================================
const navbar = document.getElementById('navbar');
const navBg = document.getElementById('nav-bg');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('nav-menu-mobile');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Navbar scroll effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Background opacity
    if (currentScroll > 50) {
        navBg.style.opacity = '1';
    } else {
        navBg.style.opacity = '0';
    }
    
    // Hide/show on scroll (optional - remove if not desired)
    if (currentScroll > lastScroll && currentScroll > 200) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
    
    // Back to top button
    const backToTop = document.getElementById('back-to-top');
    if (currentScroll > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Mobile menu toggle
let isMenuOpen = false;

menuToggle.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        mobileMenu.classList.add('active');
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = '';
    }
});

// Close mobile menu on link click
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = '';
    });
});

// ============================================
// BACK TO TOP
// ============================================
document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

// Reveal animations for text elements
const revealElements = document.querySelectorAll('.gsap-reveal');
revealElements.forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            once: true
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
});

// Card animations
const cards = document.querySelectorAll('.gsap-card');
cards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'power2.out'
    });
});

// Event blocks animation
const eventBlocks = document.querySelectorAll('.scroll-trigger');
eventBlocks.forEach(block => {
    const children = block.children;
    
    gsap.from(children, {
        scrollTrigger: {
            trigger: block,
            start: 'top 75%',
            once: true
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });
});

// Timeline items animation
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            once: true
        },
        x: index % 2 === 0 ? -30 : 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
});

// ============================================
// MAGNETIC BUTTON EFFECT
// ============================================
const magneticBtns = document.querySelectorAll('.magnetic-btn');

// Only apply on non-touch devices
if (!window.matchMedia('(pointer: coarse)').matches) {
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(btn, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed header
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR FADE-IN ELEMENTS
// ============================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
    fadeInObserver.observe(el);
});

// ============================================
// IMAGE LAZY LOADING ENHANCEMENT
// ============================================
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers without native lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ============================================
// PERFORMANCE: CLEANUP SCROLLTRIGGER ON PAGE HIDE
// ============================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        ScrollTrigger.getAll().forEach(trigger => trigger.disable());
    } else {
        ScrollTrigger.getAll().forEach(trigger => trigger.enable());
    }
});

// ============================================
// CONSOLE GREETING
// ============================================
console.log('%c Ifrah K Jamadar Portfolio ', 'background: #F7567C; color: white; font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 5px;');
console.log('%c Built with passion and precision ', 'color: #F7567C; font-size: 14px;');