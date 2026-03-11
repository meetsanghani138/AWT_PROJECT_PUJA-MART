// import React, { useState } from "react";
// import "../css/Login.css";
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {

//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const correctEmail = "admin@gmail.com";
//     const correctPassword = "1234";

//     if (email === correctEmail && password === correctPassword) {

//       alert("Login Successful 🙏");

//       // redirect to home page
//       navigate("/");

//     } else {
//       alert("Invalid Email or Password");
//     }
//   };

//   return (
//     <div className="login-container">

//       <div className="login-card">

//         <h2 className="login-title">Welcome Back 🙏</h2>
//         <p className="login-subtitle">Login to PujaMart</p>

//         <form onSubmit={handleSubmit}>

//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="login-input"
//           />

//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="login-input"
//           />

//           <button type="submit" className="login-btn">
//             Login
//           </button>

//         </form>

//         <p className="register-text">
//           Don't have an account?
//           <Link to="/register"> Register</Link>
//         </p>

//       </div>

//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const correctEmail = "admin@gmail.com";
    const correctPassword = "1234";

    if (email === correctEmail && password === correctPassword) {

      alert("Admin Login Successful 🙏");

      // redirect to admin dashboard
      navigate("/admin/dashboard");

    } else {

      alert("Invalid Email or Password");

      // redirect to home page
      navigate("/");
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h2 className="login-title">🪔 PujaMart Admin</h2>
        <p className="login-subtitle">Login to Admin Panel</p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter Admin Email"
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