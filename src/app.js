const express = require("express");
const cors = require("cors");
const authrRoute = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authrRoute);

module.exports = app;
