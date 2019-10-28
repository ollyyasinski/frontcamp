import { API_KEY } from "../consts/api-key";
import * as newsURL from "../consts/news-url";

import { RequestService } from "./request-service";

export class NetworkService {
  getSources() {
    const url = `${newsURL.NEWS_API_URL}/${newsURL.NEWS_URL_PATH.sources}?${newsURL.NEWS_URL_PARAMS.language}=en&${newsURL.NEWS_URL_PARAMS.apiKey}=${API_KEY}`;
    return new RequestService().getRequest(url);
  }
}
