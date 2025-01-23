class VotingApp {
    constructor() {
        this.state = {
            currentUser: null,
            polls: [],
            currentView: 'login'
        };
        
        this.init();
    }

    init() {
        // Initialize from localStorage
        this.loadState();
        
        // Bind event listeners
        this.bindAuthEvents();
        this.bindPollEvents();
        this.bindNavigationEvents();
        
        // Show initial view
        this.renderCurrentView();
        
        // Start auto-save
        setInterval(() => this.saveState(), 1000);
    }

    loadState() {
        const savedState = localStorage.getItem('votingAppState');
        if (savedState) {
            const parsed = JSON.parse(savedState);
            this.state = {
                ...this.state,
                ...parsed,
                polls: parsed.polls.map(poll => ({
                    ...poll,
                    createdAt: new Date(poll.createdAt),
                    endsAt: new Date(poll.endsAt)
                }))
            };
        }
    }

    saveState() {
        localStorage.setItem('votingAppState', JSON.stringify(this.state));
    }

    showNotification(message, type = 'success') {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.className = `notification show ${type}`;
        
        setTimeout(() => {
            notification.className = 'notification';
        }, 3000);
    }

    bindAuthEvents() {
        // Login Form
        document.getElementById('loginForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Real-time validation
            if (!this.validateEmail(email)) {
                this.showFormError('loginEmail', 'Please enter a valid email');
                return;
            }
            
            if (!password) {
                this.showFormError('loginPassword', 'Password is required');
                return;
            }
            
            // Simulate login
            this.state.currentUser = { email };
            this.showNotification('Successfully logged in!');
            this.state.currentView = 'voting';
            this.renderCurrentView();
        });

        // Register Form
        document.getElementById('registerForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('registerUsername').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            
            // Real-time validation
            if (!username) {
                this.showFormError('registerUsername', 'Username is required');
                return;
            }
            
            if (!this.validateEmail(email)) {
                this.showFormError('registerEmail', 'Please enter a valid email');
                return;
            }
            
            if (password.length < 6) {
                this.showFormError('registerPassword', 'Password must be at least 6 characters');
                return;
            }
            
            // Simulate registration
            this.state.currentUser = { email, username };
            this.showNotification('Registration successful!');
            this.state.currentView = 'voting';
            this.renderCurrentView();
        });

        // Real-time input validation
        ['loginEmail', 'loginPassword', 'registerUsername', 'registerEmail', 'registerPassword'].forEach(id => {
            document.getElementById(id)?.addEventListener('input', (e) => {
                this.validateInput(e.target);
            });
        });
    }

    bindPollEvents() {
        // Create Poll Form
        document.getElementById('createPollForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            const question = document.getElementById('pollQuestion').value;
            const options = Array.from(document.getElementsByClassName('poll-option'))
                .map(input => input.value)
                .filter(value => value.trim() !== '');
            const duration = parseInt(document.getElementById('pollDuration').value);
            
            if (!question) {
                this.showFormError('pollQuestion', 'Question is required');
                return;
            }
            
            if (options.length < 2) {
                this.showNotification('At least 2 options are required', 'error');
                return;
            }
            
            const poll = {
                id: Date.now(),
                question,
                options: options.map(text => ({ text, votes: 0 })),
                createdAt: new Date(),
                endsAt: new Date(Date.now() + duration * 1000),
                createdBy: this.state.currentUser.email,
                voters: []
            };
            
            this.state.polls.unshift(poll);
            this.showNotification('Poll created successfully!');
            this.renderPolls();
            e.target.reset();
        });

        // Add Option Button
        document.getElementById('addOptionBtn')?.addEventListener('click', () => {
            const container = document.querySelector('.option-inputs');
            const newOption = document.createElement('input');
            newOption.type = 'text';
            newOption.className = 'poll-option';
            newOption.required = true;
            newOption.placeholder = `Option ${container.children.length + 1}`;
            container.appendChild(newOption);
        });
    }

    bindNavigationEvents() {
        // View switching
        document.querySelectorAll('[data-view]').forEach(button => {
            button.addEventListener('click', (e) => {
                this.state.currentView = e.target.dataset.view;
                this.renderCurrentView();
            });
        });

        // Logout
        document.getElementById('logoutBtn')?.addEventListener('click', () => {
            this.state.currentUser = null;
            this.state.currentView = 'login';
            this.renderCurrentView();
            this.showNotification('Logged out successfully');
        });
    }

    validateInput(input) {
        const value = input.value;
        let isValid = true;
        let errorMessage = '';

        switch (input.id) {
            case 'loginEmail':
            case 'registerEmail':
                isValid = this.validateEmail(value);
                errorMessage = 'Please enter a valid email';
                break;
            case 'registerPassword':
                isValid = value.length >= 6;
                errorMessage = 'Password must be at least 6 characters';
                break;
            case 'registerUsername':
                isValid = value.length >= 3;
                errorMessage = 'Username must be at least 3 characters';
                break;
        }

        this.showFormError(input.id, isValid ? '' : errorMessage);
        return isValid;
    }

    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    showFormError(inputId, message) {
        const input = document.getElementById(inputId);
        const feedback = input.nextElementSibling;
        
        if (message) {
            input.classList.add('error');
            feedback.textContent = message;
        } else {
            input.classList.remove('error');
            feedback.textContent = '';
        }
    }

    renderCurrentView() {
        // Hide all views
        ['loginView', 'registerView', 'votingView'].forEach(view => {
            document.getElementById(view).classList.add('hidden');
        });
        
        // Show current view
        document.getElementById(`${this.state.currentView}View`).classList.remove('hidden');
        
        // Update header
        document.getElementById('userInfo').classList.toggle('hidden', !this.state.currentUser);
        if (this.state.currentUser) {
            document.getElementById('username').textContent = this.state.currentUser.username || this.state.currentUser.email;
        }
        
        // Render polls if in voting view
        if (this.state.currentView === 'voting') {
            this.renderPolls();
        }
    }

    renderPolls() {
        const now = new Date();
        const activePolls = this.state.polls.filter(poll => poll.endsAt > now);
        const completedPolls = this.state.polls.filter(poll => poll.endsAt <= now);
        
        // Render active polls
        document.getElementById('activePolls').innerHTML = activePolls
            .map(poll => this.renderPollCard(poll))
            .join('');
            
        // Render completed polls
        document.getElementById('completedPolls').innerHTML = completedPolls
            .map(poll => this.renderPollCard(poll, true))
            .join('');
            
        // Add vote handlers
        document.querySelectorAll('.poll-option-item').forEach(option => {
            option.addEventListener('click', () => {
                if (option.classList.contains('disabled')) return;
                
                const pollId = parseInt(option.closest('.poll-card').dataset.pollId);
                const optionIndex = parseInt(option.dataset.index);
                this.handleVote(pollId, optionIndex);
            });
        });
    }

    renderPollCard(poll, isCompleted = false) {
        const totalVotes = poll.options.reduce((sum, opt) => sum + opt.votes, 0);
        const hasVoted = poll.voters.includes(this.state.currentUser.email);
        const timeLeft = this.getTimeLeft(poll.endsAt);
        
        return `
            <div class="poll-card" data-poll-id="${poll.id}">
                <div class="poll-header">
                    <div class="poll-question">${poll.question}</div>
                    <div class="poll-meta">
                        Created by ${poll.createdBy}
                        ${isCompleted ? ' (Completed)' : ''}
                    </div>
                </div>
                <div class="poll-options">
                    ${poll.options.map((option, index) => {
                        const percentage = totalVotes ? Math.round((option.votes / totalVotes) * 100) : 0;
                        return `
                            <div class="poll-option-item ${hasVoted ? 'disabled' : ''}" data-index="${index}">
                                <div class="progress-bar" style="width: ${percentage}%"></div>
                                <div class="option-content">
                                    <span>${option.text}</span>
                                    <span class="option-percentage">${percentage}%</span>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                ${!isCompleted ? `
                    <div class="poll-timer">
                        <span>${timeLeft}</span>
                        <div class="timer-bar">
                            <div class="timer-progress" style="width: ${this.getProgressPercentage(poll.createdAt, poll.endsAt)}%"></div>
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }

    handleVote(pollId, optionIndex) {
        const poll = this.state.polls.find(p => p.id === pollId);
        if (!poll || poll.voters.includes(this.state.currentUser.email)) return;
        
        poll.options[optionIndex].votes++;
        poll.voters.push(this.state.currentUser.email);
        
        this.showNotification('Vote recorded successfully!');
        this.renderPolls();
    }

    getTimeLeft(endDate) {
        const now = new Date();
        const diff = endDate - now;
        
        if (diff <= 0) return 'Ended';
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        return `${hours}h ${minutes}m remaining`;
    }

    getProgressPercentage(startDate, endDate) {
        const now = new Date();
        const total = endDate - startDate;
        const elapsed = now - startDate;
        return Math.min(100, Math.max(0, Math.round((elapsed / total) * 100)));
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    window.app = new VotingApp();
});