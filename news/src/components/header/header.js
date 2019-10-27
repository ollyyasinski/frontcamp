import css from "./header.css";

export class Header {
  constructor(name, isHomeButtonDisplayed, htmlService) {
    this.name = name;
    this.isHomeButtonDisplayed = isHomeButtonDisplayed;
    this.htmlService = htmlService;
  }

  createHeader() {
    const headerElement = this.htmlService.createSimpleElement("div", [
      "header"
    ]);
    const headerNameElement = this.createTitle(this.name);

    headerElement.appendChild(headerNameElement);

    if (this.isHomeButtonDisplayed) {
      const homeButton = this.createHomeButton();
      headerElement.appendChild(homeButton);
    }

    return headerElement;
  }

  createTitle(name) {
    const title = this.htmlService.createSimpleElement("h1", ["header__name"]);
    title.innerHTML = name;

    return title;
  }

  createHomeButton() {
    const homeButton = document.createElement("button");

    homeButton.classList.add("header__home-button");
    homeButton.addEventListener(() => {
      console.log("test");
    });

    return homeButton;
  }
}
