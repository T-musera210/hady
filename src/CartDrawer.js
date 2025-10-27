// CartDrawer.js
import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./CartDrawer.css";

function CartDrawer({ isOpen, onClose }) {
  const { cartItems, addToCart, decreaseQty, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>X</button>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <span>{item.title}</span>
            <span>KES {item.price}</span>

            <div className="qty-controls">
              <button onClick={() => decreaseQty(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>

            <span>KES {item.price * item.quantity}</span>
            <button className="remove-btn" onClick={() => removeFromCart(item)}>x</button>
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <>
          <h3>Total: KES {total}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}

export default CartDrawer;
