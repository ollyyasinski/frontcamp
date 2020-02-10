import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-filter-form",
  templateUrl: "./filter-form.component.html",
  styleUrls: ["./filter-form.component.css"]
})
export class FilterFormComponent {
  newsItemName: string;

  @Output() filterInput: EventEmitter<string> = new EventEmitter();

  onSubmit(): void {
    this.filterInput.emit(this.newsItemName);
  }
}
