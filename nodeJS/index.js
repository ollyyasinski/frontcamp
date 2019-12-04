const express = require("express");
const app = express();
const port = 3000;

const passport = require("passport");

const errorHandler = require("./error-handler");
const newsAPI = require("./news-api");
const NEWS_API_PATH = require("./consts/news-api-paths");

app.use(express.json());

app.use(passport.initialize());

app.get(NEWS_API_PATH.news, newsAPI.getNews);

app.get(NEWS_API_PATH.newsByID, newsAPI.getNewsByID);

app.post(NEWS_API_PATH.news, newsAPI.postNews);

app.put(NEWS_API_PATH.newsByID, newsAPI.putNews);

app.delete(NEWS_API_PATH.newsByID, newsAPI.deleteNewsByID);

app.use(errorHandler);

app.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${port}`);
});
