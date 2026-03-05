import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo1.png";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="PujaMart Logo" />
      </div>

      {/* Middle Menu */}
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About Us</Link>
        <Link to="/pandit">Pandit Service</Link>
      </div>

      {/* Right Menu */}
      <div className="rightMenu">
        <Link to="/login">Login</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/wishlist">Wishlist</Link>
      </div>

    </nav>
  );
}

export default Navbar;