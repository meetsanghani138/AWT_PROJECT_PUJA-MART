// import Navbar from "../components/Navbar";

// function Home() {
//   return (
//     <>
//       <Navbar />
//       <h1>Welcome to Puja Mart</h1>
//     </>
//   );
// }

// export default Home;


import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

function Home() {
  return (
    <div className="home">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">🛕 PujaMart</div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>


      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Pure Devotion. Delivered to Your Door.</h1>
          <p>
            Explore premium puja essentials, idols, incense, diyas,
            and complete pooja kits for every occasion.
          </p>
          <Link to="/shop" className="btn">
            Shop Now
          </Link>
        </div>
      </section>


      {/* CATEGORIES */}
      <section className="categories">
        <h2>Shop By Category</h2>

        <div className="category-grid">
          <div className="category-card">🪔 Diyas</div>
          <div className="category-card">🕉️ Idols</div>
          <div className="category-card">🌸 Flowers</div>
          <div className="category-card">📿 Mala & Beads</div>
        </div>
      </section>


      {/* FEATURED PRODUCTS */}
      <section className="featured">
        <h2>Featured Products</h2>

        <div className="product-grid">
          <div className="product-card">
            <img
              src="https://via.placeholder.com/200"
              alt="Brass Diya"
            />
            <h3>Brass Diya</h3>
            <p>₹299</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img
              src="https://via.placeholder.com/200"
              alt="Ganesha Idol"
            />
            <h3>Ganesha Idol</h3>
            <p>₹899</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img
              src="https://via.placeholder.com/200"
              alt="Agarbatti Pack"
            />
            <h3>Agarbatti Pack</h3>
            <p>₹149</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 PujaMart. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default Home;