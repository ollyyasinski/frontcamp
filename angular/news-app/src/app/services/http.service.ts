import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import * as newsURL from "../consts/news-url";
import { API_KEY } from "../consts/api-key";
import { Article } from "../models/article-model";
import { Source } from "../models/sources-model";

interface SourcesPayload {
  sources: Source[];
}

interface ArticlesPayload {
  articles: Article[];
}

@Injectable()
export class HttpService {
  constructor(private readonly httpClient: HttpClient) {}

  getSources(): Observable<Source[]> {
    const resourceUrl = `${newsURL.NEWS_API_URL}/${newsURL.NEWS_URL_PATH.sources}?${newsURL.NEWS_URL_PARAMS.language}=en&${newsURL.NEWS_URL_PARAMS.apiKey}=${API_KEY}`;

    return this.httpClient
      .get<SourcesPayload>(resourceUrl)
      .pipe(map(payload => payload.sources));
  }

  getTopNewsBySource(sourceId: string = "abc-news") {
    const resourceUrl = `${newsURL.NEWS_API_URL}/${newsURL.NEWS_URL_PATH.topHeadlines}?${newsURL.NEWS_URL_PARAMS.sources}=${sourceId}&${newsURL.NEWS_URL_PARAMS.apiKey}=${API_KEY}`;

    const articles = this.httpClient
      .get<ArticlesPayload>(resourceUrl)
      .pipe(map(payload => payload.articles));

    return articles;
  }
}
