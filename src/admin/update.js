import React, { useState } from 'react';

function UpdateProduct() {
    const [productReferenceNumber, setProductReferenceNumber] = useState('');  // Renamed from productId
    const [productName, setProductName] = useState('');
    const [description, setdescription] = useState('');
    const [imageURL, setimageURL] = useState('');
    const [price, setprice] = useState('');
    const [message, setMessage] = useState('');  // To display success or error messages
    const tokenUpdate = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4xIiwiZW1haWwiOiJhZG1pbjFAdGVzdC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTQ3NzY0NzEsImV4cCI6MTY5NTAzNTY3MX0.4-wajgInu1rO5EjdbvqHAHsxErCOfnOGcDI3ERXfOKs'
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Using the Fetch API to update a product by its reference number
            const response = await fetch(`https://ashmademoiselle-8623d0938879.herokuapp.com/products/${productReferenceNumber}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenUpdate}`

                },
                body: JSON.stringify({
                    name: productName,
                    description: description,
                    imageURL: imageURL,
                    price:price
                })
            });
            if (response.status === 200) {
                setMessage('Product updated successfully!');
                console.log(response);
            } else {
                setMessage('Error updating the product.');
            }
        } catch (error) {
            setMessage('Error updating the product.');
        }
    };
    return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit={handleSubmit}>

                <input
                    placeholder="Product Reference Number"  // Updated placeholder
                    value={productReferenceNumber}
                    onChange={e => setProductReferenceNumber(e.target.value)}
                />
                <input
                    placeholder="Product name"  // Updated placeholder
                    value={productName}
                    onChange={e => setProductName(e.target.value)}
                />
                <input
                    placeholder="Product price"  // Updated placeholder
                    value={price}
                    onChange={e => setprice(e.target.value)}
                />
                <input
                    placeholder="Product DES"
                    value={description}
                    onChange={e => setdescription(e.target.value)}
                />
                <input
                    placeholder="Product IMG"
                    value={imageURL}
                    onChange={e => setimageURL(e.target.value)}
                />
                <button type="submit">Update Product</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default UpdateProduct;
