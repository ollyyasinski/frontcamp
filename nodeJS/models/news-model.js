const logger = require("../logger");
const mongoose = require("../database");

const newsJSON = require("../consts/news.json");

const schema = {
  ID: { type: mongoose.SchemaTypes.String, required: true },
  name: { type: mongoose.SchemaTypes.String, required: true }
};

const collectionName = "news";
const newsSchema = mongoose.Schema(schema);
const News = mongoose.model(collectionName, newsSchema);

News.deleteMany({}, () => console.log("collection cleared"));

News.create(newsJSON, err => {
  if (err) {
    logger.error(err);
  }
});

module.exports = News;
