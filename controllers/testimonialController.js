const mongoose = require("mongoose");
const Testimonial = require("../models/testimonialModel");

// get all testimonials
const getTestimonials = async (req, res) => {
  const testimonials = await Testimonial.find({});
  res.status(200).json(testimonials);
};

module.exports = { getTestimonials };
