import css from "./news-channels.css";

import { NewsChannelCard } from "./news-channel-card/news-channel-card";
import { state } from "../../store/news-reducer";

export class NewsChannelCards {
  constructor(htmlService, networkService, routingService) {
    this.cards = state.sources;
    this.htmlService = htmlService;
    this.networkService = networkService;
    this.routingService = routingService;
  }

  createNewsChannelCards() {
    const channelCardsWrapper = this.htmlService.createSimpleElement("div", [
      "channel-cards"
    ]);

    this.cards.forEach(card => {
      const newCard = new NewsChannelCard(
        card.id,
        this.htmlService,
        this.networkService,
        this.routingService
      ).createNewsChannelCard();
      channelCardsWrapper.appendChild(newCard);
    });

    return channelCardsWrapper;
  }
}
