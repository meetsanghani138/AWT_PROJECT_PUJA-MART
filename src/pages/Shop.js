import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Shop.css";

function Shop() {

const festivals = [
  "Diwali Collection",
  "Navratri Puja Items",
  "Ganesh Chaturthi Special",
  "Mahashivratri Items"
];

const gods = [
  "Ganesh",
  "Shiva",
  "Lakshmi",
  "Krishna",
  "Durga"
];

const pujaKits = [
  "Satyanarayan Puja Kit",
  "Mahashivratri Puja Kit",
  "Navratri Puja Kit",
  "Ganesh Puja Kit"
];

const products = [
  { name: "Ganesh Idol", price: "₹499", rating: "⭐⭐⭐⭐" },
  { name: "Brass Diya", price: "₹199", rating: "⭐⭐⭐⭐⭐" },
  { name: "Rudraksha Mala", price: "₹299", rating: "⭐⭐⭐⭐" },
  { name: "Puja Thali Set", price: "₹599", rating: "⭐⭐⭐⭐⭐" }
];

const combos = [
  "Diya + Agarbatti Combo",
  "Puja Thali + Flowers Combo",
  "Rudraksha Mala + Bracelet Combo"
];

return (
<>
<Navbar />

<div className="shop-container">

<h1 className="shop-title">🛍️ Shop Puja Products</h1>

{/* Search Bar */}
<div className="search-bar">
<input type="text" placeholder="Search Puja Products..." />
</div>

{/* Shop by Festival */}
<section className="shop-section">
<h2>🪔 Shop by Festival</h2>
<div className="card-grid">
{festivals.map((item, index) => (
<div className="card" key={index}>{item}</div>
))}
</div>
</section>

{/* Shop by God */}
<section className="shop-section">
<h2>🛕 Shop by God</h2>
<div className="card-grid">
{gods.map((god, index) => (
<div className="card" key={index}>{god}</div>
))}
</div>
</section>

{/* Puja Kits */}
<section className="shop-section">
<h2>📦 Ready Puja Kits</h2>
<div className="card-grid">
{pujaKits.map((kit, index) => (
<div className="card" key={index}>
<h4>{kit}</h4>
<p>Agarbatti, Diya, Kumkum, Flowers, Puja Thali</p>
<button>Add to Cart</button>
</div>
))}
</div>
</section>

{/* Products */}
<section className="shop-section">
<h2>🔥 Best Sellers</h2>
<div className="product-grid">
{products.map((product, index) => (
<div className="product-card" key={index}>
<div className="product-img"></div>
<h4>{product.name}</h4>
<p>{product.price}</p>
<p>{product.rating}</p>
<button>Add to Cart</button>
</div>
))}
</div>
</section>

{/* Combo Offers */}
<section className="shop-section">
<h2>🎁 Combo Offers</h2>
<div className="card-grid">
{combos.map((combo, index) => (
<div className="card" key={index}>
<h4>{combo}</h4>
<p>Special Price ₹799</p>
</div>
))}
</div>
</section>

{/* Puja Help Section */}
<section className="puja-help">
<h2>❓ Don't know what items are needed for puja?</h2>
<button>View Complete Puja Kits</button>
</section>

</div>

<Footer />
</>
);
}

export default Shop;