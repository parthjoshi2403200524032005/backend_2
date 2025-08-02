// 📁 backend/routes/applicantRoutes.js
const express = require('express');
const router = express.Router();
const Applicant = require('../Models/Applicant');

// Create Applicant
router.post('/', async (req, res) => {
  try {
    const applicant = new Applicant(req.body);
    await applicant.save();
    res.status(201).json(applicant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get All Applicants
router.get('/', async (req, res) => {
  try {
    const applicants = await Applicant.find();
    res.status(200).json(applicants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;