import React, { useState } from "react";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminEmail = "admin@gmail.com";
    const adminPassword = "1234";

    // get registered user
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // ADMIN LOGIN
    if (email === adminEmail && password === adminPassword) {

      alert("Admin Login Successful 🙏");
      navigate("/admin/dashboard");

    }
    // USER LOGIN
    else if (
      storedUser &&
      email === storedUser.email &&
      password === storedUser.password
    ) {

      alert("User Login Successful 🎉");
      navigate("/");

    }
    // INVALID LOGIN
    else {

      alert("Invalid Email or Password");

    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h2 className="login-title">🪔 PujaMart Login</h2>
        <p className="login-subtitle">Login to Continue</p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <p className="register-text">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>

    </div>
  );
};

export default Login;