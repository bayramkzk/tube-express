if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");
const router = require("./routes");

const main = async () => {
  const app = express();
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");
  app.use(cookieParser())
  app.use(express.urlencoded({ extended: false }));
  app.use("/public", express.static(path.join(__dirname, "public")));
  app.use(router);

  await mongoose.connect(process.env.DATABASE_URL);
  console.log("Connected to MongoDB database");

  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

main();
