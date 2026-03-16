import React, { useEffect, useState } from "react";
import "../css/MyOrders.css";
import Navbar from "../components/Navbar";

const MyOrders = () => {

const [orders, setOrders] = useState([]);

useEffect(() => {

const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];

setOrders(savedOrders);

}, []);

return (

<>
<Navbar />

<div className="orders-page">

<h1>My Orders</h1>

{orders.length === 0 ? (

<p>No orders found.</p>

) : (

orders.map((order,index)=> (

<div className="order-card" key={index}>

<p><strong>Order ID:</strong> {order.orderId}</p>

<p><strong>Date:</strong> {order.date}</p>

<p><strong>Payment:</strong> {order.payment}</p>

<p><strong>Total:</strong> ₹{order.total}</p>

<p><strong>Status:</strong> {order.status}</p>

</div>

))

)}

</div>

</>

);

};

export default MyOrders;