# Interactive Voting App

A modern, reactive voting application built with vanilla JavaScript that provides real-time feedback and intuitive user interactions.

## Features

### User Authentication
- Email-based registration and login
- Real-time form validation
- Persistent sessions using localStorage
- Secure password requirements

### Poll Management
- Create custom polls with multiple options
- Dynamic option addition
- Configurable poll duration
- Real-time vote counting
- Progress tracking for active polls

### Real-time Interactions
- Instant form validation feedback
- Live vote updates
- Interactive progress bars
- Toast notifications for all actions
- Time remaining indicators

### User Experience
- Clean, modern interface
- Responsive design for all devices
- Clear visual feedback
- Intuitive navigation
- Accessibility features

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/voting-app.git
cd voting-app
```

2. Open the application
- Simply open `index.html` in your web browser
- No build process or server required
- Works offline with localStorage

## Project Structure

```
voting-app/
├── index.html          # Main HTML structure
├── styles.css          # Modern, responsive styles
├── VotingApp.js        # Core application logic
├── .gitignore         # Git ignore configuration
├── LICENSE            # MIT license
└── README.md          # Documentation
```

## Technical Details

### State Management
- Centralized state object
- Automatic persistence to localStorage
- Real-time state updates
- Event-driven architecture

### Validation
- Email format validation
- Password strength requirements
- Required field checking
- Real-time feedback

### Security Features
- Input sanitization
- One vote per user per poll
- Session management
- No server dependencies

### Performance
- Vanilla JavaScript for speed
- Efficient DOM updates
- Minimal dependencies
- Optimized rendering

## Usage Examples

### Creating a Poll
1. Log in or register
2. Click "Create New Poll"
3. Enter your question
4. Add at least 2 options
5. Set duration
6. Submit

### Voting
1. Browse active polls
2. Click on an option to vote
3. See real-time results
4. Track remaining time

### Viewing Results
- Active polls show live results
- Completed polls display final statistics
- Percentage breakdowns
- Total vote counts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Development

### Setup
```bash
# Clone repository
git clone https://github.com/yourusername/voting-app.git

# Navigate to directory
cd voting-app

# Open in browser
open index.html
```

### Testing
- Test all form validations
- Verify poll creation
- Check voting mechanism
- Validate timer functionality
- Test responsive design

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Modern JavaScript features
- CSS3 animations and transitions
- LocalStorage API
- DOM manipulation best practices
