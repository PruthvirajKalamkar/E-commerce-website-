// Sample product data (replace with your actual product data)
const products = [
    { id: 1, name: 'Product 1', price: 10.00, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 15.00, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 20.00, image: 'product3.jpg' }
];

// Function to update cart and display items
function updateCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let subtotal = 0;

    cartItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}" width="50"> ${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button class="remove-btn" data-id="${item.id}">Remove</button></td>
        `;
        cartItemsContainer.appendChild(row);

        subtotal += item.price * item.quantity;
    });

    // Calculate and display totals
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping'); 
    const taxElement = document.getElementById('tax'); 
    const totalElement = document.getElementById('total');

    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    // Calculate shipping, tax based on your logic
    shippingElement.textContent = `$${0.00}`; // Replace with actual shipping calculation
    taxElement.textContent = `$${(subtotal * 0.08).toFixed(2)}`; // Example: 8% tax
    totalElement.textContent = `$${(subtotal + 0.00 + (subtotal * 0.08)).toFixed(2)}`; 
}

// Add to Cart functionality (from product page)
// Example:
// addToCartButton.addEventListener('click', () => {
//     const product = { 
//         id: productId, 
//         name: productName, 
//         price: productPrice, 
//         image: productImage, 
//         quantity: 1 
//     };

//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.push(product);
//     localStorage.setItem('cart', JSON.stringify(cart));

//     updateCart(); 
// });

// Remove from Cart functionality
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-btn')) {
        const itemId = event.target.getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== itemId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
});

// Update cart on page load
updateCart();