// Cart functionality
const cartCount = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
let cartItems = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.id === parseInt(productId));

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            const product = { 
                id: parseInt(productId), 
                quantity: 1 
            };
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        cartItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = cartItems;
    });
});

// Navigation toggle
const toggleButton = document.querySelector('.toggle-button');
const navigation = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

// Image Slider Functionality
const sliders = document.querySelectorAll('.image-slider');

sliders.forEach(slider => {
    let currentIndex = 0;
    const images = slider.querySelectorAll('img');

    function showImage() {
        images.forEach((img, index) => {
            img.style.opacity = 0;
        });

        images[currentIndex].style.opacity = 1;

        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(showImage, 3000); // Change image every 3 seconds
});