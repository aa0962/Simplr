const express = require('express');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movieRoutes');
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
