import css from "./news-channel-card.css";

export class NewsChannelCard {
  constructor(
    name,
    description,
    id,
    htmlService,
    networkService,
    routingService
  ) {
    this.name = name;
    this.description = description;
    this.id = id;
    this.htmlService = htmlService;
    this.networkService = networkService;
    this.routingService = routingService;
  }

  createNewsChannelCard() {
    const cardElement = this.htmlService.createSimpleElement("div", [
      "channel-card"
    ]);
    const cardTitle = this.createCardTitle();
    const cardDescription = this.createCardDescription();
    const cardFooter = this.createCardFooter();

    cardElement.appendChild(cardTitle);
    cardElement.appendChild(cardDescription);
    cardElement.appendChild(cardFooter);

    return cardElement;
  }

  createCardTitle() {
    const cardTitleWrapper = this.htmlService.createSimpleElement("div", [
      "channel-card__title-wrapper"
    ]);
    const cardTitle = this.htmlService.createSimpleElement("h3", [
      "channel-card__title"
    ]);

    cardTitleWrapper.appendChild(cardTitle);
    cardTitle.innerHTML = this.name;

    return cardTitleWrapper;
  }

  createCardDescription() {
    const cardDescription = this.htmlService.createSimpleElement("p", [
      "channel-card__description"
    ]);
    cardDescription.innerHTML = this.description;

    return cardDescription;
  }

  createCardFooter() {
    const cardFooter = this.htmlService.createSimpleElement("div", [
      "channel-card__footer"
    ]);
    const goToDetailsButton = this.htmlService.createSimpleElement("button");

    goToDetailsButton.innerHTML = "Read more »";
    goToDetailsButton.addEventListener("click", () =>
      this.routingService.navigateToTopNewsPage(
        this.id,
        this.name,
        this.htmlService,
        this.networkService,
        this.routingService
      )
    );
    cardFooter.appendChild(goToDetailsButton);

    return cardFooter;
  }
}
