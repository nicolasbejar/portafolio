// Modern JavaScript for Portfolio Website

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollAnimations();
    initializeTypingEffect();
    initializeSmoothScrolling();
    initializeIntersectionObserver();
    initializeParallaxEffects();
    initializeTooltips();
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Active navigation link highlighting
    updateActiveNavLink();
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Scroll animations
function initializeScrollAnimations() {
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .education-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animateObserver.observe(el);
    });
}

// Typing effect for hero section
function initializeTypingEffect() {
    const typewriterElement = document.querySelector('.hero-subtitle');
    if (!typewriterElement) return;

    const text = typewriterElement.textContent;
    typewriterElement.textContent = '';
    
    let index = 0;
    const typeSpeed = 100;

    function typeWriter() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, typeSpeed);
        }
    }

    // Start typing effect after page load
    setTimeout(typeWriter, 1000);
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Intersection Observer for fade-in animations
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements
    const fadeElements = document.querySelectorAll('.stat, .cert-item, .contact-item');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        fadeInObserver.observe(el);
    });
}

// Parallax effects for floating elements
function initializeParallaxEffects() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.1;
            element.style.transform = `translateY(${rate * speed}px)`;
        });
    });
}

// Tooltips for skill tags
function initializeTooltips() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', (e) => {
            const tooltip = createTooltip(getSkillDescription(tag.textContent));
            document.body.appendChild(tooltip);
            positionTooltip(tooltip, e.target);
        });
        
        tag.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

function createTooltip(text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: #1e293b;
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 12px;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        white-space: nowrap;
    `;
    
    setTimeout(() => {
        tooltip.style.opacity = '1';
    }, 10);
    
    return tooltip;
}

function positionTooltip(tooltip, target) {
    const rect = target.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    
    const top = rect.top - tooltipRect.height - 8;
    const left = rect.left + (rect.width - tooltipRect.width) / 2;
    
    tooltip.style.top = `${top + window.scrollY}px`;
    tooltip.style.left = `${left}px`;
}

function getSkillDescription(skill) {
    const descriptions = {
        'Python': 'High-level programming language for data science and automation',
        'C#': 'Object-oriented language for .NET applications',
        'Java': 'Platform-independent programming language',
        'R': 'Statistical computing and data analysis language',
        'SQL': 'Database query and management language',
        'Azure Synapse': 'Analytics service for big data and data warehousing',
        'Azure AI Foundry': 'AI development platform for building intelligent applications',
        'Azure Data Factory': 'Cloud-based data integration service',
        'Azure Functions': 'Serverless compute service',
        'Azure Storage': 'Scalable cloud storage solution',
        'Spark': 'Unified analytics engine for big data processing',
        'Databricks': 'Unified analytics platform for data engineering',
        'MongoDB': 'Document-oriented NoSQL database',
        'MySQL': 'Open-source relational database',
        'PostgreSQL': 'Advanced open-source relational database',
        'Git': 'Version control system for tracking changes',
        'Docker': 'Containerization platform for applications',
        'Jenkins': 'Automation server for CI/CD pipelines',
        'Linux': 'Open-source operating system',
        'Postman': 'API testing and collaboration platform',
        'ReactJS': 'JavaScript library for building user interfaces',
        'Angular': 'Web application framework',
        'Django': 'High-level Python web framework'
    };
    
    return descriptions[skill] || 'Technology expertise';
}

// Enhanced scroll effects
function initializeScrollEffects() {
    let ticking = false;
    
    function updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const viewportHeight = window.innerHeight;
        
        // Update floating elements with different speeds
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.05;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        // Fade out hero content as user scrolls
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            const opacity = Math.max(0, 1 - scrolled / viewportHeight);
            heroContent.style.opacity = opacity;
        }
        
        ticking = false;
    }
    
    function requestScrollUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestScrollUpdate);
}

// Initialize enhanced scroll effects
initializeScrollEffects();

// Performance optimization: Debounced resize handler
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Responsive handling
const handleResize = debounce(() => {
    // Recalculate positions and sizes on resize
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero');
    
    // Ensure proper mobile navigation state
    if (window.innerWidth > 768) {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
}, 250);

window.addEventListener('resize', handleResize);

// Enhanced loading animation
function initializeLoadingAnimation() {
    const body = document.body;
    body.style.opacity = '0';
    
    window.addEventListener('load', () => {
        body.style.transition = 'opacity 0.5s ease';
        body.style.opacity = '1';
        
        // Trigger entrance animations
        setTimeout(() => {
            const heroTitle = document.querySelector('.hero-title');
            const heroButtons = document.querySelector('.hero-buttons');
            const socialLinks = document.querySelector('.social-links');
            
            if (heroTitle) heroTitle.classList.add('fade-in-up');
            if (heroButtons) heroButtons.classList.add('fade-in-up');
            if (socialLinks) socialLinks.classList.add('fade-in-up');
        }, 300);
    });
}

initializeLoadingAnimation();

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color) !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    .tooltip {
        font-family: 'Inter', sans-serif;
    }
    
    .tooltip::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #1e293b transparent transparent transparent;
    }
`;
document.head.appendChild(style);

// Enhanced form handling (if contact form is added later)
function initializeFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Add form submission logic here
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                const originalText = submitButton.textContent;
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    submitButton.textContent = 'Message Sent!';
                    setTimeout(() => {
                        submitButton.textContent = originalText;
                        submitButton.disabled = false;
                        form.reset();
                    }, 2000);
                }, 1000);
            }
        });
    });
}

// Easter egg: Konami code
function initializeEasterEgg() {
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    
    let userInput = [];
    
    document.addEventListener('keydown', (e) => {
        userInput.push(e.code);
        
        if (userInput.length > konamiCode.length) {
            userInput.shift();
        }
        
        if (userInput.length === konamiCode.length && 
            userInput.every((key, index) => key === konamiCode[index])) {
            
            // Activate easter egg
            document.body.style.animation = 'rainbow 2s infinite';
            
            const style = document.createElement('style');
            style.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
            
            setTimeout(() => {
                document.body.style.animation = '';
                style.remove();
            }, 5000);
            
            userInput = [];
        }
    });
}

initializeEasterEgg();

// Console message for developers
console.log(`
╭─────────────────────────────────────────╮
│  Welcome to Nicolas Bejar's Portfolio!  │
│                                         │
│  Built with modern web technologies:    │
│  • Vanilla JavaScript (ES6+)           │
│  • CSS3 with Custom Properties         │
│  • Intersection Observer API           │
│  • Responsive Design                   │
│                                         │
│  Interested in the code? Check it out:  │
│  github.com/nicolasbejar                │
╰─────────────────────────────────────────╯
`);

// Performance monitoring
function initializePerformanceMonitoring() {
    // Log page load performance
    window.addEventListener('load', () => {
        setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0];
            const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
            
            console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
            
            // Track largest contentful paint
            const observer = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                entries.forEach((entry) => {
                    console.log(`LCP: ${entry.startTime.toFixed(2)}ms`);
                });
            });
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
        }, 0);
    });
}

initializePerformanceMonitoring();