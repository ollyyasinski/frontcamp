const logger = require("../logger");
const errors = require("../consts/errors");
let news = require("../consts/news.json");

const putNews = (request, response, next) => {
  if (!Object.keys(request.body).length) {
    const error = new Error(errors.withoutBody.message);
    error.httpStatusCode = errors.withoutBody.status;
    return next(error);
  } else if (!news[request.params.id]) {
    const error = new Error(errors.invalidID.message);
    error.httpStatusCode = errors.invalidID.status;
    return next(error);
  }

  logger.info(
    `Request method: ${request.method} , url: ${request.originalUrl}`
  );

  news[request.params.id] = request.body;
  response.send(news);
};

module.exports = putNews;
