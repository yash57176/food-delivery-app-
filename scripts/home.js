document.addEventListener('DOMContentLoaded', () => {
  // Cart State Management
  let cart = [];
  
  const addBtns = document.querySelectorAll('.add-btn');
  const floatingCart = document.getElementById('floatingCart');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');

  // Add Item to Cart Event Listener
  addBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      const name = e.target.dataset.name;
      const price = parseFloat(e.target.dataset.price);

      // Check if product is already in cart
      const existingItem = cart.find(item => item.id === id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        cart.push({ id, name, price, qty: 1 });
      }

      updateCartUI();
    });
  });

  // Update Cart Bar UI
  function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    if (totalItems > 0) {
      floatingCart.classList.remove('hidden');
      cartCount.textContent = `${totalItems} ${totalItems === 1 ? 'ITEM' : 'ITEMS'}`;
      cartTotal.textContent = `₹${totalPrice}`;
    } else {
      floatingCart.classList.add('hidden');
    }
  }

  // Banner Carousel Logic
  const slider = document.getElementById('bannerSlider');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  function switchSlide() {
    currentSlide = (currentSlide + 1) % dots.length;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlide);
    });
  }

  // Auto-slide banner every 4 seconds
  setInterval(switchSlide, 4000);
});
