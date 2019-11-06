import css from "./top-news-page.css";

import { Header } from "../../components/header/header";
import { NewsArticlesCards } from "../../components/news-articles/news-articles";

const bodyElement = document.querySelector("body");

export class TopNewsPage {
  constructor(sourceId, pageName, htmlService, networkService, routingService) {
    this.sourceId = sourceId;
    this.pageName = pageName;
    this.htmlService = htmlService;
    this.networkService = networkService;
    this.routingService = routingService;
  }

  createPage() {
    this.networkService.getTopNewsBySource(this.sourceId).then(data => {
      const receivedArticles = data.articles.map(article => ({
        description: article.description,
        title: article.title,
        url: article.url,
        urlToImage: article.urlToImage
      }));

      this.createPageElements(receivedArticles);
    });
  }

  createPageElements(articles) {
    const pageElement = this.htmlService.createSimpleElement("div", [
      "top-news-page"
    ]);

    const header = new Header(
      this.pageName,
      true,
      this.htmlService,
      this.networkService,
      this.routingService
    ).createHeader();

    const articleCards = new NewsArticlesCards(
      articles,
      this.htmlService,
      this.networkService,
      this.routingService
    ).createNewsArticlesCards();

    pageElement.appendChild(header);
    pageElement.appendChild(articleCards);

    bodyElement.appendChild(pageElement);
  }
}
