import { Component, OnInit, Input } from "@angular/core";

import { Source } from "src/app/models/sources-model";

@Component({
  selector: "app-select-source-dropdown",
  templateUrl: "./select-source-dropdown.component.html",
  styleUrls: ["./select-source-dropdown.component.css"]
})
export class SelectSourceDropdownComponent implements OnInit {
  @Input() sourceItems: Source[];

  constructor() {}

  ngOnInit() {}
}
