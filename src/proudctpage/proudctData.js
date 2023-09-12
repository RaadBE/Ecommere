import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import ProductContext from './/ProductContext';
import './proudctData.css'

function ProductDetail() {
    const { selectedProduct, addToCart } = useContext(ProductContext);


    if (!selectedProduct) return <div>No product selected</div>

    return (
                <div>
        <img className='img-dit' src={`/images/${selectedProduct.image.name}`} />
            <p>{selectedProduct.name}</p>
            <button onClick={() => addToCart(selectedProduct)}>
                Add to cart
            </button>   
               
            <Link>
            to={'/cart'}
            <p>View Cart </p>
            </Link>  
        </div>
    )
}


export default ProductDetail;
