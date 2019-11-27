const logger = require("../logger");
const errors = require("../consts/errors");
let news = require("../consts/news.json");

const getNewsByID = (request, response, next) => {
  const requestedNewsItem = news.find(
    newsItem => newsItem.ID === request.params.id
  );

  if (!requestedNewsItem) {
    const error = new Error(errors.invalidID.message);
    error.httpStatusCode = errors.invalidID.status;
    return next(error);
  }

  logger.info(
    `Request method: ${request.method} , url: ${request.originalUrl}`
  );

  response.send(requestedNewsItem);
};

module.exports = getNewsByID;
