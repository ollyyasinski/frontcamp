import css from "./top-news-page.css";

import { Header } from "../../components/header/header";

const bodyElement = document.querySelector("body");

export class TopNewsPage {
  constructor(pageName, htmlService, networkService, routingService) {
    this.pageName = pageName;
    this.htmlService = htmlService;
    this.networkService = networkService;
    this.routingService = routingService;
  }

  createPage() {
    // this.networkService.getSources().then(data => {
    //   const cards = data.sources.map(source => ({
    //     name: source.name,
    //     description: source.description,
    //     url: source.url
    //   }));

    this.createPageElements();
    // });
  }

  createPageElements() {
    const pageElement = this.htmlService.createSimpleElement("div", [
      "top-news-page"
    ]);

    const header = new Header(
      this.pageName,
      true,
      this.htmlService,
      this.networkService,
      this.routingService
    ).createHeader();

    pageElement.appendChild(header);

    bodyElement.appendChild(pageElement);
  }
}
