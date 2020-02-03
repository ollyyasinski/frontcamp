import { Component, OnInit } from "@angular/core";

import { Source } from "src/app/models/sources-model";
import { Article, ArticlePatch } from "src/app/models/article-model";
import { ARTICLES_MOCK } from "../../../mocks/articles-mock";
import { Observable, combineLatest, of } from "rxjs";
import { HttpService } from "src/app/services/http.service";
import { ArticlesService } from "src/app/services/articles.service";
import { map, withLatestFrom } from "rxjs/operators";

const INITIAL_LOADED_COUNT = 7;

@Component({
  selector: "app-news-catalog",
  templateUrl: "./news-catalog.component.html",
  styleUrls: ["./news-catalog.component.css"]
})
export class NewsCatalogComponent implements OnInit {
  sources: Source[];
  articles: Article[];
  loadedArticlesCount$: Observable<number> = of(INITIAL_LOADED_COUNT);
  isLoadMoreButtonDisplayed: boolean;
  newsItemName: string;

  sources$: Observable<Source[]>;
  articles$: Observable<Article[]>;
  allArticles$: Observable<Article[]>;

  constructor(
    private readonly httpService: HttpService,
    private readonly articlesService: ArticlesService
  ) {}

  ngOnInit() {
    this.sources$ = this.httpService.getSources();
    this.initializeArticles();
  }

  loadMore(): void {
    this.articles$ = this.articlesService.getArticles().pipe(
      withLatestFrom(this.loadedArticlesCount$),
      map(([articles, articlesCount]) => {
        let newCount: number;
        articles.length - articlesCount < 7
          ? (newCount = articles.length)
          : (newCount = articlesCount += 7);

        this.loadedArticlesCount$ = of(newCount);
        this.isLoadMoreButtonDisplayed = newCount < articles.length;

        return articles.slice(0, newCount);
      })
    );
  }

  addArticle(): void {}

  filterArticles(event: string): void {
    this.newsItemName = event;
  }

  onSourceChange(event: Source): void {
    this.initializeArticles(event.id);
  }

  private initializeArticles(id?: string): void {
    this.articlesService.addArticles(this.httpService.getTopNewsBySource(id));

    this.allArticles$ = this.articlesService.getArticles();
    this.articles$ = this.allArticles$.pipe(
      withLatestFrom(this.loadedArticlesCount$),
      map(([articles, articlesCount]) => {
        this.loadedArticlesCount$ = of(INITIAL_LOADED_COUNT);
        this.isLoadMoreButtonDisplayed = articlesCount < articles.length;
        return articles.slice(0, articlesCount);
      })
    );
  }
}
