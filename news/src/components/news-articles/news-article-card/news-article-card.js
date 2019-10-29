import css from "./news-article-card.css";

import imagePlaceholder from "../../../assets/placeholder.png";

export class NewsArticleCard {
  constructor(
    description,
    title,
    url,
    urlToImage,
    htmlService,
    networkService,
    routingService
  ) {
    this.description = description;
    this.title = title;
    this.url = url;
    this.urlToImage = urlToImage;
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

    return articleElement;
  }

  createArticaleImage() {
    const articleImage = this.htmlService.createSimpleElement("img", [
      "article-card__image"
    ]);

    articleImage.src = this.urlToImage ? this.urlToImage : imagePlaceholder;
    articleImage.alt = this.title;

    return articleImage;
  }

  createArticleTitle() {
    const articleTitle = this.htmlService.createSimpleElement("h2", [
      "article-card__title"
    ]);

    articleTitle.innerHTML = this.title;

    return articleTitle;
  }

  createArticleDescription() {
    const articleDescription = this.htmlService.createSimpleElement("p", [
      "article-card__description"
    ]);
    articleDescription.innerHTML = this.description;

    return articleDescription;
  }
}
