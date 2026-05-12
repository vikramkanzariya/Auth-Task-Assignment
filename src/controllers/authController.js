const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    console.log("INside register:");

    const data = await User.find();

    console.log("DATA is:", data)
    if (!data.length) {
      console.log("");
    }

  } catch (error) {
    console.error("Error in Register:", error);
    res.status(500).json({ message: "Server Error" });
  }
}

exports.login = async (req, res) => {
  try {
    console.log("Inside Login API:");
  } catch (error) {
    console.error("Error in Login:", error);
    res.status(500).json({ message: "Server Error" });
  }
}