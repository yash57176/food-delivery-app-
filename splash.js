document.addEventListener("DOMContentLoaded", () => {
    // Splash screen redirection duration (2 seconds = 2000 ms)
    const REDIRECT_DELAY = 2000;

    setTimeout(() => {
        // Smooth transition to login page
        window.location.href = "login.html";
    }, REDIRECT_DELAY);
});
