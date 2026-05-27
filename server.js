require("dotenv").config();

const express = require("express");

const cors = require("cors");

// Connect SQLite
require("./database/db");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());

app.use(express.json());


// Routes

app.use("/api/auth", authRoutes);


// Test Route

app.get("/", (req, res) => {

  res.send("API Running...");

});


// Start Server

app.listen(process.env.PORT, () => {

  console.log(`Server running on port ${process.env.PORT}`);

});