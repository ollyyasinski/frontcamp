import css from "./landing-page.css";

import { Header } from "../../components/header/header";
import { NewsChannelCards } from "../../components/news-channels/news-channels";
import { store } from "../../store/news-reducer";
import { LoadSources } from "../../store/news-actions";

const bodyElement = document.querySelector("body");

export class LandingPage {
  constructor(htmlService, networkService, routingService) {
    this.htmlService = htmlService;
    this.networkService = networkService;
    this.routingService = routingService;
  }

  createPage() {
    let cards = JSON.parse(localStorage.getItem("cards"));

    if (cards) {
      store.dispatchAction(new LoadSources(cards));
      this.createPageElements();
    } else {
      this.networkService.getSources().then(data => {
        const receivedCards = data.sources.map(source => ({
          name: source.name,
          description: source.description,
          id: source.id
        }));

        store.dispatchAction(new LoadSources(receivedCards));
        localStorage.setItem("cards", JSON.stringify(receivedCards));

        this.createPageElements();
      });
    }
  }

  createPageElements() {
    const pageElement = this.htmlService.createSimpleElement("div", [
      "landing-page"
    ]);

    const header = new Header(
      "News Channels",
      false,
      this.htmlService
    ).createHeader();

    const channelCards = new NewsChannelCards(
      this.htmlService,
      this.networkService,
      this.routingService
    ).createNewsChannelCards();

    pageElement.appendChild(header);
    pageElement.appendChild(channelCards);

    bodyElement.appendChild(pageElement);
  }
}
