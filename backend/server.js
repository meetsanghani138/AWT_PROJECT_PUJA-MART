import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 1478;

// ✅ Middleware
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/PUJA-MART")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB ERROR:", err));

// ✅ User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  password: String
});

// ✅ Model
const User = mongoose.model("User", userSchema);




//login 
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // ✅ ADMIN LOGIN
  if (email === "admin@gmail.com" && password === "1234") {
    return res.json({
      message: "Admin login successful",
      user: { email, role: "admin" }
    });
  }

  // ✅ NORMAL USER
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  if (user.password !== password) {
    return res.status(400).json({ message: "Invalid password" });
  }

  res.json({
    message: "Login successful",
    user
  });
});




// ✅ Register API
app.post("/register", async (req, res) => {
  try {
    console.log("API HIT");             // ✅ check connection
    console.log("DATA:", req.body);     // ✅ see incoming data

    const { name, email, phone, address, password } = req.body;

    // validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // check existing user
    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // create user
    const newUser = await User.create({
      name,
      email,
      phone,
      address,
      password
    });

    console.log("SAVED USER:", newUser);

    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.log("ERROR:", error);   // 🔥 VERY IMPORTANT
    res.status(500).json({ message: "Error registering user" });
  }
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});