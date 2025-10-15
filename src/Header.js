import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="navbar">
        <div className="logo"><h2>HADYCOLLECTIONS</h2></div>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            {/* <li><a href="/shop">Shop</a></li> */}
            <li><a href="products">Shop</a></li>

            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/cart">Cart 🛒</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
