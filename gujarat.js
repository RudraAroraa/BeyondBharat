document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('products');
    const searchBar = document.getElementById('search-bar');

    // Fetch and display products
    async function fetchProducts() {
        try {
            const response = await fetch('http://localhost:5000/products');
            const products = await response.json();
            displayProducts(products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    function displayProducts(products) {
        productList.innerHTML = ''; // Clear current products
        products.forEach(product => {
            const productItem = document.createElement('li');
            productItem.classList.add('product-item'); // Add class for styling

            // Ensure each product item includes a 'Shop Now' button
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <img src="${product.imageUrl}" alt="${product.name}" style="max-width:100px;">
                <button class="shop-now-btn" data-id="${product._id}">Shop Now</button>
            `;
            
            productList.appendChild(productItem);
        });

        // Attach event listeners to all 'Shop Now' buttons after products are added to DOM
        document.querySelectorAll('.shop-now-btn').forEach(button => {
            button.addEventListener('click', () => shopNow(button.dataset.id));
        });
    }

    function shopNow(productId) {
        // Function to handle the "Shop Now" action, e.g., redirecting to a product page or adding to a cart
        alert(`Shopping for product ID: ${productId}`);
    }

    // Fetch products on page load
    fetchProducts();

    // Search functionality
    searchBar.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        const filteredProducts = Array.from(productList.children).filter(productItem => 
            productItem.textContent.toLowerCase().includes(query)
        );
        productList.innerHTML = ''; // Clear list
        filteredProducts.forEach(item => productList.appendChild(item));
    });
});
