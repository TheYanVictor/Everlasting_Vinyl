document.addEventListener("DOMContentLoaded", function() {
    fetch('../products/products_list.json')
        .then(response => response.json())
        .then(data => {
            const productCardsContainer = document.getElementById('product-cards');
            data.products.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <a href="../products/product.html?id=${product.id}">
                        <img src="${product.img}" alt="${product.title}">
                        <div class="details">
                            <h2>${product.title}</h2>
                            <p class="price">$${product.price}</p>
                        </div>
                    </a>
                `;
                productCardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao carregar os produtos:', error));

    updateCartCount();

    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
        document.getElementById('cart-count').innerText = cartCount;
    }
});
