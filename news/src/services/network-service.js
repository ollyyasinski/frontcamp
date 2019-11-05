import { API_KEY } from "../consts/api-key";
import { REQUEST_METHODS } from "../consts/request-methods";
import * as newsURL from "../consts/news-url";

import { RequestFactory } from "./request-factory";

export class NetworkService {
  getSources() {
    const url = `${newsURL.NEWS_API_URL}/${newsURL.NEWS_URL_PATH.sources}?${newsURL.NEWS_URL_PARAMS.language}=en&${newsURL.NEWS_URL_PARAMS.apiKey}=${API_KEY}`;
    const request = new RequestFactory().createRequest(REQUEST_METHODS.get);
    return request.sendRequest(url);
  }

  getTopNewsBySource(sourceId) {
    const url = `${newsURL.NEWS_API_URL}/${newsURL.NEWS_URL_PATH.topHeadlines}?${newsURL.NEWS_URL_PARAMS.sources}=${sourceId}&${newsURL.NEWS_URL_PARAMS.apiKey}=${API_KEY}`;
    const request = new RequestFactory().createRequest(REQUEST_METHODS.get);
    return request.sendRequest(url);
  }
}
