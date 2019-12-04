const getNews = require("./get-news");
const getNewsByID = require("./get-news-by-ID");
const postNews = require("./post-news");
const putNews = require("./put-news");
const deleteNewsByID = require("./delete-news-by-ID");

const newsAPI = {
  getNews: getNews,
  getNewsByID: getNewsByID,
  postNews: postNews,
  putNews: putNews,
  deleteNewsByID: deleteNewsByID
};

module.exports = newsAPI;
