document.addEventListener("DOMContentLoaded", () => {
    // Product Click Redirect to Details
    const productCards = document.querySelectorAll(".product-card");
    productCards.forEach((card) => {
        card.addEventListener("click", (e) => {
            // Prevent trigger if click was on ADD button
            if (!e.target.classList.contains("add-btn")) {
                window.location.href = "product.html";
            }
        });
    });

    // Add to Cart Button Logic
    const addBtns = document.querySelectorAll(".add-btn");
    addBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            btn.textContent = "ADDED";
            btn.style.backgroundColor = "var(--primary-green)";
            btn.style.color = "#FFFFFF";

            setTimeout(() => {
                btn.textContent = "ADD";
                btn.style.backgroundColor = "var(--primary-light)";
                btn.style.color = "var(--primary-green)";
            }, 1500);
        });
    });
});
