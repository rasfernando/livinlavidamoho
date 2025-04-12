document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const typeFilter = document.getElementById('typeFilter');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            filterProducts();
        });
    });

    typeFilter.addEventListener('change', filterProducts);

    // Initial render of products
    renderProducts();
});

function renderProducts() {
    const container = document.getElementById('productsContainer');
    container.innerHTML = products.map(product => createProductCard(product)).join('');
    
    filterProducts();
}

function filterProducts() {
    const selectedCategory = document.querySelector('.category-btn.active').dataset.category;
    const selectedType = document.getElementById('typeFilter').value;
    
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productCategory = product.dataset.category;
        const productType = product.dataset.type;
        
        const matchesCategory = productCategory === 'unisex' || productCategory === selectedCategory;
        const matchesType = !selectedType || productType === selectedType;
        
        if (matchesCategory && matchesType) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Make sure to add data-category attribute to your product cards
function createProductCard(product) {
    return `
        <div class="product-card" data-category="${product.category}" data-type="${product.type}">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
} 