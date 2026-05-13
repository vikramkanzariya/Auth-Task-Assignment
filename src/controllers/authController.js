require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and password are required"
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email Format"
      });
    }

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: name,
      email: email,
      password: hashedPassword
    });

    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user: user
    });

  } catch (error) {
    console.error("Error in Register:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

exports.login = async (req, res) => {
  try {
    console.log("Inside Login API:");

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      })
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      })
    }

    const isMatchPassword = await bcrypt.compare(password, user.password);

    if (!isMatchPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials"
      })
    }
    const token = jwt.sign({
      userId: user._id,
      name: user.name,
      email: user.email
    }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    })

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token: token
    })
  } catch (error) {
    console.error("Error in Login:", error);
    res.status(500).json({ message: "Server Error" });
  }
}

exports.logout = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Logged out Successfully"
  });
}