// Product.js
import React, { useContext } from "react";
import "./Product.css";
import { CartContext, CartProvider } from "./CartContext";


function Product({ products }) {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="products-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <h3>{product.title}</h3>
          <p>KES {product.price}</p>
          <button className="add-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </section>
  );
}

export default Product;
