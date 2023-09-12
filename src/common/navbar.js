import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className='logo'>
        logo
      </div>
      <ul>
        <li><NavLink exact to="/Collection" activeClassName="active">Collection</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        <li><NavLink to="/cart" className='texHover' activeClassName="active">Cart</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
