const logger = require("./logger");

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  const statusCode = err.httpStatusCode || 500;

  logger.error(
    `${statusCode} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`
  );

  res.status(statusCode);
  res.json({
    message: err.message,
    statusCode: statusCode
  });
};

module.exports = errorHandler;
