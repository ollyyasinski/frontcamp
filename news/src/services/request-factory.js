import { REQUEST_METHODS } from "../consts/request-methods";

import { RequestService } from "./request-service";

export class RequestFactory {
  constructor() {}

  createRequest(method) {
    switch (method) {
      case REQUEST_METHODS.get:
        return new RequestService(REQUEST_METHODS.get);
      case REQUEST_METHODS.post:
        return new RequestService(REQUEST_METHODS.post);
      case REQUEST_METHODS.put:
        return new RequestService(REQUEST_METHODS.put);
      case REQUEST_METHODS.patch:
        return new RequestService(REQUEST_METHODS.patch);
      case REQUEST_METHODS.delete:
        return new RequestService(REQUEST_METHODS.delete);
      default:
        return new RequestService(REQUEST_METHODS.get);
    }
  }
}
