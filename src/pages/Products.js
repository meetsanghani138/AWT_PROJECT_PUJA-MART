import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import "../css/Products.css";

/* Image Imports */
import ganesh from "../assets/images/GaneshIdol.jpg";
import krishna from "../assets/images/krishna.jpg";
import pujaThali from "../assets/images/PujaThali.jpg";
import diya from "../assets/images/AartiDiya.jpg";
import agarbatti from "../assets/images/Agarbatti.jpg";

const Products = () => {

  /* Product Data with Enhanced Details */
  const products = [
    {
      id: 1,
      name: "Lord Ganesha Murti",
      price: 599,
      originalPrice: 665,
      category: "murti",
      rating: 4.5,
      reviews: 128,
      offer: "10% OFF",
      image: ganesh,
      inStock: true,
      featured: true,
      description: "Handcrafted eco-friendly Ganesha idol for prosperity"
    },
    {
      id: 2,
      name: "Krishna Idol",
      price: 799,
      originalPrice: 940,
      category: "murti",
      rating: 4.7,
      reviews: 95,
      offer: "15% OFF",
      image: krishna,
      inStock: true,
      featured: true,
      description: "Beautifully crafted Krishna idol with flute"
    },
    {
      id: 3,
      name: "Brass Puja Thali",
      price: 499,
      originalPrice: 624,
      category: "thali",
      rating: 4.4,
      reviews: 203,
      offer: "20% OFF",
      image: pujaThali,
      inStock: true,
      featured: false,
      description: "Premium brass thali complete set for rituals"
    },
    {
      id: 4,
      name: "Decorative Puja Thali",
      price: 399,
      originalPrice: 443,
      category: "thali",
      rating: 4.2,
      reviews: 156,
      offer: "10% OFF",
      image: pujaThali,
      inStock: true,
      featured: false,
      description: "Beautifully designed decorative thali"
    },
    {
      id: 5,
      name: "Brass Diya",
      price: 199,
      originalPrice: 209,
      category: "diya",
      rating: 4.6,
      reviews: 312,
      offer: "5% OFF",
      image: diya,
      inStock: true,
      featured: true,
      description: "Traditional brass diya for auspicious occasions"
    },
    {
      id: 6,
      name: "Agarbatti Pack",
      price: 99,
      originalPrice: 110,
      category: "agarbatti",
      rating: 4.3,
      reviews: 445,
      offer: "10% OFF",
      image: agarbatti,
      inStock: true,
      featured: false,
      description: "Long-lasting fragrance agarbatti pack"
    }
  ];

  /* States */
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const [showFeatured, setShowFeatured] = useState(false);
  const [priceRange, setPriceRange] = useState(1000);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  /* Load wishlist from localStorage */
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  /* Save wishlist to localStorage */
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  /* Wishlist Function */
  const addToWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
      showNotification("Removed from wishlist ❤️");
    } else {
      setWishlist([...wishlist, id]);
      showNotification("Added to wishlist ❤️");
    }
  };

  /* Cart Function */
  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
    showNotification(`Added ${product.name} to cart 🛒`);
  };

  /* Notification Function */
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  /* Filter Products */
  let filteredProducts = products
    .filter(item => category === "all" || item.category === category)
    .filter(item => showFeatured ? item.featured : true)
    .filter(item => item.price <= priceRange)
    .filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    );

  /* Sort Products */
  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  /* Get Category Count */
  const getCategoryCount = (cat) => {
    if (cat === "all") return products.length;
    return products.filter(p => p.category === cat).length;
  };

  return (
    <>
      <Navbar cartCount={cart.length} wishlistCount={wishlist.length} />
      
      {/* Notification Toast */}
      {notification && (
        <div className="notification-toast">
          {notification}
        </div>
      )}

      <div className="products-page">

        {/* Hero Section */}
        <div className="products-hero">
          <h1 className="products-title">✨ PujaMart Products ✨</h1>
          <p className="products-subtitle">Discover sacred items for your spiritual journey</p>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-number">{products.length}</span>
            <span className="stat-label">Products</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">⭐ 4.5</span>
            <span className="stat-label">Avg Rating</span>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="filters-section">
          
          {/* Search Bar */}
          <div className="search-box">
            <input
              type="text"
              placeholder="🔍 Search puja items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Sort Options */}
          <div className="sort-box">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Sort by: Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating: High to Low</option>
            </select>
          </div>

          {/* Featured Toggle */}
          <label className="featured-toggle">
            <input 
              type="checkbox" 
              checked={showFeatured}
              onChange={(e) => setShowFeatured(e.target.checked)}
            />
            <span>⭐ Featured Only</span>
          </label>
        </div>

        {/* Price Range Filter */}
        <div className="price-filter">
          <label>💰 Price Range: Up to ₹{priceRange}</label>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
          />
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          <button 
            onClick={() => setCategory("all")}
            className={category === "all" ? "active" : ""}
          >
            All <span className="count">({getCategoryCount("all")})</span>
          </button>
          <button 
            onClick={() => setCategory("murti")}
            className={category === "murti" ? "active" : ""}
          >
            🙏 God Murtis <span className="count">({getCategoryCount("murti")})</span>
          </button>
          <button 
            onClick={() => setCategory("thali")}
            className={category === "thali" ? "active" : ""}
          >
            🪔 Puja Thali <span className="count">({getCategoryCount("thali")})</span>
          </button>
          <button 
            onClick={() => setCategory("diya")}
            className={category === "diya" ? "active" : ""}
          >
            🕯️ Diyas <span className="count">({getCategoryCount("diya")})</span>
          </button>
          <button 
            onClick={() => setCategory("agarbatti")}
            className={category === "agarbatti" ? "active" : ""}
          >
            🌸 Agarbatti <span className="count">({getCategoryCount("agarbatti")})</span>
          </button>
        </div>

        {/* Results Count */}
        <div className="results-count">
          Showing {filteredProducts.length} of {products.length} products
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              wishlist={wishlist}
              addToWishlist={addToWishlist}
              addToCart={addToCart}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="empty-state">
            <div className="empty-emoji">😢</div>
            <h3>No products found</h3>
            <p>Try adjusting your filters or search criteria</p>
            <button onClick={() => {
              setSearch("");
              setCategory("all");
              setPriceRange(1000);
              setShowFeatured(false);
            }}>
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;