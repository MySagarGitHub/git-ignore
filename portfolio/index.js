

// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
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

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Form Validation
class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.errors = {};
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', this.handleSubmit.bind(this));
            this.addRealTimeValidation();
        }
    }

    addRealTimeValidation() {
        const inputs = this.form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input.name));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const name = field.name;
        let isValid = true;

        // Clear previous error
        this.clearError(name);

        switch (name) {
            case 'name':
                if (!value) {
                    this.setError(name, 'Full name is required');
                    isValid = false;
                } else if (value.length < 2) {
                    this.setError(name, 'Name must be at least 2 characters long');
                    isValid = false;
                } else if (!/^[a-zA-Z\s]+$/.test(value)) {
                    this.setError(name, 'Name can only contain letters and spaces');
                    isValid = false;
                }
                break;

            case 'email':
                if (!value) {
                    this.setError(name, 'Email address is required');
                    isValid = false;
                } else if (!this.isValidEmail(value)) {
                    this.setError(name, 'Please enter a valid email address');
                    isValid = false;
                }
                break;

            case 'phone':
                if (value && !this.isValidPhone(value)) {
                    this.setError(name, 'Please enter a valid phone number');
                    isValid = false;
                }
                break;

            case 'subject':
                if (!value) {
                    this.setError(name, 'Please select a subject');
                    isValid = false;
                }
                break;

            case 'message':
                if (!value) {
                    this.setError(name, 'Message is required');
                    isValid = false;
                } else if (value.length < 10) {
                    this.setError(name, 'Message must be at least 10 characters long');
                    isValid = false;
                }
                break;