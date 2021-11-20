const express = require("express");
const config = require("../config");
const router = express.Router();

router.get("/", (req, res) => {
  const opts = {
    appName: config.appName,
  };
  res.render("favorites", opts);
});

module.exports = router;
