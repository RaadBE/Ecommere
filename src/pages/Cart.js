import React, { useContext } from "react";
import ProductContext from "../proudctpage/ProductContext.js";
import FooterBottom from "../common/FooterBottom";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(ProductContext);

  // Function to calculate the subtotal of the cart
  const calculateSubtotal = () => {
    return cart.reduce((total, product) => {
      return (
        total + parseFloat(product.price.$numberDecimal) * product.quantity
      );
    }, 0);
  };

  // Shipping fee
  const shippingFee = 15.0; // Change this to your shipping fee

  // Calculate the total (subtotal + shipping)
  const total = calculateSubtotal() + shippingFee;

  const handleRemove = (productId) => {
    console.log("Removing product with ID:", productId);
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="emptyDiv">Your cart is empty.</div>
      ) : (
        cart.map((product) => (
          <div className="product" key={product._id}>
            <div className="product-image">
              <img
                src={product.imageURL}
                alt={product.name}
                className="aboutImage"
              />
            </div>
            <div className="product-details">
              <div className="product-title">{product.name}</div>
              <p className="product-description">{product.description}</p>
            </div>
            <div className="product-price">
              {product.price.$numberDecimal} EUR
            </div>
            <div className="product-quantity">
              <input
                type="number"
                value={product.quantity}
                onChange={(e) =>
                  handleQuantityChange(
                    product._id,
                    parseInt(e.target.value, 10)
                  )
                }
                min="1"
                max="10"
              />
            </div>
            <div className="product-removal">
              <button
                className="remove-product"
                onClick={() => handleRemove(product._id)}
              >
                Remove
              </button>
            </div>
            <div className="product-line-price">
              {(
                parseFloat(product.price.$numberDecimal) * product.quantity
              ).toFixed(2)}{" "}
              EUR
            </div>
          </div>
        ))
      )}
      <div className="totals">
        <div className="totals-item">
          <label>Subtotal</label>
          <div className="totals-value" id="cart-subtotal">
            {calculateSubtotal().toFixed(2)} EUR
          </div>
        </div>
        <div className="totals-item">
          <label>Shipping</label>
          <div className="totals-value" id="cart-shipping">
            {shippingFee.toFixed(2)} EUR
          </div>
        </div>
        <div className="totals-item totals-item-">
          <label>Grand Total</label>
          <div className="totals-value" id="cart-total">
            {total.toFixed(2)} EUR
          </div>
          <div className="space-y-4 text-center">
            <a href="#" className="checkout">
              Checkout
            </a>

            <a
              href="/collection"
              className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
            >
              Continue shopping
            </a>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}

export default Cart;
