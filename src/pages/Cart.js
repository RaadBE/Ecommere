import React from "react";
import Navbar from "../common/Navbar";
// import FooterBottom from "../common/FooterBottom";
import logo from "../img/facebook.png";
import "./Cart.css";
function Cart() {
  return (
    <div>
      <Navbar />
      <div class="container">
        <h1>Shopping Cart</h1>
        <div className="shopping-cart">
          <div className="column-labels">
            <label className="product-image">Image</label>
            <label className="product-details">Product</label>
            <label className="product-price">Price</label>
            <label className="product-quantity">Quantity</label>
            <label className="product-removal">Remove</label>
            <label className="product-line-price">Total</label>
          </div>
          <div className="product">
            <div className="product-image">
              <img src={logo} alt="Leather" className="aboutImage" />
            </div>
            <div className="product-details">
              <div className="product-title">jacket</div>
              <p className="product-description">jacket - black leather</p>
            </div>
            <div className="product-price">12.99</div>
            <div className="product-quantity">
              <input type="number" value="" min="" />
            </div>
            <div className="product-removal">
              <button className="remove-product">Remove</button>
            </div>
            <div className="product-line-price">25.98</div>
          </div>
          <div className="product">
            <div className="product-image">
              <img src={logo} alt="Leather" className="aboutImage" />{" "}
            </div>
            <div className="product-details">
              <div className="product-title">Red Skirt</div>
              <p className="product-description">skirt-red leather</p>
            </div>
            <div className="product-price">45.99</div>
            <div className="product-quantity">
              <input type="number" value="1" min="1" />
            </div>
            <div className="product-removal">
              <button className="remove-product">Remove</button>
            </div>
            <div className="product-line-price">45.99</div>
          </div>

          <div className="totals">
            <div className="totals-item">
              <label>Subtotal</label>
              <div className="totals-value" id="cart-subtotal">
                71.97
              </div>
            </div>
            <div className="totals-item">
              <label>Tax (5%)</label>
              <div className="totals-value" id="cart-tax">
                3.60
              </div>
            </div>
            <div className="totals-item">
              <label>Shipping</label>
              <div className="totals-value" id="cart-shipping">
                15.00
              </div>
            </div>
            <div className="totals-item totals-item-total">
              <label>Grand Total</label>
              <div className="totals-value" id="cart-total">
                90.57
              </div>
            </div>
          </div>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
