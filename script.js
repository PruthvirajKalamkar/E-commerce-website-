// Cart functionality
const cartCount = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
let cartItems = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartItems++;
        cartCount.textContent = cartItems;
        alert('Item added to cart!');
    });
});

// Toggle navigation on smaller screens
const toggleButton = document.querySelector('.toggle-button');
const navigation = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    navigation.classList.toggle('active');
});