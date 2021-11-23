const express = require("express");
const jwt = require("jsonwebtoken");
const loginMiddleware = require("./login");
const config = require("../config");

const router = express.Router();

router.post("/", loginMiddleware);

router.use((req, res, next) => {
  const token = req.cookies["access_token"];
  if (!token) {
    return res.status(400).render("login", {
      appName: config.appName,
      wrongPassword: req.wrongPassword,
      serverError: req.serverError,
    });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(400).render("login", {
        appName: config.appName,
        wrongPassword: req.wrongPassword,
        serverError: req.serverError,
      });
    }

    req.user = decoded;
    next();
  });
});

module.exports = router;
