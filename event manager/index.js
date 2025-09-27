// Event Management System JavaScript

// Sample events data
let events = [
    {
        id: 1,
        title: "Tech Innovation Summit 2025",
        type: "conference",
        date: "2025-11-15",
        time: "09:00",
        location: "Silicon Valley Convention Center",
        price: 299.99,
        description: "Join industry leaders for the most anticipated tech conference of the year. Discover breakthrough technologies, network with innovators, and shape the future of tech.",
        attendees: 1250,
        status: "upcoming"
    },
    {
        id: 2,
        title: "Digital Marketing Masterclass",
        type: "workshop",
        date: "2025-10-28",
        time: "14:00",
        location: "Downtown Business Hub",
        price: 149.99,
        description: "Master the art of digital marketing with hands-on workshops covering SEO, social media, and content strategy.",
        attendees: 85,
        status: "upcoming"
    },
    {
        id: 3,
        title: "AI & Machine Learning Webinar",
        type: "webinar",
        date: "2025-10-20",
        time: "16:00",
        location: "Online",
        price: 0,
        description: "Explore the latest trends in artificial intelligence and machine learning with expert speakers from leading tech companies.",
        attendees: 2500,
        status: "upcoming"
    },
    {
        id: 4,
        title: "Startup Networking Mixer",
        type: "networking",
        date: "2025-11-05",
        time: "18:30",
        location: "Innovation District Lounge",
        price: 25.00,
        description: "Connect with fellow entrepreneurs, investors, and startup enthusiasts in a casual networking environment.",
        attendees: 150,
        status: "upcoming"
    },
    {
        id: 5,
        title: "UX Design Workshop",
        type: "workshop",
        date: "2025-11-22",
        time: "10:00",
        location: "Creative Studio Space",
        price: 199.99,
        description: "Learn modern UX design principles and tools through interactive exercises and real-world case studies.",
        attendees: 60,
        status: "upcoming"
    },
    {
        id: 6,
        title: "Blockchain & Cryptocurrency Conference",
        type: "conference",
        date: "2025-12-08",
        time: "09:30",
        location: "Financial District Center",
        price: 399.99,
        description: "Dive deep into blockchain technology and cryptocurrency trends with industry pioneers and thought leaders.",
        attendees: 800,
        status: "upcoming"
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const eventForm = document.getElementById('eventForm');
const eventsGrid = document.getElementById('eventsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('eventModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    renderEvents();
    updateActiveNavLink();
    setMinDateForEventForm();
}

// Event Listeners Setup
function setupEventListeners() {
    // Mobile menu toggle
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });
    
    // Event form submission
    eventForm.addEventListener('submit', handleEventSubmission);
    
    // Modal close
    closeModal.addEventListener('click', closeEventModal);