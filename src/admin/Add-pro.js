import React, { useState } from 'react';
function AddProduct() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4xIiwiZW1haWwiOiJhZG1pbjFAdGVzdC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTQ3NzY0NzEsImV4cCI6MTY5NTAzNTY3MX0.4-wajgInu1rO5EjdbvqHAHsxErCOfnOGcDI3ERXfOKs'
    const [productData, setProductData] = useState({
        name: '',
        price: '',
        description: ''
    });
    const handleChange = (e) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://ashmademoiselle-8623d0938879.herokuapp.com/products/add-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(productData)
            });

            if (response.status === 201) {
                alert('Product added successfully!');
                setProductData({
                    reference: '',
                    name: '',
                    description: '',
                    price:'',
                    imageURL:''
                });
            } else {
                const data = await response.json();
                alert('Error adding product: ' + data.error);
            }
        } catch (error) {
            console.error('There was an error adding the product:', error);
        }
    };

    return (
        <div>
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={productData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Imgurl:</label>
                    <input
                        type="text"
                        name="Imgurl"
                        value={productData.imageURL}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="text"
                        name="price"
                        value={productData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={productData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>reference:</label>
                    <input
                        type= 'text'
                        name="reference"
                        value={productData.reference}
                        onChange={handleChange}
                        required
                    ></input>
                </div>
                <div>
                    <button type="submit">Add Product</button>
                </div>
            </form>
        </div>
    );
}
export default AddProduct;
