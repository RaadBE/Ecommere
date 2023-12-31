import React from "react";
import "./Navbar.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (

    <nav className="desktop-navbar">

      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/collection">Collection</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li className='text-hover'>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
