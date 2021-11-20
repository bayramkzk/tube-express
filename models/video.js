const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    sourceUrl: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    isHd: { type: Boolean, required: true },
    categories: {
      type: [{ type: mongoose.Types.ObjectId, ref: "Category" }],
      default: Array,
    },
    viewCount: { type: Number, default: () => 0 },
    // TODO: add createdBy field
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
