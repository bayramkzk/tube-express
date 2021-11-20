const express = require("express");
const config = require("../config");
const router = express.Router();

router.get("/", (req, res) => {
  const opts = {
    appName: config.appName,
  };
  res.render("history", opts);
});

module.exports = router;
