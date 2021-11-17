const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/stars", (req, res) => {
  return res.render("stars");
});

router.get("/tags", (req, res) => {
  return res.render("tags");
});

router.get("/favorites", (req, res) => {
  return res.render("favorites");
});

router.get("/history", (req, res) => {
  return res.render("history");
});

module.exports = { router };
