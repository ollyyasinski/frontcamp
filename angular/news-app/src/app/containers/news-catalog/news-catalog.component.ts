import { Component, OnInit } from "@angular/core";

import { Source } from "src/app/models/sources-model";
import { Article } from "src/app/models/article-model";
import { SOURCES_MOCK } from "../../../mocks/sources-mock";
import { ARTICLES_MOCK } from "../../../mocks/articles-mock";

@Component({
  selector: "app-news-catalog",
  templateUrl: "./news-catalog.component.html",
  styleUrls: ["./news-catalog.component.css"]
})
export class NewsCatalogComponent implements OnInit {
  sources: Source[] = SOURCES_MOCK;
  articles: Article[];
  loadedArticles: number = 7;
  isLoadMoreButtonDisplayed: boolean;

  ngOnInit() {
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
}
