import React, { useState, useEffect } from "react";
import ProductContext from "./ProductContext";

const ProductProvider = ({ children }) => {
  // Initialize selectedProduct from localStorage
  const [selectedProduct, setSelectedProduct] = useState(() => {
    try {
      const savedProduct = localStorage.getItem("selectedProduct");
      return savedProduct ? JSON.parse(savedProduct) : null;
    } catch (error) {
      console.error("Error parsing selectedProduct from local storage", error);
      return null;
    }
  });

  // Initialize cart from localStorage
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error parsing cart from local storage", error);
      return [];
    }
  });

  useEffect(() => {
    if (selectedProduct) {
      localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, selectedProduct]);

  const addToCart = (product) => {
    setCart((prevCart) =>
      Array.isArray(prevCart) ? [...prevCart, product] : [product]
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product._id !== productId)
    );
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((product) => {
      if (product._id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setCart(updatedCart);
  };

  return (
    <ProductContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
