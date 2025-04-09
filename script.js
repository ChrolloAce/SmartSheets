// Main initialization function
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    initMobileMenu();
    
    // Initialize animations
    initAnimations();
    
    // Initialize case slider
    initCaseSlider();
    
    // Add animations for sections
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('scroll', updateHeaderOnScroll);
    
    // Add enhanced parallax effect
    window.addEventListener('mousemove', parallaxEffect);
    
    // Add scroll indicator
    addScrollIndicator();
    
    // Run initial checks
    checkVisibility();
    initElementAnimations();
});

// Mobile menu functionality
function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navToggle.querySelector('i').classList.toggle('fa-bars');
            navToggle.querySelector('i').classList.toggle('fa-times');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (mobileMenu.classList.contains('active') && !e.target.closest('nav')) {
                mobileMenu.classList.remove('active');
                navToggle.querySelector('i').classList.add('fa-bars');
                navToggle.querySelector('i').classList.remove('fa-times');
            }
        });
    }
}

// Initialize animations for elements on page load
function initAnimations() {
    // Hero section animations
    const heroTagline = document.querySelector('.hero-tagline');
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroTagline && heroText && heroImage) {
        setTimeout(() => {
            heroTagline.classList.add('fadeIn');
        }, 100);
        
        setTimeout(() => {
            heroText.classList.add('fadeIn');
        }, 300);
        
        setTimeout(() => {
            heroImage.classList.add('fadeIn', 'pulse');
        }, 500);
    }
    
    // Add animation classes to CSS
    const style = document.createElement('style');
    style.textContent = `
        .fadeIn {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeIn 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
        }
        
        .fadeInRight {
            opacity: 0;
            transform: translateX(30px);
            animation: fadeInRight 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
        }
        
        .fadeInLeft {
            opacity: 0;
            transform: translateX(-30px);
            animation: fadeInLeft 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
        }
        
        .fadeInUp {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1), 
                        transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        
        .fadeInUp.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .zoomIn {
            opacity: 0;
            transform: scale(0.8);
            animation: zoomIn 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
        }

        .flipIn {
            opacity: 0;
            transform: perspective(800px) rotateY(90deg);
            animation: flipIn 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
        }
        
        .case-card, .story-card, .category-item, .news-card, .int-logo, .badge {
            opacity: 0;
            transform: translateY(30px);
            transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), 
                        opacity 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), 
                        box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        
        .case-card.visible, .story-card.visible, .category-item.visible, .news-card.visible, .int-logo.visible, .badge.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .feature-content, .security-content, .ai-content, .integrations-content {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1), 
                        transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        
        .feature-content.visible, .security-content.visible, .ai-content.visible, .integrations-content.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeInRight {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes fadeInLeft {
            from {
                opacity: 0;
                transform: translateX(-30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes zoomIn {
            from {
                opacity: 0;
                transform: scale(0.8);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes flipIn {
            from {
                opacity: 0;
                transform: perspective(800px) rotateY(90deg);
            }
            to {
                opacity: 1;
                transform: perspective(800px) rotateY(0deg);
            }
        }

        .floating {
            animation: floating 3s ease-in-out infinite;
        }

        @keyframes floating {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }

        .wiggle {
            animation: wiggle 2.5s ease-in-out infinite;
        }

        @keyframes wiggle {
            0%, 100% { transform: rotate(-3deg); }
            50% { transform: rotate(3deg); }
        }

        .sparkle {
            position: relative;
        }

        .sparkle::after {
            content: '';
            position: absolute;
            top: -20%;
            right: -20%;
            width: 50px;
            height: 50px;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300A67E"><path d="M12 2L9.5 8.5 2 12l7.5 3.5L12 22l2.5-6.5L22 12l-7.5-3.5z"/></svg>');
            background-size: contain;
            animation: rotate 10s linear infinite;
            opacity: 0.7;
        }
        
        .staggered-animation > * {
            opacity: 0;
            transform: translateY(20px);
        }
        
        .staggered-animation.running > *:nth-child(1) {
            animation: fadeIn 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
            animation-delay: 0.1s;
        }
        
        .staggered-animation.running > *:nth-child(2) {
            animation: fadeIn 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
            animation-delay: 0.2s;
        }
        
        .staggered-animation.running > *:nth-child(3) {
            animation: fadeIn 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
            animation-delay: 0.3s;
        }
        
        .staggered-animation.running > *:nth-child(4) {
            animation: fadeIn 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
            animation-delay: 0.4s;
        }
        
        .staggered-animation.running > *:nth-child(5) {
            animation: fadeIn 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
            animation-delay: 0.5s;
        }
        
        .staggered-animation.running > *:nth-child(6) {
            animation: fadeIn 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
            animation-delay: 0.6s;
        }

        .scroll-indicator {
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            background: linear-gradient(90deg, #00A67E 0%, #2ABF9E 100%);
            z-index: 1001;
            width: 0%;
            transition: width 0.1s ease;
        }

        .parallax-element {
            transition: transform 0.2s ease-out;
            will-change: transform;
        }
    `;
    document.head.appendChild(style);
    
    // Set up staggered animations
    const staggeredElements = document.querySelectorAll('.stories-grid, .category-grid, .logo-row, .security-badges');
    staggeredElements.forEach(element => {
        element.classList.add('staggered-animation');
    });
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobileMenu');
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    const navToggle = document.getElementById('navToggle');
                    if (navToggle) {
                        navToggle.querySelector('i').classList.add('fa-bars');
                        navToggle.querySelector('i').classList.remove('fa-times');
                    }
                }
            }
        });
    });
}

