import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  const scrollToProducts = () => {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      <Header />

      <main className="content">
        {/* Hero Section */}
        <section className="hero">
          <h1>New Collections</h1>
          <p>
            Discover our latest fashion arrivals. Stylish, trendy, and perfect for every occasion.
          </p>
          <button className="shop-btn" onClick={scrollToProducts}>
            Shop Now
          </button>
        </section>

        {/* Products Section */}
        <section id="products" className="products">
          {/* Jeans/Denim section*/}
          <div className="product">
            <img src="/jeans.jpg" alt="Denim" />
            <h3>Denim</h3>
            <p>Kes 1000</p>
          </div>

          <div className="product">
            <img src="/jeans1.jpg" alt="Denim" />
            <h3>Denim</h3>
            <p>Kes 1000</p>
          </div>

          <div className="product">
            <img src="/jeans2.jpg" alt="Denim" />
            <h3>Denim</h3>
            <p>Kes 1000</p>
          </div>

          <div className="product">
            <img src="/jeans3.jpg" alt="Denim" />
            <h3>Denim</h3>
            <p>Kes 1000</p>
          </div>

          <div className="product">
            <img src="/jeans4.jpg" alt="Denim" />
            <h3>Denim</h3>
            <p>Kes 1000</p>
          </div>
        </section>

        {/* Shoes Section */}
        <section className="products">
          <div className="product">
            <img src="/shoes.jpg" alt="Official" />
            <h3>Official</h3>
            <p>Kes 2500</p>
          </div>

          <div className="product">
            <img src="/shoes1.jpg" alt="Loafers" />
            <h3>Loafers</h3>
            <p>Kes 3000</p>
          </div>

          <div className="product">
            <img src="/shoes2.jpg" alt="Sneakers" />
            <h3>Sneakers</h3>
            <p>Kes 3500</p>
          </div>

          <div className="product">
            <img src="/shoes3.jpg" alt="Sandals" />
            <h3>Sandals</h3>
            <p>Kes 1500</p>
          </div>

          <div className="product">
            <img src="/shoes4.jpg" alt="Sneakers" />
            <h3>Sneakers</h3>
            <p>Kes 1500</p>
          </div>
        </section>
      </main>

      <Footer />
    
    </div>
  );
}

export default App;
