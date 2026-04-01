import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Register.css";
import axios from "axios";
function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const { confirmPassword, ...data } = formData;

    const res = await axios.post("/register", data);

    alert(res.data.message);

  } catch (error) {
    console.log(error);
    alert(error.response?.data?.message || "Error registering user");
  }
};

  return (
    <div className="register-container">

      <div className="register-box">

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            onChange={handleChange}
            required
          ></textarea>

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />

          <button type="submit">Register</button>

        </form>

        <p>
          Already have an account? <a href="/login">Login</a>
        </p>

      </div>

    </div>
  );
}

export default Register;