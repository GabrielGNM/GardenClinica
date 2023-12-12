function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Simulated authentication (replace with actual authentication logic)
    if (username === 'user123' && password === 'password123') {
        // Redirect to a success page or perform other actions
        alert('Login successful!');
    } else {
        errorMessage.textContent = 'Invalid credentials. Please try again.';
    }
}

function registerUser() {
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;
    var registerMessage = document.getElementById('register-message');

    // Simulated registration logic (replace with actual registration logic)
    // For simplicity, we'll just display a message here
    registerMessage.textContent = 'User registered successfully!';
}