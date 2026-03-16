import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Checkout.css";
import Navbar from "../components/Navbar";
import upiQR from "../assets/images/upi-qr.jpeg";

const Checkout = () => {

  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePlaceOrder = () => {

    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    const order = {
      orderId: "PM" + Math.floor(Math.random() * 100000),
      date: new Date().toLocaleDateString(),
      payment: paymentMethod,
      total: 549,
      status: "Processing"
    };

    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    existingOrders.push(order);

    localStorage.setItem("orders", JSON.stringify(existingOrders));

    navigate("/orderSuccess");
  };

  return (
    <>
      <Navbar />

      <div className="checkout-page">

        <h1>Checkout</h1>

        <div className="checkout-container">

          {/* LEFT BILLING FORM */}
          <div className="billing-section">

            <h2>Billing Details</h2>

            <form className="billing-form">

              <div className="row">
                <input type="text" placeholder="First Name*" />
                <input type="text" placeholder="Last Name*" />
              </div>

              <input type="text" placeholder="Company Name (optional)" />

              <input type="text" placeholder="House number and street name*" />

              <input type="text" placeholder="Apartment, suite, unit (optional)" />

              <div className="row">
                <input type="text" placeholder="Town / City*" />
                <input type="text" placeholder="State*" />
              </div>

              <div className="row">
                <input type="text" placeholder="Postcode / ZIP*" />
                <input type="text" placeholder="Country*" />
              </div>

              <input type="text" placeholder="Phone*" />

              <input type="email" placeholder="Email address (optional)" />

              <textarea placeholder="Order notes (optional)"></textarea>

            </form>

          </div>


          {/* RIGHT ORDER SUMMARY */}
          <div className="order-section">

            <h2>Your Order</h2>

            <div className="order-box">

              <div className="order-row">
                <span>Puja Thali Set ×1</span>
                <span>₹499</span>
              </div>

              <div className="order-row">
                <span>Shipping</span>
                <span>₹50</span>
              </div>

              <hr />

              <div className="order-total">
                <span>Total</span>
                <span>₹549</span>
              </div>

            </div>


            {/* PAYMENT METHODS */}
            <div className="payment-methods">

              <h3>Payment Method</h3>

              <label>
                <input
                  type="radio"
                  name="payment"
                  value="COD"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Cash on Delivery
              </label>

              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Card"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Credit / Debit Card
              </label>

              <label>
                <input
                  type="radio"
                  name="payment"
                  value="UPI"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                UPI Payment
              </label>

            </div>


            {/* UPI SCANNER */}
            {paymentMethod === "UPI" && (
              <div className="upi-box">
                <h4>Scan & Pay</h4>
                <img src={upiQR} alt="UPI QR" />
              </div>
            )}


            {/* CARD DETAILS */}
            {paymentMethod === "Card" && (
              <div className="card-box">

                <h4>Enter Card Details</h4>

                <input type="text" placeholder="Card Number" maxLength="16" />

                <div className="row">
                  <input type="text" placeholder="MM/YY" maxLength="5" />
                  <input type="password" placeholder="CVV" maxLength="3" />
                </div>

                <input type="text" placeholder="Card Holder Name" />

              </div>
            )}


            <button
              className="place-order-btn"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>

          </div>

        </div>

      </div>
    </>
  );
};

export default Checkout;