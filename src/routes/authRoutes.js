const { register, login, logout } = require("../controllers/authController");
const { auth } = require("../middlewares/auth");

const authRouter = require("express").Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", auth, logout);

module.exports = authRouter;