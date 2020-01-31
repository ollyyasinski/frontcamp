import { Component, Input, Injector } from "@angular/core";

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

  constructor(private injector: Injector) {
    this.title = this.injector.get("title");
    this.content = this.injector.get("content");
    this.date = this.injector.get("date");
    this.imageSrc = this.injector.get("imageSrc");
    this.detailsLink = this.injector.get("detailsLink");
  }
}
