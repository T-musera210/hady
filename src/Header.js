// Header.js
import React, { useContext } from "react";
import "./Header.css";
import { CartContext } from "./CartContext";

function Header({ openCart }) {
  const { cartItems } = useContext(CartContext);

  // Calculate total cart quantity
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="navbar">
        <div className="logo">HADYCOLLECTIONS</div>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="#products">Shop</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
            <li className="cart-icon" onClick={openCart}>
              🛒 {totalItems > 0 && <span>({totalItems})</span>}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
