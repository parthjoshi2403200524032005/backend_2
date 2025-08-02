// 📁 backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB Error:', err));

// Routes
const applicantRoutes = require('./routes/applicantRoutes.js');
app.use('/api/applicants', applicantRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));