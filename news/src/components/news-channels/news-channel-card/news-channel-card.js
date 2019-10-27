export class NewsChannelCard {
  constructor(name, description, url, htmlService) {
    this.name = name;
    this.description = description;
    this.url = url;
    this.htmlService = htmlService;
  }

  createNewsChannelCard() {
    const cardElement = this.htmlService.createSimpleElement("div", [
      "channel-card"
    ]);
    const cardTitle = this.htmlService.createSimpleElement("h3", [
      "channel-card__title"
    ]);
    const cardDescription = this.htmlService.createSimpleElement("p", [
      "channel-card__description"
    ]);

    cardElement.appendChild(cardTitle, cardDescription);

    return cardElement;
  }
}
