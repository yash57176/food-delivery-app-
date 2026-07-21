document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById('password');
  const togglePasswordBtn = document.getElementById('togglePassword');
  const eyeIcon = document.getElementById('eyeIcon');
  const loginForm = document.getElementById('loginForm');

  // Toggle Password Visibility
  if (togglePasswordBtn && passwordInput && eyeIcon) {
    togglePasswordBtn.addEventListener('click', () => {
      const isPassword = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
      eyeIcon.textContent = isPassword ? 'visibility_off' : 'visibility';
    });
  }

  // Basic Form Submission Handler
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = document.getElementById('email').value.trim();
      const password = passwordInput.value.trim();

      if (!email || !password) {
        alert('Please fill in all required fields.');
        return;
      }

      // Action upon successful form validation
      console.log('Logging in with:', { email });
    });
  }
});
