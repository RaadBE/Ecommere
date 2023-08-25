import React from "react";
import "./Navbar.css";
import logo from "../images/logo.png"; // Import the logo image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Collection</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Cart</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
