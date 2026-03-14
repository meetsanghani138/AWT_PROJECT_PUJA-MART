import React, { useState } from "react";
import "../css/Wishlist.css";
import Navbar from "../components/Navbar";

/* Import Images */

import pujaThali from "../assets/images/PujaThali.jpg";
import diya from "../assets/images/AartiDiya.jpg";
import agarbatti from "../assets/images/Agarbatti.jpg";

const Wishlist = () => {

  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Puja Thali Set",
      price: "₹499",
      image: pujaThali
    },
    {
      id: 2,
      name: "Brass Diya",
      price: "₹199",
      image: diya
    },
    {
      id: 3,
      name: "Agarbatti Pack",
      price: "₹99",
      image: agarbatti
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

                  <button className="cart-btn">
                    Add to Cart
                  </button>

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