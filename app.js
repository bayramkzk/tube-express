require("dotenv").config();

const express = require("express");
const path = require("path");
const { router } = require("./router");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
