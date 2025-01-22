// Demo data for the Voting App
const demoData = {
    users: [
        {
            email: 'demo@example.com',
            password: 'demo123', // In a real app, this would be hashed
            name: 'Demo User'
        }
    ],
    polls: [
        {
            id: 1,
            question: 'What is your favorite programming language?',
            options: [
                { id: 1, text: 'JavaScript', votes: 15 },
                { id: 2, text: 'Python', votes: 12 },
                { id: 3, text: 'Java', votes: 8 },
                { id: 4, text: 'C++', votes: 5 }
            ],
            createdBy: 'demo@example.com',
            createdAt: new Date(Date.now() - 86400000), // 1 day ago
            duration: 7 * 86400000, // 7 days
            active: true
        },
        {
            id: 2,
            question: 'Which web framework do you prefer?',
            options: [
                { id: 1, text: 'React', votes: 20 },
                { id: 2, text: 'Vue', votes: 15 },
                { id: 3, text: 'Angular', votes: 10 },
                { id: 4, text: 'Svelte', votes: 8 }
            ],
            createdBy: 'demo@example.com',
            createdAt: new Date(Date.now() - 172800000), // 2 days ago
            duration: 5 * 86400000, // 5 days
            active: true
        }
    ]
};

// Function to load demo data
function loadDemoData() {
    if (!localStorage.getItem('votingAppState')) {
        localStorage.setItem('votingAppState', JSON.stringify({
            users: demoData.users,
            polls: demoData.polls,
            currentUser: null
        }));
    }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { demoData, loadDemoData };
}
