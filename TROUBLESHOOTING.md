# Troubleshooting Guide

## Common Issues and Solutions

### Login Problems

#### Can't Log In
**Symptoms:**
- Login button doesn't respond
- "Invalid credentials" message
- Endless loading

**Solutions:**
1. Check email format
   - Must be valid email format (e.g., user@domain.com)
   - Check for typos
   - Check caps lock

2. Check password
   - Minimum 8 characters
   - Case sensitive
   - No leading/trailing spaces

3. Clear browser data
   ```
   Chrome: Settings → Privacy → Clear browsing data
   Firefox: Options → Privacy → Clear Data
   Safari: Preferences → Privacy → Manage Website Data
   ```

4. Enable cookies
   - Required for session management
   - Check browser settings
   - Disable privacy blockers

#### Session Issues
**Symptoms:**
- Frequent logouts
- "Session expired" message
- Need to login repeatedly

**Solutions:**
1. Check browser settings
   - Enable cookies
   - Disable "Clear cookies on exit"
   - Allow local storage

2. Update browser
   - Use latest version
   - Clear cache after update

3. Check privacy settings
   - Allow site cookies
   - Disable strict privacy mode
   - Whitelist the application

### Poll Creation Issues

#### Can't Create Poll
**Symptoms:**
- Create button unresponsive
- Form validation errors
- Poll doesn't appear after creation

**Solutions:**
1. Check question length
   - Minimum 10 characters
   - Maximum 200 characters
   - No special formatting

2. Verify options
   - Minimum 2 options
   - Each option needs text
   - No duplicate options

3. Check duration
   - Minimum 1 hour
   - Maximum 7 days
   - Must be future time

#### Poll Not Showing
**Symptoms:**
- Poll missing from list
- Can't find created poll
- Empty poll list

**Solutions:**
1. Refresh page
   ```javascript
   // Press F5 or
   window.location.reload()
   ```

2. Check local storage
   - Clear site data
   - Reload application
   - Login again

3. Verify poll status
   - Check if expired
   - Confirm creation
   - Check active status

### Voting Problems

#### Can't Vote
**Symptoms:**
- Vote button unresponsive
- "Error casting vote" message
- No confirmation after voting

**Solutions:**
1. Check login status
   - Must be logged in
   - Try logging out and back in
   - Clear session and retry

2. Verify poll status
   - Poll must be active
   - Check end time
   - Verify not already voted

3. Check browser compatibility
   - Use supported browser
   - Update to latest version
   - Enable JavaScript

#### Results Not Showing
**Symptoms:**
- Blank results
- Loading indefinitely
- Incorrect percentages

**Solutions:**
1. Refresh data
   - Reload page
   - Clear cache
   - Check connection

2. Check browser console
   - Press F12
   - Look for errors
   - Clear console and retry

3. Verify data integrity
   - Check local storage
   - Reset application data
   - Reinstall if needed

### Browser Compatibility

#### Display Issues
**Symptoms:**
- Misaligned elements
- Broken styles
- Visual glitches

**Solutions:**
1. Update browser
   - Use Chrome, Firefox, Safari, or Edge
   - Install latest updates
   - Clear cache after update

2. Check zoom level
   - Reset to 100%
   - Clear custom zoom
   - Check resolution

3. Verify CSS loading
   - Reload styles
   - Check network tab
   - Disable extensions

#### Performance Issues
**Symptoms:**
- Slow loading
- Unresponsive interface
- High CPU usage

**Solutions:**
1. Clear browser data
   ```
   1. Open browser settings
   2. Find privacy/security section
   3. Clear browsing data
   4. Select all types
   5. Clear data
   ```

2. Check system resources
   - Close other tabs
   - Free up memory
   - Update system

3. Optimize browser
   - Disable extensions
   - Update browser
   - Reset settings

### Data Recovery

#### Lost Polls
**Symptoms:**
- Missing polls
- Incomplete data
- Reset application

**Solutions:**
1. Check local storage
   ```javascript
   // In browser console
   localStorage.getItem('votingAppState')
   ```

2. Restore from backup
   - Check browser backup
   - Use demo data
   - Contact support

3. Reset application
   - Clear all data
   - Reinstall
   - Start fresh

#### Account Recovery
**Symptoms:**
- Can't access account
- Lost credentials
- Profile issues

**Solutions:**
1. Reset local data
   - Clear site data
   - Remove cookies
   - Reset local storage

2. Create new account
   - Use different email
   - Set new password
   - Transfer polls if possible

3. Use demo account
   - Try demo credentials
   - Test functionality
   - Create new account after

## Prevention Tips

### Regular Maintenance
1. Clear cache periodically
2. Update browser regularly
3. Check for app updates
4. Backup important polls
5. Keep credentials secure

### Best Practices
1. Use modern browser
2. Enable cookies
3. Maintain good connection
4. Log out when done
5. Don't share credentials

### When to Seek Help
1. Persistent errors
2. Data loss
3. Security concerns
4. Feature requests
5. Bug reports

## Support Resources
- Check [README.md](README.md) for basic setup
- Visit [GUIDE.md](GUIDE.md) for usage instructions
- Submit issues on GitHub
- Contact maintainers
- Join community discussions
