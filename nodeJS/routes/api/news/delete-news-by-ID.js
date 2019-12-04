const logger = require("../../../logger");
const errors = require("../../../consts/errors");

const News = require("../../../models/news-model");

const deleteNewsByID = (request, response, next) => {
  if (!request.params.id) {
    const error = new Error(errors.withoutID.message);
    error.httpStatusCodes = errors.withoutID.status;
    return next(error);
  }

  logger.info(
    `Request method: ${request.method} , url: ${request.originalUrl}`
  );

  News.findOneAndDelete({ ID: request.params.id }, (err, newsItem) =>
    err ? err.status(err.status).message(err.message) : response.send(newsItem)
  );
};

module.exports = deleteNewsByID;
