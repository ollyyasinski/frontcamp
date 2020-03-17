import { Component, OnInit, OnDestroy } from "@angular/core";

import { Source } from "src/app/models/sources-model";
import { Article } from "src/app/models/article-model";
import { Observable, of, Subscription } from "rxjs";
import { HttpService } from "src/app/services/http.service";
import { ArticlesService } from "src/app/services/articles.service";
import { map, withLatestFrom } from "rxjs/operators";
import { SourcesService } from "src/app/services/sources.service";

const INITIAL_LOADED_COUNT = 7;

@Component({
  selector: "app-news-catalog",
  templateUrl: "./news-catalog.component.html",
  styleUrls: ["./news-catalog.component.css"]
})
export class NewsCatalogComponent implements OnInit, OnDestroy {
  sources: Source[];
  articles: Article[];
  isLoadMoreButtonDisplayed: boolean;
  newsItemName: string;
  articlesSub: Subscription;

  sources$: Observable<Source[]>;
  articles$: Observable<Article[]>;
  allArticles$: Observable<Article[]>;
  loadedArticlesCount$: Observable<number> = of(INITIAL_LOADED_COUNT);

  constructor(
    private readonly httpService: HttpService,
    private readonly articlesService: ArticlesService,
    private readonly sourcesService: SourcesService
  ) {}

  ngOnInit() {
    this.sources$ = this.httpService.getSources();
    this.sourcesService.addSources(this.sources$);

    this.initializeArticles();

    this.articlesSub = this.articlesService.updateArticles.subscribe(
      articles$ => {
        if (articles$) {
          this.articles$ = articles$;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.articlesSub.unsubscribe();
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

  filterArticles(event: string): void {
    this.newsItemName = event;
  }

  onSourceChange(event: Source): void {
    this.initializeArticles(event.id);
    this.sourcesService.selecteSource(event.id);
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
