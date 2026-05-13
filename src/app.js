const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/authRoutes");
const taskRoute = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoute);
app.use("/tasks", taskRoute);

module.exports = app;
