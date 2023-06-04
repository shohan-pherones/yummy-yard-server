require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const menuRoutes = require("./routes/menuRoute");
const testimonialRoutes = require("./routes/testimonialRoute");

// express app
const app = express();

// port
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Yummy Yard server!" });
});
app.use("/api/menu", menuRoutes);
app.use("/api/testimonials", testimonialRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listening for the requests
    app.listen(port, () => {
      console.log(`connected to the db & listening on the port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
