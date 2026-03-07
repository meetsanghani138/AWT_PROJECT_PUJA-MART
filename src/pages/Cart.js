import React, { useState } from "react";
import "../css/Cart.css";

const Cart = () => {

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Puja Thali Set",
      price: 499,
      quantity: 1,
      image:
        "https://m.media-amazon.com/images/I/71vN9nK9v+L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      name: "Brass Diya",
      price: 199,
      quantity: 2,
      image:
        "https://m.media-amazon.com/images/I/71xjzJf7JDL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 3,
      name: "Agarbatti Pack",
      price: 99,
      quantity: 1,
      image:
        "https://m.media-amazon.com/images/I/81C3U2Pz0VL._AC_UF1000,1000_QL80_.jpg",
    },
  ]);

  // increase quantity
  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // decrease quantity
  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const delivery = subtotal > 0 ? 50 : 0;
  const discount = subtotal > 500 ? 100 : 0;

  const total = subtotal + delivery - discount;

  return (
    <div className="cart-page">

      <h1 className="cart-title">🛒 My Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <p>Add some puja items to start shopping.</p>
        </div>
      ) : (

        <div className="cart-container">

          {/* Cart Items */}
          <div className="cart-items">

            {cartItems.map((item) => (
              <div key={item.id} className="cart-card">

                <img src={item.image} alt={item.name} />

                <div className="cart-info">

                  <h3>{item.name}</h3>

                  <p className="price">₹{item.price}</p>

                  <div className="qty-controls">

                    <button onClick={() => decreaseQty(item.id)}>
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQty(item.id)}>
                      +
                    </button>

                  </div>

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

          {/* Order Summary */}
          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span>₹{delivery}</span>
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

            <button className="checkout-btn">
              Proceed to Checkout
            </button>

          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;