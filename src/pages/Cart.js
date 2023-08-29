import React from "react";
import Navbar from "../common/Navbar";
import FooterBottom from "../common/FooterBottom";
import "./Cart.css";
function Cart() {
  return (
    <div>
      <Navbar />
      <div id="shoppingCart">
        <div className="container mb-4">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-sm table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Picture </th>
                      <th scope="col">Product</th>

                      <th scope="col" className="text-right">
                        Price
                      </th>
                      <th scope="col" className="text-right">
                        Subtotal
                      </th>
                      <th className="text-right">Delete</th>
                    </tr>
                  </thead>
                  <tbody
                    className="cart-table"
                    id="cart-table-products"
                  ></tbody>
                </table>
                <tr>
                  <strong>TOTAL PRICE: </strong>
                  <td className="text-right">
                    <strong id="totalPrice">Euro</strong>
                  </td>
                </tr>
              </div>
            </div>
            <div className="col mb-2">
              <div className="row">
                <div className="col-sm-12  col-md-6 text-right">
                  <button className="btn btn-lg btn-block btn-success text-uppercase">
                    <a href="product.html">Continue shopping</a>
                  </button>
                </div>
                <div className="col-sm-12 col-md-6 text-right">
                  <button className="btn btn-lg btn-block btn-success text-uppercase">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}

export default Cart;
