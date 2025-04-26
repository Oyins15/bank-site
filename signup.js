document.addEventListener('DOMContentLoaded', function() {
    // Password visibility toggle
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.innerHTML = type === 'password' 
                ? '<i class="fas fa-eye"></i>' 
                : '<i class="fas fa-eye-slash"></i>';
        });
    }

    // Form validation
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Password match validation
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // Check password strength (basic example)
            if (password.length < 8) {
                alert('Password must be at least 8 characters');
                return;
            }
            
            // Form data collection
            const formData = {
                name: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                password: password
            };
            
            console.log('Form data:', formData);
            alert('Account created successfully! Redirecting to login...');
            
            // In a real app, you would:
            // 1. Send data to backend
            // 2. Redirect on success:
            // window.location.href = 'login.html';
        });
    }
});