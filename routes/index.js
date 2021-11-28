const express = require("express");
const homeRouter = require("./home");
const videosRouter = require("./videos");
const starsRouter = require("./stars");
const tagsRouter = require("./tags");
const favoritesRouter = require("./favorites");
const historyRouter = require("./history");
const adminRouter = require("./admin");
const authRouter = require("../auth");

const router = express.Router();

router.use("/", homeRouter);
router.use("/videos", videosRouter);
router.use("/stars", starsRouter);
router.use("/tags", tagsRouter);
router.use("/favorites", favoritesRouter);
router.use("/history", historyRouter);
router.use("/admin", authRouter, adminRouter);

module.exports = router;
