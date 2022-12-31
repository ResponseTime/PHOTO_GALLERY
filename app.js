const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
