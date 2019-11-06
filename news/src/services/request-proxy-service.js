import { RequestFactory } from "./request-factory";

export class RequestProxyService {
  createRequest(method) {
    const proxiedRequest = new Proxy(new RequestFactory(), {
      get: (target, functionName) => {
        const logMessage = `${method} request was executed by ${functionName} function`;

        console.log(logMessage);

        return Reflect.get(target, functionName);
      }
    });

    return proxiedRequest.createRequest(method);
  }
}
