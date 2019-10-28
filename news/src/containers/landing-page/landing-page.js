import css from "./landing-page.css";

import { Header } from "../../components/header/header";
import { NewsChannelCards } from "../../components/news-channels/news-channels";

const bodyElement = document.querySelector("body");

export class LandingPage {
  constructor(htmlService, networkService, routingService) {
    this.htmlService = htmlService;
    this.networkService = networkService;
    this.routingService = routingService;
  }

  createPage() {
    let cards = localStorage.getItem("cards");
    if (cards) {
      this.createPageElements(JSON.parse(cards));
    } else {
      this.networkService.getSources().then(data => {
        const cards = data.sources.map(source => ({
          name: source.name,
          description: source.description,
          url: source.url
        }));
        localStorage.setItem("cards", JSON.stringify(cards));

        this.createPageElements(cards);
      });
    }
  }

  createPageElements(cards) {
    const pageElement = this.htmlService.createSimpleElement("div", [
      "landing-page"
    ]);

    const header = new Header(
      "News Channels",
      false,
      this.htmlService
    ).createHeader();

    const channelCards = new NewsChannelCards(
      cards,
      this.htmlService,
      this.networkService,
      this.routingService
    ).createNewsChannelCards();

    pageElement.appendChild(header);
    pageElement.appendChild(channelCards);

    bodyElement.appendChild(pageElement);
  }
}
