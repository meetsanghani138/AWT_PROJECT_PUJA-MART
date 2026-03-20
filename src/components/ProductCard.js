import React from "react";

const ProductCard = ({ item, wishlist, addToWishlist, addToCart }) => {
  return (
    <div className="product-card">
      {/* Offer Badge */}
      {item.offer && (
        <div className="offer-badge">{item.offer}</div>
      )}
      
      {/* Featured Badge */}
      {item.featured && (
        <div className="featured-badge">⭐</div>
      )}

      {/* Wishlist Button */}
      <button 
        className={`wishlist-btn ${wishlist.includes(item.id) ? "active" : ""}`}
        onClick={() => addToWishlist(item.id)}
      >
        {wishlist.includes(item.id) ? "❤️" : "🤍"}
      </button>

      {/* Product Image */}
      <div className="product-image">
        <img src={item.image} alt={item.name} />
      </div>
      
      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-name">{item.name}</h3>
        
        {/* Rating */}
        <div className="product-rating">
          <span className="stars">
            {"★".repeat(Math.floor(item.rating))}
            {"☆".repeat(5 - Math.floor(item.rating))}
          </span>
          <span className="rating-number">{item.rating}</span>
          <span className="review-count">({item.reviews})</span>
        </div>
        
        {/* Price */}
        <div className="product-price">
          <span className="current-price">₹{item.price}</span>
          {item.originalPrice && (
            <span className="original-price">₹{item.originalPrice}</span>
          )}
        </div>

        {/* Stock Status */}
        <div className="stock-status">
          {item.inStock ? (
            <span className="in-stock">✓ In Stock</span>
          ) : (
            <span className="out-stock">✗ Out of Stock</span>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <button 
          className="add-to-cart-btn"
          onClick={() => addToCart(item)}
          disabled={!item.inStock}
        >
          Add to Cart
        </button>
      </div>

      {/* Centered Glassmorphism Description Overlay */}
      <div className="glass-overlay">
        <div className="description-content">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;