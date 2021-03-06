import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from "@angular/core";

import { Article } from "src/app/models/article-model";
import { NewsCardComponent } from "./news-card/news-card.component";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.css"]
})
export class NewsListComponent implements OnInit, OnChanges {
  @Input() articles: Article[];
  @Input() isLoadMoreButtonDisplayed: boolean;
  @Output() loadMoreHandler: EventEmitter<any> = new EventEmitter();
  @Output() editHandler: EventEmitter<any> = new EventEmitter();

  articlesData = null;

  ngOnInit(): void {
    this.loadArticles();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.articles) {
      this.loadArticles();
    }
  }

  onLoadMoreClick(): void {
    this.loadMoreHandler.emit();
    this.loadArticles();
  }

  onEditClick(): void {
    this.editHandler.emit();
  }

  private loadArticles(): void {
    if (this.articles) {
      this.articlesData = {
        component: NewsCardComponent,
        inputs: this.articles.map(article => ({
          title: article.title,
          content: article.content,
          date: article.publishedAt,
          imageSrc: article.urlToImage,
          detailsLink: article.url
        }))
      };
    }
  }
}
