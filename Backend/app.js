const express = require("express");
const app = express();
const path = require("path");
// const db = require("./server.js");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(8000, () => {
  console.log("Server started on port 8000");
});
