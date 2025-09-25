// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
const clientRoutes = require("./routes/clients");
const transactionRoutes = require("./routes/transactions");

app.use("/api/clients", clientRoutes);
app.use("/api/transactions", transactionRoutes);

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/PLATFORM")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
