import { Injectable } from "@angular/core";

import { Article } from "../models/article-model";

@Injectable()
export class ArticlesService {
  articles: Article[];

  addArticles(articles: Article[]) {
    this.articles = articles;
  }
}
