import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Source } from "src/app/models/sources-model";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent {
  @Input() sourceItems: Source[];
  @Output() addArticleHandler: EventEmitter<any> = new EventEmitter();
  @Output() filterHandler: EventEmitter<string> = new EventEmitter();

  onAddArticle(): void {
    this.addArticleHandler.emit();
  }

  onFilter(event: string): void {
    this.filterHandler.emit(event);
  }
}
