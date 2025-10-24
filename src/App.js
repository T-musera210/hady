// App.js
import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Product from './Product'; // ✅ Import the Product component

function App() {
  // ✅ Sample product data - we will use this for now
  const jeansProducts = [
    { id: 1, title: "Blue Denim Jeans", price: 1000, image: "/jeans.jpg" },
    { id: 2, title: "Slim Fit Jeans", price: 1200, image: "/jeans1.jpg" },
    { id: 3, title: "Black Diesel Jeans", price: 1500, image: "/jeans2.jpg" },
    { id: 4, title: "Black Diesel Jeans", price: 1500, image: "/jeans3.jpg" },
    { id: 5, title: "Black Diesel Jeans", price: 1500, image: "/jeans4.jpg" }
    
  ];

  const shoesProducts = [
    { id: 4, title: "White Sneakers", price: 2500, image: "/shoes.jpg" },
    { id: 5, title: "Brown Loafers", price: 3000, image: "/shoes1.jpg" },
    { id: 6, title: "Black Official Shoes", price: 2800, image: "/shoes2.jpg" },
    { id: 7, title: "Black Official Shoes", price: 2800, image: "/shoes3.jpg" },
    { id: 8, title: "Black Official Shoes", price: 2800, image: "/shoes4.jpg" }
  ];

  // ✅ Smooth scrolling to products section
  const scrollToProducts = () => {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      {/* ✅ Header stays at the top */}
      <Header />

      <main className="content">
        {/* ✅ Hero / Intro section */}
        <section className="hero">
          <h1>New Collections</h1>
          <p>Discover our latest fashion arrivals. Stylish, trendy, and perfect for every occasion.</p>
          <button className="shop-btn" onClick={scrollToProducts}>Shop Now</button>
        </section>

        {/* ✅ Products Section */}
        <section id="products">
          <h2 className="category-title">Jeans Collection</h2>
          {/* ✅ Pass jeans data to Product component */}
          <Product products={jeansProducts} />

          <h2 className="category-title">Shoes Collection</h2>
          {/* ✅ Pass shoes data to Product component */}
          <Product products={shoesProducts} />
        </section>
      </main>

      {/* ✅ Footer stays at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
