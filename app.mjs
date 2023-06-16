const express = require("express");
const app = express();
const path = require("path");
import db from "./server.mjs";
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("views", path.join(__dirname, "/Views"));
app.get("/", (req, res) => {
  res.send(db.ping());
});
app.listen(8000, () => {
  console.log("Server started on port 8000");
});
