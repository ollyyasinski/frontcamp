import css from "./news-channel-card.css";
import { store, state } from "../../../store/news-reducer";
import { SelectSource } from "../../../store/news-actions";

export class NewsChannelCard {
  constructor(id, htmlService, networkService, routingService) {
    this.id = id;
    this.selectedSource = state.sources.find(source => source.id === this.id);
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
    cardTitle.innerHTML = this.selectedSource.name;

    return cardTitleWrapper;
  }

  createCardDescription() {
    const cardDescription = this.htmlService.createSimpleElement("p", [
      "channel-card__description"
    ]);
    cardDescription.innerHTML = this.selectedSource.description;

    return cardDescription;
  }

  createCardFooter() {
    const cardFooter = this.htmlService.createSimpleElement("div", [
      "channel-card__footer"
    ]);
    const goToDetailsButton = this.htmlService.createSimpleElement("button");

    goToDetailsButton.innerHTML = "Read more »";
    goToDetailsButton.addEventListener("click", () => {
      store.dispatchAction(new SelectSource(this.id));

      this.routingService.navigateToTopNewsPage(
        this.htmlService,
        this.networkService,
        this.routingService
      );
    });
    cardFooter.appendChild(goToDetailsButton);

    return cardFooter;
  }
}
