// Mock data for testing
const mockUser = {
    name: "Aditya",
    subject: "All Subjects"
};

// Initialize DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    initializeDashboard();
    setupEventListeners();
});

function initializeDashboard() {
    // Initialize user data
    document.getElementById('userName').textContent = mockUser.name;
    document.getElementById('userSubject').textContent = mockUser.subject;
}

function setupEventListeners() {
    // Navigation
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            
            // Handle navigation to different sections
            switch(section) {
                case 'tests':
                    window.location.href = 'test.html';
                    break;
                case 'progress':
                    window.location.href = 'progress.html';
                    break;
                default:
                    showSection(section);
                    // Update active state
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
            }
        });
    });

    // Start Test Button
    const startTestBtn = document.getElementById('startTestBtn');
    if (startTestBtn) {
        startTestBtn.addEventListener('click', () => {
            window.location.href = 'test.html';
        });
    }
}

function showSection(sectionName) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    const targetSection = document.getElementById(`${sectionName}Section`);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('active');
    }
}

// Check for test score on page load
document.addEventListener('DOMContentLoaded', () => {
    const testScore = localStorage.getItem('testScore');
    if (testScore) {
        showSection('results');
        document.getElementById('scorePercentage').textContent = `${testScore}%`;
        
        // Clear the score after displaying
        localStorage.removeItem('testScore');
    }
});