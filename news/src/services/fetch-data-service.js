import { API_KEY } from "../consts/api-key";
import * as newsURL from "../consts/uri";

export class FetchDataSevice {
  fetchNewsSources() {
    const url = `${newsURL.NEWS_API_URL}/${newsURL.NEWS_URL_PATH.sources}?${newsURL.NEWS_URL_PARAMS.apiKey}=${API_KEY}`;
    const req = new Request(url);
    
    fetch(req).then(function(response) {
      console.log(response.json());
    });
  }
}
