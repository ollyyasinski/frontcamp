import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-filter-form",
  templateUrl: "./filter-form.component.html",
  styleUrls: ["./filter-form.component.css"]
})
export class FilterFormComponent implements OnInit {
  newsItemName: string;

  @Output() filterInput: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSubmit(): void {
    this.filterInput.emit(this.newsItemName);
  }
}
