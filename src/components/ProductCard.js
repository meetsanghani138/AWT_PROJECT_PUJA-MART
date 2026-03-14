import React from "react";

const ProductCard = ({ item, wishlist, addToWishlist }) => {

  return (
    <div className="product-card">

      <span className="offer-badge">{item.offer}</span>

      <img src={item.image} alt={item.name} />

      <h3>{item.name}</h3>

      <p className="rating">⭐ {item.rating}</p>

      <p className="price">₹{item.price}</p>

      <div className="product-buttons">

        <button className="cart-btn">Add to Cart</button>

        <button
          className="wish-btn"
          onClick={() => addToWishlist(item.id)}
        >
          {wishlist.includes(item.id) ? "❤️" : "🤍"}
        </button>

      </div>

    </div>
  );
};

export default ProductCard;