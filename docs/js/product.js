document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    fetch('/docs/products/products_list.json')
        .then(response => response.json())
        .then(data => {
            const product = data.products.find(p => p.id == productId);
            if (product) {
                const productDetailsContainer = document.getElementById('product-details');
                productDetailsContainer.innerHTML = `
                    <div class="product-card">
                        <img src="${product.img}" alt="${product.title}">
                        <div class="details">
                            <h2>${product.title}</h2>
                            <p class="price" id="product-price">R$${product.price}</p>
                        </div>
                    </div>
                `;

                const buyButton = document.getElementById('buy-button');
                buyButton.addEventListener('click', () => {
                    const quantity = document.getElementById('quantity').value;
                    addToCart(product, quantity);
                });
            } else {
                console.error('Produto não encontrado');
            }
        })
        .catch(error => console.error('Erro ao carregar os produtos:', error));

    updateCartCount();

    function addToCart(product, quantity) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += parseInt(quantity, 10);
        } else {
            cart.push({ ...product, quantity: parseInt(quantity, 10) });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }

    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
        document.getElementById('cart-count').innerText = cartCount;
    }
});
