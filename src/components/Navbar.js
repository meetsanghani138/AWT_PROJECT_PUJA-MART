import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo1.png";
import "../css/Navbar.css";

// ICONS
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT - LOGO */}
      <div className="nav-left">
        <img src={logo} alt="PujaMart Logo" className="logo-img" />
      </div>

      {/* CENTER - SLOGAN */}
      <div className="nav-center">
        <h2>🪔 Pure Devotion, Delivered Home</h2>
      </div>

      {/* RIGHT */}
      <div className="nav-right">

        {/* MENU */}
        <div className="nav-links">
          <Link to="/">Home</Link>
           <Link to="/Product">Products</Link>
          <Link to="/pandit">Pandit</Link>
          <Link to="/about">About</Link>
        </div>

        {/* ICONS */}
        <div className="nav-icons">
          <Link to="/wishlist"><FaHeart /></Link>
          <Link to="/cart"><FaShoppingCart /></Link>
          <Link to="/login">Login</Link>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;