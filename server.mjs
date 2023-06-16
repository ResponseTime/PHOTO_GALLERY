import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
uri = process.env.MONGODB_URI;
client = new MongoClient(uri);
client.connect((err) => {
  console.log("err");
});

const db = client.db("Gallery");

export default db;
