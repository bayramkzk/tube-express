const express = require("express");
const homeRouter = require("./home");
const starsRouter = require("./stars");
const tagsRouter = require("./tags");
const favoritesRouter = require("./favorites");
const historyRouter = require("./history");
const adminRouter = require("./admin");

const router = express.Router();

router.use("/", homeRouter);
router.use("/stars", starsRouter);
router.use("/tags", tagsRouter);
router.use("/favorites", favoritesRouter);
router.use("/history", historyRouter);
router.use("/admin", adminRouter);

module.exports = router;
