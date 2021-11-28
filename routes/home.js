const express = require("express");
const Video = require("../models/video");
const config = require("../config");
const router = express.Router();

router.get("/", async (req, res) => {
  const recentVideos = await Video.find()
    .sort({ createdAt: "descending" })
    .limit(config.maxVideoCountPerPage);

  const videoCount = await Video.find().count();
  const pageCount = Math.ceil(videoCount / config.maxVideoCountPerPage);

  res.render("home", {
    appName: config.appName,
    videos: recentVideos,
    pageCount,
    pageIndex: 0,
    headerText: "Home",
  });
});

module.exports = router;
