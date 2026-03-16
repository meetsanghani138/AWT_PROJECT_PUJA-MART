import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/OrderSuccess.css";
import Navbar from "../components/Navbar";

const OrderSuccess = () => {

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="success-page">

        <div className="success-card">

          <div className="success-icon">
            ✅
          </div>

          <h1>Order Placed Successfully!</h1>

          <p className="success-msg">
            Thank you for shopping with PujaMart.
          </p>

          <div className="order-info">

            <p><strong>Order ID:</strong> #PM10234</p>

            <p><strong>Order Date:</strong> 16 March 2026</p>

            <p><strong>Payment Method:</strong> UPI</p>

            <p><strong>Total Amount:</strong> ₹549</p>

          </div>

          <div className="delivery-info">

            <h3>📦 Delivery Details</h3>

            <p>
              Meet Patel <br/>
              Ahmedabad, Gujarat <br/>
              India - 380001
            </p>

            <p className="delivery-time">
              Estimated Delivery: 3 – 5 Days
            </p>

          </div>

          <div className="success-buttons">

            <button
              className="shop-btn"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>

            <button
              className="orders-btn"
              onClick={() => navigate("/MyOrders")}
            >
              View My Orders
            </button>

          </div>

        </div>

      </div>
    </>
  );
};

export default OrderSuccess;