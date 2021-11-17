require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", { name: req.query.name || "user" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
