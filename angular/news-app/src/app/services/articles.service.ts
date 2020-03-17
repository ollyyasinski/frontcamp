import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { map, withLatestFrom } from "rxjs/operators";

import { SourcesService } from "./sources.service";
import { Article, ArticlePatch } from "../models/article-model";

@Injectable()
export class ArticlesService {
  articles$: Observable<Article[]>;
  selectedArticle$: Observable<Article>;
  updateArticles: BehaviorSubject<Observable<Article[]>> = new BehaviorSubject(
    null
  );

  loadArticles = true;

  constructor(private readonly sourcesService: SourcesService) {}

  addArticles(articles$: Observable<Article[]>): void {
    if (this.loadArticles) {
      this.articles$ = articles$;
    }
  }

  getArticles(): Observable<Article[]> {
    return this.articles$;
  }

  selectArticle(title: string): void {
    this.selectedArticle$ = this.articles$.pipe(
      map(articles => articles.find(article => article.title === title))
    );
  }

  getSelectedArticle(): Observable<Article> {
    return this.selectedArticle$;
  }

  updateArticle(title: string, patch: ArticlePatch): void {
    this.articles$ = this.articles$.pipe(
      withLatestFrom(this.sourcesService.selectedSource$),
      map(([articles, source]) => {
        const articleIndex = articles.findIndex(
          article => article.title === title
        );
        const foundArticle = articles[articleIndex];
        if (foundArticle) {
          foundArticle.description = patch.description;
          foundArticle.content = patch.content;
          foundArticle.title = patch.title;

          articles[articleIndex] = foundArticle;
        } else {
          const newArticle = {
            source: {
              id: source.id,
              name: source.name
            },
            author: "New Author",
            title: patch.title,
            description: patch.description,
            publishedAt: new Date().toDateString(),
            content: patch.content,
            url: "",
            urlToImage: "null"
          };

          articles.push(newArticle);
        }

        return articles;
      })
    );

    this.loadArticles = false;
  }

  deleteArticle(title: string): void {
    this.updateArticles.next(null);

    this.articles$ = this.articles$.pipe(
      map(articles => {
        const articleIndex = articles.findIndex(
          article => article.title === title
        );
        articles.splice(articleIndex, 1);
        return articles;
      })
    );

    this.loadArticles = false;
    this.updateArticles.next(this.articles$);
  }
}
