import React, { useState, useEffect } from 'react';
import ProductContext from './ProductContext';

const ProductProvider = ({ children }) => {
    // Initializeof selectedProduct from localStorage
    const [selectedProduct, setSelectedProduct] = useState(() => {
      try {
          const savedProduct = localStorage.getItem('selectedProduct');
          return savedProduct ? JSON.parse(savedProduct) : null;
      } catch (error) {
          console.error("Error parsing selectedProduct from local storage", error);
          return null;
      }
    });
    const [cart, setCart] = useState(() => {
      try {
          const savedCart = localStorage.getItem('cart');
          return savedCart ? JSON.parse(savedCart) : [];
      } catch (error) {
          console.error("Error parsing cart from local storage", error);
          return [];
      }
    });
    
    useEffect(() => {
        
        if (selectedProduct) {
            localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart, selectedProduct]); 

    const addToCart = (product) => {
        setCart(prevCart => Array.isArray(prevCart) ? [...prevCart, product] : [product]);
        console.log('the products are :', product.reference);
    };  


const removeFromCart = (productToRemove) => {
    setCart(prevCart => prevCart.filter(product => product._id !== productToRemove._id));
};


    return (
        <ProductContext.Provider 
            value={{ 
                selectedProduct, 
                setSelectedProduct,
                cart,
                addToCart,
                removeFromCart
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;
