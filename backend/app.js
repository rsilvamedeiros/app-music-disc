// backend/app.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const artistRoutes = require("./routes/artistRoutes");
const albumRoutes = require("./routes/albumRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/artists", artistRoutes);
app.use("/api/albums", albumRoutes);

module.exports = app;
