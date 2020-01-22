import { Component, OnInit, Input } from "@angular/core";

import { Source } from "src/app/models/sources-model";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {
  @Input() sourceItems: Source[];

  constructor() {}

  ngOnInit() {}
}
