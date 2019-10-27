import css from "./news-channels.css";

import { NewsChannelCard } from "./news-channel-card/news-channel-card";

export class NewsChannelCards {
  constructor(cards, htmlService) {
    this.cards = cards;
    this.htmlService = htmlService;
  }

  createNewsChannelCards() {
    const channelCardsWrapper = this.htmlService.createSimpleElement("div", [
      "channel-cards"
    ]);

    this.cards.forEach(card => {
      const newCard = new NewsChannelCard(
        card.name,
        card.description,
        card.url,
        this.htmlService
      ).createNewsChannelCard();
      channelCardsWrapper.appendChild(newCard);
    });

    return channelCardsWrapper;
  }
}
