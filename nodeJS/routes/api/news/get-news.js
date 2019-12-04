const logger = require("../../../logger");

const News = require("../../../models/news-model");

const getNews = (request, response) => {
  logger.info(
    `Request method: ${request.method} , url: ${request.originalUrl}`
  );

  News.find({}, (err, news) =>
    err ? err.status(err.sstatus).message(err.message) : response.send(news)
  );
};

module.exports = getNews;
