import React from 'react';
import './Product.css';

function Product({ products }) {
  return (
    <section className="products">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-img" />
          <h3>{product.title}</h3>
          <p>KES {product.price}</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      ))}
    </section>
  );
}

export default Product;
