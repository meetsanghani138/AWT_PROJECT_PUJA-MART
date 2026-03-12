import React from "react";
import "../css/order.css";

const Order = () => {

  const order = {
    id: "PM1023",
    date: "12 March 2026",
    status: "Shipped",
    payment: "UPI",
    total: 1299,
    address: {
      name: "Meet Sanghani",
      city: "Rajkot",
      state: "Gujarat",
      pincode: "360001",
      phone: "9876543210"
    },
    items: [
      {
        id: 1,
        name: "Brass Diya",
        price: 299,
        qty: 2,
        image: "https://i.imgur.com/6n8QK4F.jpg"
      },
      {
        id: 2,
        name: "Puja Thali",
        price: 499,
        qty: 1,
        image: "https://i.imgur.com/xXq9QKp.jpg"
      }
    ]
  };

  return (
    <div className="order-page">

      <h1 className="order-title">My Order</h1>

      {/* Order Summary */}
      <div className="order-summary">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Date:</strong> {order.date}</p>
        <p><strong>Payment:</strong> {order.payment}</p>
        <p><strong>Status:</strong> {order.status}</p>
        <p><strong>Total:</strong> ₹{order.total}</p>
      </div>

      {/* Order Items */}
      <div className="order-items">
        <h2>Products</h2>

        {order.items.map((item) => (
          <div key={item.id} className="order-item">

            <img src={item.image} alt={item.name} />

            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.qty}</p>
              <p>Total: ₹{item.price * item.qty}</p>
            </div>

          </div>
        ))}
      </div>

      {/* Shipping Address */}
      <div className="shipping">
        <h2>Shipping Address</h2>

        <p>{order.address.name}</p>
        <p>{order.address.city}, {order.address.state}</p>
        <p>Pin: {order.address.pincode}</p>
        <p>Phone: {order.address.phone}</p>
      </div>

      {/* Order Tracking */}
      <div className="order-tracking">

        <h2>Order Tracking</h2>

        <div className="tracking-steps">

          <div className="step active">Order Placed</div>
          <div className="step active">Processing</div>
          <div className="step active">Shipped</div>
          <div className="step">Out for Delivery</div>
          <div className="step">Delivered</div>

        </div>

      </div>

      {/* Buttons */}
      <div className="order-actions">

        <button className="btn">Track Order</button>
        <button className="btn">Download Invoice</button>

      </div>

    </div>
  );
};

export default Order;