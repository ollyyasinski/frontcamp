import { Injectable } from "@angular/core";

@Injectable()
export class DeleteWarningService {
  showAsElement() {
    const popupEl = document.createElement("popup-element") as any;

    popupEl.addEventListener("closed", () =>
      document.body.removeChild(popupEl)
    );

    document.body.appendChild(popupEl);
  }
}
