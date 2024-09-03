document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('product-form');

    productForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const newProduct = {
            name: document.getElementById('name').value,
            description: document.getElementById('description').value,
            price: parseFloat(document.getElementById('price').value),
            imageUrl: document.getElementById('imageUrl').value
        };

        try {
            const response = await fetch('http://localhost:5000/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProduct)
            });

            if (response.ok) {
                alert('Product added successfully!');
                productForm.reset();
            } else {
                alert('Failed to add product');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            alert('An error occurred while adding the product');
        }
    });
});
