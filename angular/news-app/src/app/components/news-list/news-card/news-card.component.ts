import { Component, Input, Injector, Inject } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { ArticlesService } from "src/app/services/articles.service";
import { DeleteWarningComponent } from "../../delete-warning/delete-warning.component";
import { DeleteWarningService } from "../../delete-warning/delete-warning.service";

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
    @Inject(Injector) private readonly injector: Injector,
    private readonly articlesService: ArticlesService,
    private readonly warningService: DeleteWarningService
  ) {
    this.title = this.injector.get("title");
    this.content = this.injector.get("content");
    this.date = this.injector.get("date");
    this.imageSrc = this.injector.get("imageSrc");
    this.detailsLink = this.injector.get("detailsLink");

    const warningElement = createCustomElement(DeleteWarningComponent, {
      injector
    });
    customElements.get("delete-warning-element") ||
      customElements.define("delete-warning-element", warningElement);
  }

  onEdit(): void {
    this.articlesService.selectArticle(this.title);
  }

  onDelete(): void {
    this.warningService.showAsElement();
    this.articlesService.deleteArticle(this.title);
  }
}
