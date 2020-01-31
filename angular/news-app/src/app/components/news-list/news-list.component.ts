import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Article } from "src/app/models/article-model";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.css"]
})
export class NewsListComponent {
  @Input() articles: Article[];
  @Input() isLoadMoreButtonDisplayed: boolean;
  @Output() loadMoreHandler = new EventEmitter();

  onLoadMoreClick(): void {
    this.loadMoreHandler.emit();
  }
}
