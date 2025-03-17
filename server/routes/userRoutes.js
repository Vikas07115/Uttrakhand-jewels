const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please provide both email and password" });
  }

  try {
  
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });


    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });


    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });


    res.cookie("token", token, {
      httpOnly: true, 
      secure: process.env.NODE_ENV === "production", 
      sameSite: "Strict",
    });

    res.json({ message: "Login successful", user: { name: user.name, email: user.email } });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;