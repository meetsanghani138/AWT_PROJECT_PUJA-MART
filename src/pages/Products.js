import React, { useState } from "react";
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

  /* Product Data */
  const products = [
    {
      id: 1,
      name: "Lord Ganesha Murti",
      price: 599,
      category: "murti",
      rating: 4.5,
      offer: "10% OFF",
      image: ganesh
    },
    {
      id: 2,
      name: "Krishna Idol",
      price: 799,
      category: "murti",
      rating: 4.7,
      offer: "15% OFF",
      image: krishna
    },
    {
      id: 3,
      name: "Brass Puja Thali",
      price: 499,
      category: "thali",
      rating: 4.4,
      offer: "20% OFF",
      image: pujaThali
    },
    {
      id: 4,
      name: "Decorative Puja Thali",
      price: 399,
      category: "thali",
      rating: 4.2,
      offer: "10% OFF",
      image: pujaThali
    },
    {
      id: 5,
      name: "Brass Diya",
      price: 199,
      category: "diya",
      rating: 4.6,
      offer: "5% OFF",
      image: diya
    },
    {
      id: 6,
      name: "Agarbatti Pack",
      price: 99,
      category: "agarbatti",
      rating: 4.3,
      offer: "10% OFF",
      image: agarbatti
    }
  ];

  /* States */
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState([]);

  /* Wishlist Function */
  const addToWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  /* Filter Products */
  const filteredProducts = products
    .filter(item => category === "all" || item.category === category)
    .filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <>
      <Navbar />

      <div className="products-page">

        <h1 className="products-title">🛍️ PujaMart Products</h1>

        {/* Search Bar */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search puja items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="category-filter">

          <button onClick={() => setCategory("all")}>All</button>
          <button onClick={() => setCategory("murti")}>God Murtis</button>
          <button onClick={() => setCategory("thali")}>Puja Thali</button>
          <button onClick={() => setCategory("diya")}>Diyas</button>
          <button onClick={() => setCategory("agarbatti")}>Agarbatti</button>

        </div>

        {/* Products Grid */}
        <div className="products-grid">

          {filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              wishlist={wishlist}
              addToWishlist={addToWishlist}
            />
          ))}

        </div>

      </div>
    </>
  );
};

export default Products;