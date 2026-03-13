import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import "../css/order.css";

function Orders() {

const [search,setSearch] = useState("");

const orders = [
{
id:1021,
customer:"Rahul",
product:"Brass Diya",
price:120,
status:"Processing"
},
{
id:1022,
customer:"Priya",
product:"Puja Kit",
price:450,
status:"Shipped"
},
{
id:1023,
customer:"Meet",
product:"Incense Sticks",
price:80,
status:"Delivered"
}
];

const filteredOrders = orders.filter(order =>
order.customer.toLowerCase().includes(search.toLowerCase()) ||
order.id.toString().includes(search)
);

return (

<div className="admin-container">

<AdminSidebar />

<div className="admin-main">

<AdminNavbar />

<div className="orders-page">

<h2>Orders Dashboard</h2>

<input
className="order-search"
type="text"
placeholder="Search Order..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="orders-grid">

{filteredOrders.map(order => (

<div className="order-card" key={order.id}>

<h3>Order #{order.id}</h3>

<p><b>Customer:</b> {order.customer}</p>
<p><b>Product:</b> {order.product}</p>
<p><b>Total:</b> ₹{order.price}</p>

<span className={`status ${order.status}`}>
{order.status}
</span>

<div className="timeline">

<div className="step active">Ordered</div>
<div className="step active">Packed</div>
<div className={`step ${order.status === "Shipped" || order.status === "Delivered" ? "active":""}`}>Shipped</div>
<div className={`step ${order.status === "Delivered" ? "active":""}`}>Delivered</div>

</div>

<button className="view-btn">View Details</button>

</div>

))}

</div>

</div>

</div>

</div>

);

}

export default Orders;