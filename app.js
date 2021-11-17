require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const public = express.static(path.join(__dirname, "public"));
app.use("/public", public);

app.get("/", (req, res) => {
  res.render("home", { name: req.query.name || "user" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
