const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");

dotenv.config();
app.use(express.json());

// ✅ Enable CORS here
app.use(cors({
  origin: "http://localhost:3000",  // allow React frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true  // if you're using cookies or tokens
}));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));