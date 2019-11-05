import css from "./news-articles.css";

import { NewsArticleCard } from "./news-article-card/news-article-card";
import { NEWS_API_LINK } from "../../consts/news-url";

export class NewsArticlesCards {
  constructor(articles, htmlService, networkService, routingService) {
    this.articles = articles;
    this.htmlService = htmlService;
    this.networkService = networkService;
    this.routingService = routingService;
  }

  createNewsArticlesCards() {
    const newsArticlesWrapper = this.htmlService.createSimpleElement("div", [
      "news-articles"
    ]);
    const attributionLink = this.createAttributionLink();

    this.articles.forEach(card => {
      const newArticle = new NewsArticleCard(
        card.description,
        card.title,
        card.url,
        card.urlToImage,
        this.htmlService,
        this.networkService,
        this.routingService
      ).createNewsArticleCard();
      newsArticlesWrapper.appendChild(newArticle);
    });
  }

  createAttributionLink() {
    const newsAPILink = this.htmlService.createSimpleElement("a", [
      "news-api-link"
    ]);
    newsAPILink.href = NEWS_API_LINK;
    newsAPILink.innerHTML = "Powered by News API";

    return newsAPILink;
  }
}
