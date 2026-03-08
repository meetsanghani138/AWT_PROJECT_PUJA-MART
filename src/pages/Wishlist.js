import React, { useState } from "react";
import "../css/Wishlist.css";
import Navbar from "../components/Navbar";

const Wishlist = () => {

  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Puja Thali Set",
      price: "₹499",
      image: "https://m.media-amazon.com/images/I/71vN9nK9v+L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 2,
      name: "Brass Diya",
      price: "₹199",
      image: "https://m.media-amazon.com/images/I/71xjzJf7JDL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 3,
      name: "Incense Sticks",
      price: "₹99",
      image: "https://m.media-amazon.com/images/I/81C3U2Pz0VL._AC_UF1000,1000_QL80_.jpg"
    }
  ]);

  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar />

      <div className="wishlist-container">

        <h1 className="wishlist-title">💖 My Wishlist</h1>

        {wishlist.length === 0 ? (
          <p className="empty-msg">Your wishlist is empty</p>
        ) : (
          <div className="wishlist-grid">

            {wishlist.map((item) => (
              <div key={item.id} className="wishlist-card">

                <img src={item.image} alt={item.name} />

                <h3>{item.name}</h3>
                <p className="price">{item.price}</p>

                <div className="wishlist-buttons">
                  <button className="cart-btn">Add to Cart</button>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </>
  );
};

export default Wishlist;