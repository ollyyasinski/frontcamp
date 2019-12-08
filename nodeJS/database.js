const mongoose = require("mongoose");

const dbPath = "mongodb://localhost/news_db";

mongoose.connect(dbPath, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", err => {
  console.log("> error occurred from the database", err);
});
db.once("open", () => {
  console.log("> successfully opened the database");
});

module.exports = mongoose;
