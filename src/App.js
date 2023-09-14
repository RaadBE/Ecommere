import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./common/Navbar.js";
import Midpart from "./homepage/midpart.js";
import LoaderComp from "./homepage/loader";
import Show from "./homepage/show.js";
import Change from "./homepage/imgchange.js";
import Footer from "./common/footer.js";
import Proudct from "./proudctpage/product.js";
<<<<<<< HEAD
import ProductProvider from "./proudctpage/ProductProvider.js";

import ProductDetail from "./proudctpage/proudctData.js";
=======
import ProductProvider from "./proudctpage/ProductProvider";
import ProductDetail from "./pages/testoana.js";
import Minin from "./proudctpage/miniCart.js";
import CartShow from "./proudctpage/cartShow.js";
import Testr from "./proudctpage/test.js";
>>>>>>> 1514d6d1561f814d96f9a2334a4d7dc0d3186929
import "./App.css";
import "./common/navbar.css";
import "./common/footer.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async task, e.g., data fetching
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loader after 3 seconds
    }, 3000);
    return () => clearTimeout(timer); // Cleanup the timer if the component is unmounted
  }, []);

  if (isLoading) {
    return <LoaderComp />;
  }

  return (
    <ProductProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Midpart />
                  <Show />
                  <Footer />
                  <Minin />
                </>
              }
            />
            <Route path="/Collection" element={<CartShow />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            {/* <Route path="/cart" element={<Minin />} /> */}
            <Route path="/test" element={<Testr />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;
