import { Component, OnInit } from "@angular/core";

import { Source } from "src/app/models/sources-model";
import { SOURCES_MOCK } from "../../../mocks/sources-mock";

@Component({
  selector: "app-news-catalog",
  templateUrl: "./news-catalog.component.html",
  styleUrls: ["./news-catalog.component.css"]
})
export class NewsCatalogComponent implements OnInit {
  sources: Source[] = SOURCES_MOCK;

  constructor() {}

  ngOnInit() {}
}
