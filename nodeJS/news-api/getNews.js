const logger = require("../logger");
let news = require("../consts/news.json");

const getNews = (request, response) => {
  logger.info(
    `Request method: ${request.method} , url: ${request.originalUrl}`
  );

  response.send(news);
};

module.exports = getNews;
