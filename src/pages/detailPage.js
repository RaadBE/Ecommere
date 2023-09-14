import { useContext } from "react";
import { Link } from "react-router-dom";
import React from "react";
import ProductContext from "../proudctpage/ProductContext";
import "./detailPage.css";

function DetailPage({ product }) {
  const { selectedProduct, addToCart } = useContext(ProductContext);
  return (
    <div>
      <div className="card" id="detailsCard">
        <div className="card__body">
          <div className="half">
            <div className="featured_text">
              <p className="sub">{selectedProduct.name}</p>
              <p className="product-price">
                {selectedProduct.price.$numberDecimal} EUR
              </p>
            </div>
            <div className="image">
              <img src={selectedProduct.imageURL} alt="product" />
            </div>
          </div>
          <div className="half">
            <div className="description">
              <p className="card-text">{selectedProduct.description}</p>
            </div>
            <div className="card__footer">
              <div className="action"></div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => addToCart(selectedProduct)}>Add to cart</button>

      <Link to="/cart">
        <p>View Cart</p>
      </Link>
    </div>
  );
}

export default DetailPage;
