import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import "../css/users.css";

function Users() {

const [search,setSearch] = useState("");

const users = [
{
id:1,
name:"Rahul Sharma",
email:"rahul@gmail.com",
orders:5,
status:"Active"
},
{
id:2,
name:"Priya Patel",
email:"priya@gmail.com",
orders:3,
status:"Active"
},
{
id:3,
name:"Meet Sanghani",
email:"meet@gmail.com",
orders:7,
status:"Blocked"
}
];

const filteredUsers = users.filter(user =>
user.name.toLowerCase().includes(search.toLowerCase())
);

return (

<div className="admin-container">

<AdminSidebar />

<div className="admin-main">

<AdminNavbar />

<div className="users-page">

<h2>Users Management</h2>

<input
className="user-search"
type="text"
placeholder="Search user..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="users-grid">

{filteredUsers.map(user => (

<div className="user-card" key={user.id}>

<div className="avatar">
{user.name.charAt(0)}
</div>

<h3>{user.name}</h3>

<p>{user.email}</p>

<p>Orders: {user.orders}</p>

<span className={`user-status ${user.status}`}>
{user.status}
</span>

<div className="user-actions">

<button className="view-btn">View</button>

<button className="block-btn">Block</button>

<button className="delete-btn">Delete</button>

</div>

</div>

))}

</div>

</div>

</div>

</div>

);

}

export default Users;