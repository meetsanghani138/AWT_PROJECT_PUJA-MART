import React, { useState } from "react";
import "../css/AdminNavbar.css";

const AdminNavbar = () => {

  const [showAddMenu, setShowAddMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="admin-navbar">

      {/* Logo */}
      <div className="admin-logo">
        🪔 PujaMart <span>Admin</span>
      </div>

      {/* Search Bar */}
      <div className="admin-search">
        <input
          type="text"
          placeholder="Search products, orders, users..."
        />
      </div>

      {/* Right Side */}
      <div className="admin-actions">

        {/* Notifications */}
        <div className="admin-icon">
          🔔
          <span className="notify-badge">3</span>
        </div>

        {/* Quick Add */}
        <div className="admin-add">
          <button onClick={() => setShowAddMenu(!showAddMenu)}>
            ➕ Add
          </button>

          {showAddMenu && (
            <div className="dropdown-menu">
              <p>Add Product</p>
              <p>Add Murti</p>
              <p>Add Puja Kit</p>
              <p>Add Pandit</p>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="admin-profile">
          <button onClick={() => setShowProfile(!showProfile)}>
            👤 Admin
          </button>

          {showProfile && (
            <div className="dropdown-menu">
              <p>My Profile</p>
              <p>Settings</p>
              <p>Logout</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

export default AdminNavbar;