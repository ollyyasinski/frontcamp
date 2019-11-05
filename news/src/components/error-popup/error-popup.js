import css from "./error-popup.css";

import { ERROR_TITLE_TEXT, ERROR_DETAILS } from "../../consts/errors";

export class ErrorPopup {
  constructor(htmlService, error) {
    this.htmlService = htmlService;
    this.errorMessage = error.message;
    this.errorCode = error.code;

    if (typeof ErrorPopup.instance === "object") {
      return ErrorPopup.instance;
    }

    ErrorPopup.instance = this;

    return this;
  }

  createErrorPopup() {
    const modalWrapperElement = this.htmlService.createSimpleElement("div", [
      "error-popup__wrapper"
    ]);
    const modalElement = this.htmlService.createSimpleElement("div", [
      "error-popup"
    ]);

    const header = this.createHeader();
    const errorText = this.createErrorText();

    modalElement.appendChild(header);
    modalElement.appendChild(errorText);
    modalWrapperElement.appendChild(modalElement);

    return modalWrapperElement;
  }

  createHeader() {
    const errorHeaderElement = this.htmlService.createSimpleElement("div", [
      "error-popup__header"
    ]);
    const popupTitleElement = this.htmlService.createSimpleElement("h2", [
      "error-popup__title"
    ]);
    const closeBtn = this.createCloseButton();

    popupTitleElement.innerHTML = "Error";

    errorHeaderElement.appendChild(popupTitleElement);
    errorHeaderElement.appendChild(closeBtn);

    return errorHeaderElement;
  }

  createCloseButton() {
    const closeBtn = this.htmlService.createSimpleElement("button", [
      "error-popup__close-btn"
    ]);

    closeBtn.innerHTML = "X";
    closeBtn.addEventListener("click", () => {
      document.querySelector(".error-popup__wrapper").style.display = "none";
    });

    return closeBtn;
  }

  createErrorText() {
    const errorTextWrapperElement = this.htmlService.createSimpleElement(
      "div",
      ["error-popup__text-wrapper"]
    );

    const errorTextLine1Element = this.htmlService.createSimpleElement("p");
    const errorTextLine2Element = this.htmlService.createSimpleElement("span");
    const blodTextSpan = this.htmlService.createSimpleElement("span", [
      "error-popup__details"
    ]);

    errorTextLine1Element.innerHTML = ERROR_TITLE_TEXT;
    blodTextSpan.innerHTML = ERROR_DETAILS + " ";
    errorTextLine2Element.innerHTML = this.errorMessage;

    errorTextWrapperElement.appendChild(errorTextLine1Element);
    errorTextWrapperElement.appendChild(blodTextSpan);
    errorTextWrapperElement.appendChild(errorTextLine2Element);

    return errorTextWrapperElement;
  }
}
