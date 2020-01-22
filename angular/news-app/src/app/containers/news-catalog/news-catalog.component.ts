import { Component } from "@angular/core";

import { Source } from "src/app/models/sources-model";
import { Article } from "src/app/models/article-model";
import { SOURCES_MOCK } from "../../../mocks/sources-mock";
import { ARTICLES_MOCK } from "../../../mocks/articles-mock";

@Component({
  selector: "app-news-catalog",
  templateUrl: "./news-catalog.component.html",
  styleUrls: ["./news-catalog.component.css"]
})
export class NewsCatalogComponent {
  sources: Source[] = SOURCES_MOCK;
  articles: Article[] = ARTICLES_MOCK;

  loadMore(): void {
    console.log("load more");
  }

  addArticle(): void {
    console.log("add article");
  }
}
