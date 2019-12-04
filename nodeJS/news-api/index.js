const getNews = require("./getNews");
const getNewsByID = require("./getNewsByID");
const postNews = require("./postNews");
const putNews = require("./putNews");
const deleteNewsByID = require("./deleteNewsByID");

const newsAPI = {
  getNews: getNews,
  getNewsByID: getNewsByID,
  postNews: postNews,
  putNews: putNews,
  deleteNewsByID: deleteNewsByID
};

module.exports = newsAPI;
