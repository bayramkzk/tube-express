const express = require("express");
const Video = require("../models/video");
const config = require("../config");
const router = express.Router();

router.get("/", async (req, res) => {
  const videoCount = await Video.find().count();
  const pageCount = Math.ceil(videoCount / config.maxVideoCountPerPage);

  const recentVideos = await Video.find()
    .sort({ createdAt: "descending" })
    .limit(config.maxVideoCountPerPage);

  res.render("videos", {
    appName: config.appName,
    videos: recentVideos,
    pageCount,
    pageIndex: 0,
    headerText: "Home",
  });
});

router.get("/p/:page", async (req, res) => {
  const pageIndex = +req.params.page;
  const videoCount = await Video.find().count();
  const pageCount = Math.ceil(videoCount / config.maxVideoCountPerPage);

  const videos = await Video.find()
    .sort({ createdAt: "descending" })
    .skip(config.maxVideoCountPerPage * req.params.page)
    .limit(config.maxVideoCountPerPage);

  res.render("videos", {
    appName: config.appName,
    videos,
    pageCount,
    pageIndex,
    headerText: `Page ${pageIndex}`
  });
});

router.get("/:id", async (req, res) => {
  const video = await Video.findById(req.params.id);

  res.render("video", {
    appName: config.appName,
    video,
  });
});

module.exports = router;
