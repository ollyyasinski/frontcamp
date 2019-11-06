import css from "./news-articles.css";

import { NewsArticleCard } from "./news-article-card/news-article-card";
import { NEWS_API_LINK } from "../../consts/news-url";
import { state, store } from "../../store/news-reducer";
import { SelectArticle } from "../../store/news-actions";

export class NewsArticlesCards {
  constructor(htmlService, networkService, routingService) {
    this.articles = state.articles;
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
        card.id,
        this.htmlService,
        this.networkService,
        this.routingService
      ).createNewsArticleCard();

      store.dispatchAction(new SelectArticle(card.id));
      newsArticlesWrapper.appendChild(newArticle);
    });

    newsArticlesWrapper.appendChild(attributionLink);

    return newsArticlesWrapper;
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
