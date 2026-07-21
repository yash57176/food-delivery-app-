document.addEventListener('DOMContentLoaded', () => {
  const REDIRECT_DELAY = 2000; // 2 seconds delay
  const FADE_DURATION = 400;   // Matches CSS transition time

  setTimeout(() => {
    // Add smooth fade-out effect to body
    document.body.classList.add('fade-out');

    // Redirect to home/dashboard page after fade completes
    setTimeout(() => {
      window.location.href = 'home.html';
    }, FADE_DURATION);

  }, REDIRECT_DELAY - FADE_DURATION);
});
