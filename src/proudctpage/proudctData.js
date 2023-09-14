import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ProductContext from ".//ProductContext";
import "./proudctData.css";

function ProductDetail() {
  const { selectedProduct, addToCart } = useContext(ProductContext);

  if (!selectedProduct) return <div>No product selected</div>;
  const imageUrl = selectedProduct.imageURL;
  return (
    <div>
      {/* Use the imageUrl as the src attribute for the image */}
      <img className="img-dit" src={imageUrl} alt={selectedProduct.name} />
      <p>{selectedProduct.name}</p>
      <button onClick={() => addToCart(selectedProduct)}>Add to cart</button>

      <Link to="/cart">
        <p>View Cart</p>
      </Link>
    </div>
  );
}

export default ProductDetail;
