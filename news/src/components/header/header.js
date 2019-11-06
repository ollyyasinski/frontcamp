import css from "./header.css";

export class Header {
  constructor(
    name,
    isBackButtonDisplayed,
    htmlService,
    networkService,
    routingService
  ) {
    this.name = name;
    this.isBackButtonDisplayed = isBackButtonDisplayed;
    this.htmlService = htmlService;
    this.networkService = networkService;
    this.routingService = routingService;
  }

  createHeader() {
    const headerElement = this.htmlService.createSimpleElement("div", [
      "header"
    ]);
    const headerNameElement = this.createTitle(this.name);

    if (this.isBackButtonDisplayed) {
      const backButton = this.createBackButton();
      headerElement.appendChild(backButton);
    }

    headerElement.appendChild(headerNameElement);

    return headerElement;
  }

  createTitle(name) {
    const title = this.htmlService.createSimpleElement("h1", ["header__name"]);
    title.innerHTML = name;

    return title;
  }

  createBackButton() {
    const backButton = document.createElement("button");

    backButton.classList.add("header__back-button");
    backButton.addEventListener("click", () => {
      this.routingService.navigateToLandingPage(
        this.htmlService,
        this.networkService,
        this.routingService
      );
    });

    return backButton;
  }
}
