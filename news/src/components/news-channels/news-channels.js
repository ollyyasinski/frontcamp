import css from "./news-channels.css";

import { NewsChannelCard } from "./news-channel-card/news-channel-card";

export class NewsChannelCards {
  constructor(cards, htmlService, networkService, routingService) {
    this.cards = cards;
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
        card.name,
        card.description,
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
