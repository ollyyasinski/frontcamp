const logger = require("../logger");
const errors = require("../consts/errors");
let news = require("../consts/news.json");

const deleteNewsByID = (request, response, next) => {
  if (!request.params.id) {
    const error = new Error(errors.withoutID.message);
    error.httpStatusCode = errors.withoutID.status;
    return next(error);
  }

  logger.info(
    `Request method: ${request.method} , url: ${request.originalUrl}`
  );

  news = news.filter(newsItem => newsItem.ID !== request.params.id);

  response.send(news);
};

module.exports = deleteNewsByID;
