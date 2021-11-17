const express = require("express");
const config = require("./config");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", config);
});

router.get("/stars", (req, res) => {
  return res.render("stars", config);
});

router.get("/tags", (req, res) => {
  return res.render("tags", config);
});

router.get("/favorites", (req, res) => {
  return res.render("favorites", config);
});

router.get("/history", (req, res) => {
  return res.render("history", config);
});

module.exports = { router };
