import css from "./landing-page.css";

import { Header } from "../../components/header/header";
import { NewsChannelCards } from "../../components/news-channels/news-channels";
import { NEWS_API_LINK } from "../../consts/news-url";
import { ErrorPopup } from "../../components/error-popup/error-popup";

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
        const receivedCards = data.sources.map(source => ({
          name: source.name,
          description: source.description,
          id: source.id
        }));

        localStorage.setItem("cards", JSON.stringify(receivedCards));

        this.createPageElements(receivedCards);
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

    const popup = new ErrorPopup(this.htmlService, {
      code: 400,
      message: "test"
    }).createErrorPopup();

    pageElement.appendChild(header);
    pageElement.appendChild(channelCards);
    pageElement.appendChild(popup);

    bodyElement.appendChild(pageElement);
  }
}
