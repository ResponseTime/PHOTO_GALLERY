const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const client = new MongoClient(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
});
client.connect((err) => {
  console.log("err");
});
const db = client.db("Gallery");

module.exports = db;
