const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    sourceUrl: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    resolution: {
      type: String,
      enum: ["144p", "240p", "360p", "720p", "1080p", "1440p", "4K", "8K"],
      required: true,
    },
    categories: {
      type: [{ type: mongoose.Types.ObjectId, ref: "Category" }],
      default: Array,
    },
    stars: {
      type: [{ type: mongoose.Types.ObjectId, ref: "Star" }],
      default: Array,
    },
    tags: {
      type: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
      default: Array,
    },
    viewCount: { type: Number, default: () => 0 },
    // TODO: add createdBy field
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
