// 📁 backend/models/Applicant.js
const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  role: String,
  resume: String,
});

module.exports = mongoose.model('Applicant', applicantSchema);