import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./common/Navbar.js";
import Midpart from "./homepage/midpart.js";
import LoaderComp from "./homepage/loader";
import Show from "./homepage/show.js";
import Footer from "./common/footer.js";
import ProductProvider from "./proudctpage/ProductProvider";
import Fatline from "./common/fatline";
import CartShow from "./proudctpage/cartShow.js";
import Testr from "./proudctpage/test.js";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Testoana from "./pages/testoana";
import Login from "./admin/login";
import AdminRoutes from "./admin/routes";
import AdminLayout from "./admin/AdminLayout";
import PaymentSuccess from "./pages/PaymentSuccess";
import "./App.css";
import "./common/navbar.css";
import "./common/footer.css";
import "./pages/PaymentSuccess.css";
import "bootstrap/dist/css/bootstrap.css";
import PrivateRoute from "./admin/PrivateRoute";
import PhoneNav from "./common/mobileNav";
import "./common/phones.css";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoaderComp />;
  }

  return (
    <ProductProvider>
      <Router>
        <div className="App">
          <PhoneNav />

          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Midpart />
                  <Show />
                </>
              }
            />
            <Route path="/Collection" element={<CartShow />} />
            <Route path="/product/:id" element={<Testoana />} />
            <Route path="/test" element={<Testr />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/tes1" element={<Testoana />} />
            <Route path="/checkout" element={<PaymentSuccess />} />
            <Route path="/admin/*" element={<PrivateRoute />}></Route>
            <Route path="/login" element={<Login />} />
          </Routes>
          <Fatline />
          <Footer />
        </div>
      </Router>
    </ProductProvider>
  );
}
export default App;
