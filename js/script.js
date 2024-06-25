document.addEventListener("DOMContentLoaded", function() {
    fetch('/products/products_list.json')
        .then(response => response.json())
        .then(data => {
            const productCardsContainer = document.getElementById('product-cards');
            data.products.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <img src="${product.img}" alt="${product.title}">
                    <div class="details">
                        <h2>${product.title}</h2>
                        <p class="price">$${product.price}</p>
                    </div>
                `;
                productCardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao carregar os produtos:', error));
});
