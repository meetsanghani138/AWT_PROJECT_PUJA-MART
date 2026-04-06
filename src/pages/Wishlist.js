import React, { useState } from "react";
import "../css/Wishlist.css";

function Wishlist({ products }) {
  return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">My Wishlist ❤️</h2>

      {products.length === 0 ? (
        <p className="empty-msg">Your wishlist is empty</p>
      ) : (
        <div className="wishlist-grid">
          {products.map((item) => (
            <WishlistCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

function WishlistCard({ item }) {
  const [liked, setLiked] = useState(true);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="wishlist-card">

      {/* ❤️ Heart Toggle */}
      <span className="heart" onClick={() => setLiked(!liked)}>
        {liked ? "❤️" : "🤍"}
      </span>

      {/* 🔥 Discount Badge */}
      <span className="badge">20% OFF</span>

      {/* Product Image */}
      <img src={item.image} alt={item.name} />

      {/* Product Name */}
      <h3>{item.name}</h3>

      {/* ⭐ Rating */}
      <p className="rating">⭐⭐⭐⭐☆ (4.2)</p>

      {/* Price */}
      <p className="price">₹{item.price}</p>

      {/* 👇 Hover Buttons */}
      <div className="quick-actions">
        <button
          className={`cart-btn ${added ? "added" : ""}`}
          onClick={handleAdd}
        >
          {added ? "Added ✅" : "Add to Cart"}
        </button>

        <button className="buy-btn">Buy Now ⚡</button>
      </div>
    </div>
  );
}

export default Wishlist;