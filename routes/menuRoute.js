const express = require("express");
const { getAllMenu } = require("../controllers/menuController");

// router
const router = express.Router();

// GET all menu
router.get("/", getAllMenu);

module.exports = router;