// Apply specific animations to elements
function initElementAnimations() {
    // Add floating animations to specific elements
    const floatingElements = document.querySelectorAll('.feature-image, .case-img, .category-icon');
    floatingElements.forEach(el => {
        el.classList.add('floating');
    });

    // Add wiggle animation to buttons with primary class
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.classList.add('wiggle');
        });
        btn.addEventListener('mouseleave', function() {
            this.classList.remove('wiggle');
        });
    });

    // Add sparkle effect to stat numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(el => {
        el.classList.add('sparkle');
    });

    // Add parallax elements
    const parallaxElements = document.querySelectorAll('.hero-image, .feature-image, .ai-image');
    parallaxElements.forEach(el => {
        el.classList.add('parallax-element');
    });

    // Add number counter animation
    const statNumberElements = document.querySelectorAll('.stat-number');
    statNumberElements.forEach(el => {
        const finalNumber = parseInt(el.textContent);
        el.textContent = '0';

        // Create intersection observer to trigger the count animation when in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCount(el, 0, finalNumber, 2000);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(el);
    });
}

// Animated counter function
function animateCount(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        
        // Handle percentage or regular numbers
        if (element.textContent.includes('%')) {
            element.textContent = `${value}%`;
        } else {
            element.textContent = value;
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Create scroll progress indicator
function addScrollIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    document.body.appendChild(indicator);

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        
        indicator.style.width = scrollPercentage + '%';
    });
}

// Create parallax effect on mouse move
function parallaxEffect(e) {
    const parallaxItems = document.querySelectorAll('.parallax-element');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    parallaxItems.forEach(item => {
        const itemRect = item.getBoundingClientRect();
        
        // Only apply effect if element is in viewport
        if (
            itemRect.bottom > 0 && 
            itemRect.top < windowHeight && 
            itemRect.right > 0 && 
            itemRect.left < windowWidth
        ) {
            // Calculate relative mouse position compared to center of element
            const centerX = itemRect.left + itemRect.width / 2;
            const centerY = itemRect.top + itemRect.height / 2;
            
            const deltaX = (mouseX - centerX) / windowWidth;
            const deltaY = (mouseY - centerY) / windowHeight;
            
            // Apply transform with small movement
            item.style.transform = `translate(${deltaX * 20}px, ${deltaY * 20}px)`;
        }
    });
}

