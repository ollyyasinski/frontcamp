import { ERROR_TYPES, UNKNOWN_ERROR } from "../consts/errors";

export class ErrorHandlingService {
  constructor(errorType) {
    this.errorType = errorType.toString();
  }

  getErrorMessage() {
    Object.entries(ERROR_TYPES).forEach(errorType =>
      errorType[0] === this.errorType ? errorType[1] : UNKNOWN_ERROR
    );
  }
}
