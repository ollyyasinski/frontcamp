import {
  Component,
  Input,
  Injector,
  Output,
  EventEmitter
} from "@angular/core";
import { ArticlesService } from "src/app/services/articles.service";

@Component({
  selector: "app-news-card",
  templateUrl: "./news-card.component.html",
  styleUrls: ["./news-card.component.css"]
})
export class NewsCardComponent {
  @Input() title: string;
  @Input() content: string;
  @Input() date: string;
  @Input() imageSrc: string;
  @Input() detailsLink: string;

  placeholderURL = "../../../../assets/placeholder.png";

  constructor(
    private readonly injector: Injector,
    private readonly articlesService: ArticlesService
  ) {
    this.title = this.injector.get("title");
    this.content = this.injector.get("content");
    this.date = this.injector.get("date");
    this.imageSrc = this.injector.get("imageSrc");
    this.detailsLink = this.injector.get("detailsLink");
  }

  onEdit(): void {
    this.articlesService.selectArticle(this.title);
  }
}
