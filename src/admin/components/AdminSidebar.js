import React from "react";
import { Link } from "react-router-dom";
import "../css/AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">

      <h2 className="sidebar-logo">🪔 PujaMart</h2>

      <ul className="sidebar-menu">

        <li>
          <Link to="/admin/dashboard">🏠 Dashboard</Link>
        </li>

        <li>
          <Link to="/admin/products">🛍 Products</Link>
        </li>

        <li>
          <Link to="/admin/add-product">➕ Add Product</Link>
        </li>

        <li>
          <Link to="/admin/orders">📦 Orders</Link>
        </li>

        <li>
          <Link to="/admin/users">👥 Users</Link>
        </li>

        <li>
          <Link to="/admin/pandits">🧑‍🦱 Pandits</Link>
        </li>

        <li>
          <Link to="/admin/offers">🎉 Festival Offers</Link>
        </li>

        <li>
          <Link to="/admin/settings">⚙ Settings</Link>
        </li>

      </ul>

    </div>
  );
};

export default AdminSidebar;