const logger = require("../logger");

const News = require("../models/newsModel");

const getNewsByID = (request, response, next) => {
  logger.info(
    `Request method: ${request.method} , url: ${request.originalUrl}`
  );

  News.find({ ID: request.params.id }, (err, newsItem) =>
    err ? err.status(err.status).message(err.message) : response.send(newsItem)
  );
};

module.exports = getNewsByID;
