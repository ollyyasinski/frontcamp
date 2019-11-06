import css from "./news-article-card.css";

import imagePlaceholder from "../../../assets/placeholder.png";
import { state } from "../../../store/news-reducer";

export class NewsArticleCard {
  constructor(id, htmlService, networkService, routingService) {
    this.selectedCard = state.articles.find(card => card.id === id);
    this.htmlService = htmlService;
    this.networkService = networkService;
    this.routingService = routingService;
  }

  createNewsArticleCard() {
    const articleElement = this.htmlService.createSimpleElement("div", [
      "article-card"
    ]);
    const articleImage = this.createArticaleImage();
    const articleTitle = this.createArticleTitle();
    const articleDescription = this.createArticleDescription();

    articleElement.appendChild(articleImage);
    articleElement.appendChild(articleTitle);
    articleElement.appendChild(articleDescription);

    articleElement.addEventListener("click", () => {
      window.location.href = this.selectedCard.url;
    });

    return articleElement;
  }

  createArticaleImage() {
    const articleImage = this.htmlService.createSimpleElement("img", [
      "article-card__image"
    ]);

    articleImage.src = this.selectedCard.urlToImage
      ? this.selectedCard.urlToImage
      : imagePlaceholder;
    articleImage.alt = this.selectedCard.title;

    return articleImage;
  }

  createArticleTitle() {
    const articleTitle = this.htmlService.createSimpleElement("h2", [
      "article-card__title"
    ]);

    articleTitle.innerHTML = this.selectedCard.title;

    return articleTitle;
  }

  createArticleDescription() {
    const articleDescription = this.htmlService.createSimpleElement("p", [
      "article-card__description"
    ]);
    articleDescription.innerHTML = this.selectedCard.description;

    return articleDescription;
  }
}
