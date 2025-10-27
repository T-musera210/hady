// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Product from './Product';
import { CartProvider } from "./CartContext";
import CartDrawer from "./CartDrawer"; // ✅ Import CartDrawer

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false); // ✅ State for cart drawer

  const jeansProducts = [
    { id: 1, title: "Blue Denim Jeans", price: 1000, image: "/jeans.jpg" },
    { id: 2, title: "Slim Fit Jeans", price: 1200, image: "/jeans1.jpg" },
    { id: 3, title: "Black Diesel Jeans", price: 1500, image: "/jeans2.jpg" },
    { id: 4, title: "Dark Washed Jeans", price: 1500, image: "/jeans3.jpg" },
    { id: 5, title: "Classic Denim Jeans", price: 1500, image: "/jeans4.jpg" }
  ];

  const shoesProducts = [
    { id: 6, title: "Brown Official Shoes", price: 2500, image: "/shoes.jpg" },
    { id: 7, title: "Black Official Shoes", price: 3000, image: "/shoes1.jpg" },
    { id: 8, title: "White Sneakers", price: 2800, image: "/shoes2.jpg" },
    { id: 9, title: "Canvas Sneakers", price: 2800, image: "/shoes3.jpg" },
    { id: 10, title: "Black Sneakers", price: 2800, image: "/shoes4.jpg" }
  ];

  const scrollToProducts = () => {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <CartProvider>
      <div className="app-container">
        {/* ✅ Pass cart open function to Header */}
        <Header openCart={() => setIsCartOpen(true)} />

        <main className="content">
          <section className="hero">
            <h1>New Collections</h1>
            <p>Discover our latest fashion arrivals. Stylish, trendy, and perfect for every occasion.</p>
            <button className="shop-btn" onClick={scrollToProducts}>Shop Now</button>
          </section>

          <section id="products">
            <h2 className="category-title">Jeans Collection</h2>
            <Product products={jeansProducts} />

            <h2 className="category-title">Shoes Collection</h2>
            <Product products={shoesProducts} />
          </section>
        </main>

        <Footer />

        {/* ✅ Cart Drawer Below */}
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;
