const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    // console.log("Token:", token);
    if (!token) {
      return res.status(401).json({ message: "Token not Found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Invalid Token" });
  }
}