import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo1.png";
import "../css/Navbar.css";

// ICONS
import { FaHeart, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT - LOGO */}
      <div className="nav-left">
        <img src={logo} alt="PujaMart Logo" className="logo-img" />
      </div>

      {/* CENTER - SLOGAN */}
      <div className="nav-center">
        <h2>Pure Devotion, Delivered Home</h2>
      </div>

      {/* RIGHT - MENU + ICONS */}
      <div className="nav-right">

        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <a href="#about">About</a>
        <Link to="/pandit">Pandit</Link>

        {/* ICONS */}
        <Link to="/wishlist" className="icon">
          <FaHeart />
        </Link>

        <Link to="/cart" className="icon">
          <FaShoppingCart />
        </Link>

        <Link to="/login" className="login-btn">Login</Link>

      </div>

    </nav>
  );
}

export default Navbar;