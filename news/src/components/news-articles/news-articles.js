import css from "./news-articles.css";

import { NewsArticleCard } from "./news-article-card/news-article-card";

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

    return newsArticlesWrapper;
  }
}