// Check if elements are visible and add animation class
function checkVisibility() {
    // Apply animations to individual elements
    const elements = document.querySelectorAll(
        '.case-card, .story-card, .category-item, .news-card, .feature-content, .security-content, .ai-content, .integrations-content, .int-logo, .badge'
    );
    
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
    
    // Apply animations to staggered groups
    const staggeredGroups = document.querySelectorAll('.staggered-animation');
    staggeredGroups.forEach(group => {
        if (isElementInViewport(group) && !group.classList.contains('running')) {
            group.classList.add('running');
        }
    });

    // Apply fade animations to headings and text when they come into view
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        if (isElementInViewport(heading) && !heading.classList.contains('animated')) {
            heading.classList.add('animated', 'fadeIn');
        }
    });

    // Apply zoom-in animation to specific elements
    const zoomElements = document.querySelectorAll('.btn-outline, .btn-text');
    zoomElements.forEach(el => {
        if (isElementInViewport(el) && !el.classList.contains('animated')) {
            el.classList.add('animated', 'zoomIn');
        }
    });
}

// Shrink header on scroll
function updateHeaderOnScroll() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    }
}

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    return (
        rect.top <= windowHeight * 0.85 &&
        rect.bottom >= 0
    );
}

// Initialize case slider functionality
function initCaseSlider() {
    const slider = document.querySelector('.cases-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (!slider || !prevBtn || !nextBtn) return;
    
    let isDragging = false;
    let startX, scrollLeft;
    let isAutoScrolling = false;
    
    // Calculate scroll amount based on card width
    const getScrollAmount = () => {
        const card = slider.querySelector('.case-card');
        if (!card) return 300;
        return card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight || 25);
    };
    
    // Next button click handler
    nextBtn.addEventListener('click', () => {
        isAutoScrolling = true;
        slider.scrollBy({
            left: getScrollAmount(),
            behavior: 'smooth'
        });
        setTimeout(() => {
            isAutoScrolling = false;
        }, 500);
    });
    
    // Previous button click handler
    prevBtn.addEventListener('click', () => {
        isAutoScrolling = true;
        slider.scrollBy({
            left: -getScrollAmount(),
            behavior: 'smooth'
        });
        setTimeout(() => {
            isAutoScrolling = false;
        }, 500);
    });
    
    // Mouse down event handler
    slider.addEventListener('mousedown', (e) => {
        if (isAutoScrolling) return;
        isDragging = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.cursor = 'grabbing';
    });
    
    // Mouse up event handler
    slider.addEventListener('mouseup', () => {
        isDragging = false;
        slider.style.cursor = 'grab';
    });
    
    // Mouse leave event handler
    slider.addEventListener('mouseleave', () => {
        isDragging = false;
        slider.style.cursor = 'grab';
    });
    
    // Mouse move event handler
    slider.addEventListener('mousemove', (e) => {
        if (!isDragging || isAutoScrolling) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        slider.scrollLeft = scrollLeft - walk;
    });
    
    // Add grab cursor
    slider.style.cursor = 'grab';
    
    // Touch events for mobile
    slider.addEventListener('touchstart', (e) => {
        if (isAutoScrolling) return;
        isDragging = true;
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }, { passive: true });
    
    slider.addEventListener('touchend', () => {
        isDragging = false;
    });
    
    slider.addEventListener('touchmove', (e) => {
        if (!isDragging || isAutoScrolling) return;
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    }, { passive: true });
    
    // Auto slide every 5 seconds
    let autoSlideInterval;
    
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
            if (!document.hidden && !isDragging) {
                isAutoScrolling = true;
                
                // If we're near the end, go back to start
                if (slider.scrollLeft > slider.scrollWidth - slider.clientWidth - 100) {
                    slider.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    slider.scrollBy({
                        left: getScrollAmount(),
                        behavior: 'smooth'
                    });
                }
                
                setTimeout(() => {
                    isAutoScrolling = false;
                }, 500);
            }
        }, 5000);
    };
    
    // Start auto slide
    startAutoSlide();
    
    // Pause auto slide on mouse enter
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    // Resume auto slide on mouse leave
    slider.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
    
    // Handle visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(autoSlideInterval);
        } else {
            startAutoSlide();
        }
    });
}

// Run the script once the page is fully loaded
window.addEventListener('load', function() {
    // Trigger animations for any elements already in view
    checkVisibility();
    initElementAnimations();
}); 