const ERRORS = {
  withoutID: {
    status: 400,
    message: "ID is not specified"
  },
  invalidID: {
    status: 400,
    message: "ID is not valid"
  },
  withoutBody: {
    status: 400,
    message: "Request body is empty"
  }
};

module.exports = ERRORS;
