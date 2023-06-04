const express = require("express");
const { getTestimonials } = require("../controllers/testimonialController");

// router
const router = express.Router();

// GET all testimonials
router.get("/", getTestimonials);

module.exports = router;
