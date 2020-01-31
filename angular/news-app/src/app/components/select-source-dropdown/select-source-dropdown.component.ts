import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Source } from "src/app/models/sources-model";

@Component({
  selector: "app-select-source-dropdown",
  templateUrl: "./select-source-dropdown.component.html",
  styleUrls: ["./select-source-dropdown.component.css"]
})
export class SelectSourceDropdownComponent {
  @Input() sourceItems: Source[];
  @Output() onSourceChange: EventEmitter<Source> = new EventEmitter();

  onValueChange(event: Source) {
    this.onSourceChange.emit(event);
  }
}
