document.addEventListener("DOMContentLoaded", function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const itemTotal = (item.price * item.quantity).toFixed(2);
            total += parseFloat(itemTotal);
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.img}" alt="${item.title}">
                <div class="details">
                    <h2>${item.title}</h2>
                    <p>Quantidade: ${item.quantity}</p>
                    <p>Preço: R$${item.price}</p>
                    <p>Total: R$${itemTotal}</p>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
        cartTotalElement.innerText = total.toFixed(2);
    }

    renderCart();
    updateCartCount();

    function updateCartCount() {
        const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
        document.getElementById('cart-count').innerText = cartCount;
    }

    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', () => {
        alert('Compra finalizada!');
        localStorage.removeItem('cart');
        window.location.href = '../src/index.html';
    });
});
