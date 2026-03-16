import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Cart.css";
import Navbar from "../components/Navbar";

import pujaThali from "../assets/images/PujaThali.jpg";
import diya from "../assets/images/AartiDiya.jpg";
import agarbatti from "../assets/images/Agarbatti.jpg";

const Cart = () => {

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Puja Thali Set",
      price: 499,
      quantity: 1,
      image: pujaThali,
    },
    {
      id: 2,
      name: "Brass Diya",
      price: 199,
      quantity: 2,
      image: diya,
    },
    {
      id: 3,
      name: "Agarbatti Pack",
      price: 99,
      quantity: 1,
      image: agarbatti,
    },
  ]);

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 50 : 0;
  const discount = subtotal > 500 ? 100 : 0;

  const total = subtotal + shipping - discount;

  return (
    <>
      <Navbar />

      <div className="cart-page">

        <h2>🛒 Shopping Cart</h2>

        {cartItems.length === 0 ? (

          <div className="empty-cart">

            <div className="empty-icon">🛒</div>

            <h2>Your cart is empty</h2>

            <p>Add some puja items to start shopping.</p>

            <button
              className="shop-btn"
              onClick={() => navigate("/")}
            >
              Shop Now →
            </button>

          </div>

        ) : (

          <div className="cart-layout">

            {/* LEFT SIDE TABLE */}
            <div className="cart-table">

              <table>

                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>

                <tbody>

                  {cartItems.map((item) => (

                    <tr key={item.id}>

                      <td className="product-info">
                        <img src={item.image} alt={item.name} />
                        {item.name}
                      </td>

                      <td>₹{item.price}</td>

                      <td>
                        <div className="qty-box">
                          <button onClick={() => decreaseQty(item.id)}>−</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => increaseQty(item.id)}>+</button>
                        </div>
                      </td>

                      <td>₹{item.price * item.quantity}</td>

                      <td>
                        <button
                          className="remove-btn"
                          onClick={() => removeItem(item.id)}
                        >
                         REMOVE
                        </button>
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>


            {/* RIGHT SIDE SUMMARY */}
            <div className="cart-summary">

              <h3>Order Summary</h3>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>

              <div className="summary-row">
                <span>Discount</span>
                <span>-₹{discount}</span>
              </div>

              <hr />

              <div className="summary-total">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <button
                className="checkout-btn"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout →
              </button>

              <div className="promo-box">

                <h4>Apply Promo Code</h4>

                <input type="text" placeholder="Enter promo code" />

                <button>Apply</button>

              </div>

            </div>

          </div>

        )}

      </div>

    </>
  );
};

export default Cart;