const mongoose = require("mongoose");
const Menu = require("../models/menuModel");

// get all menu
const getAllMenu = async (req, res) => {
  const menu = await Menu.find({});
  res.status(200).json(menu);
};

module.exports = { getAllMenu };
