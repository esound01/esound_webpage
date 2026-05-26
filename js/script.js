// ============================================
// eSound Imaging - JavaScript Functionality
// ============================================

// Language Management
const languageManager = {
    currentLanguage: localStorage.getItem('language') || 'en',
    
    init() {
        this.setLanguage(this.currentLanguage);
        this.setupEventListeners();
    },

    setupEventListeners() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.setLanguage(lang);
            });
        });
    },

    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });

        // Update all translatable elements
        document.querySelectorAll('[data-en][data-es]').forEach(element => {
            const text = element.dataset[lang];
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else if (element.tagName === 'LABEL') {
                element.textContent = text;
            } else if (element.tagName === 'OPTION') {
                element.textContent = text;
            } else {
                element.textContent = text;
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }
};

// Form Handler
const formHandler = {
    init() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    },

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };

        // Validate form
        if (!this.validateForm(formData)) {
            alert('Please fill in all required fields');
            return;
        }

        // Send email via mailto (client-side solution)
        this.sendEmail(formData);
    },

    validateForm(data) {
        return data.name && data.email && data.service;
    },

    sendEmail(data) {
        const subject = `New Service Request from ${data.name}`;
        const body = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.service}
Message: ${data.message}
        `.trim();

        const mailtoLink = `mailto:info@esoundimaging.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;

        // Reset form
        document.getElementById('contactForm').reset();
    }
};

// Smooth Scroll Enhancement
const smoothScroll = {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    }
};

// Intersection Observer for animations
const observerInit = {
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.service-card, .feature, .testimonial-card').forEach(el => {
            observer.observe(el);
        });
    }
};

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
    languageManager.init();
    formHandler.init();
    smoothScroll.init();
    observerInit.init();
});

// Mobile menu toggle (if needed in future)
const mobileMenu = {
    init() {
        // Add mobile menu functionality here if needed
    }
};
