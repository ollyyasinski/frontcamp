const logger = require("../../../logger");
const errors = require("../../../consts/errors");

const News = require("../../../models/news-model");

const postNews = (request, response, next) => {
  if (!Object.keys(request.body).length) {
    const error = new Error(errors.withoutBody.message);
    error.httpStatusCode = errors.withoutBody.status;
    return next(error);
  }

  logger.info(
    `Request method: ${request.method} , url: ${request.originalUrl}`
  );

  const newNewsItem = new News(request.body);

  newNewsItem.save(err =>
    err
      ? err.status(err.status).message(err.message)
      : response.send(newNewsItem)
  );
};

module.exports = postNews;
