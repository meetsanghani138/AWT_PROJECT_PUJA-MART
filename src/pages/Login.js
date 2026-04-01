import React, { useState } from "react";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("/login", {
      email,
      password
    });

    alert(res.data.message);

    // ✅ store user in localStorage
    localStorage.setItem("user", JSON.stringify(res.data.user));

    // ✅ ADMIN CHECK (optional)
    if (email === "admin@gmail.com" && password === "1234Admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/");
    }

  } catch (error) {
    console.log(error);
    alert(error.response?.data?.message || "Login failed");
  }
};

  return (
    <div className="login-container">
          <div className="particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
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