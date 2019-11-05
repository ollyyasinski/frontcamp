import { HTMLService } from "./html-service";
import { ERROR_TYPES } from "../consts/errors";

export class RequestService {
  constructor(method) {
    this.method = method;
  }

  async sendRequest(url, body) {
    try {
      const response = await fetch(url, {
        method: this.method,
        body: body
      });
      const statusCode = response.status;

      if (statusCode >= 400 && statusCode < 600) {
        const module = await import("../components/error-popup/error-popup");

        this.lazyLoadErrorPopup(module, statusCode);

        throw new Error("Server Error");
      }

      return response.json();
    } catch (err) {
      console.log("Error ", err);
    }
  }

  lazyLoadErrorPopup(module, status) {
    const ErrorPopup = module.default;
    const htmlService = new HTMLService();
    const error = {
      code: status,
      message: ERROR_TYPES[status]
    };

    const popup = new ErrorPopup(htmlService, error).createErrorPopup();

    document.querySelector("body").appendChild(popup);
  }
}
