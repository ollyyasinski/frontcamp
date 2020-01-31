import { Component, OnInit } from "@angular/core";

import { Source } from "src/app/models/sources-model";
import { Article } from "src/app/models/article-model";
import { SOURCES_MOCK } from "../../../mocks/sources-mock";
import { ARTICLES_MOCK } from "../../../mocks/articles-mock";
import { Observable } from "rxjs";
import { HttpService } from "src/app/services/http-service";

@Component({
  selector: "app-news-catalog",
  templateUrl: "./news-catalog.component.html",
  styleUrls: ["./news-catalog.component.css"]
})
export class NewsCatalogComponent implements OnInit {
  sources: Source[];
  articles: Article[];
  loadedArticles: number = 7;
  isLoadMoreButtonDisplayed: boolean;
  newsItemName: string;

  sources$: Observable<Source[]>;
  articles$: Observable<Article[]>;

  constructor(private readonly httpService: HttpService) {}

  ngOnInit() {
    this.sources$ = this.httpService.getSources();
    this.articles$ = this.httpService.getTopNewsBySource();
    this.articles = ARTICLES_MOCK.slice(0, this.loadedArticles);
    this.isLoadMoreButtonDisplayed = this.loadedArticles < ARTICLES_MOCK.length;
  }

  loadMore(): void {
    this.articles.length - this.loadedArticles < 7
      ? (this.loadedArticles += this.articles.length)
      : (this.loadedArticles += 7);

    this.articles = ARTICLES_MOCK.slice(0, this.loadedArticles);
    this.isLoadMoreButtonDisplayed = this.loadedArticles < ARTICLES_MOCK.length;
  }

  addArticle(): void {
    console.log("add article");
  }

  filterArticles(event: string): void {
    this.newsItemName = event;
  }
}
