import { Component, Input } from "@angular/core";

@Component({
  selector: "app-basic-layout",
  templateUrl: "./basic-layout.component.html",
  styleUrls: ["./basic-layout.component.css"]
})
export class BasicLayoutComponent {
  @Input() headerTitle: string;
}
