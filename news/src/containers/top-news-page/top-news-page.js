import css from "./top-news-page.css";

import { Header } from "../../components/header/header";
import { NewsArticlesCards } from "../../components/news-articles/news-articles";
import { state, store } from "../../store/news-reducer";
import { LoadArticles } from "../../store/news-actions";

const bodyElement = document.querySelector("body");

export class TopNewsPage {
  constructor(htmlService, networkService, routingService) {
    this.sourceId = state.selectedSourceID;
    this.pageName = state.sources.find(
      source => source.id === this.sourceId
    ).name;
    this.htmlService = htmlService;
    this.networkService = networkService;
    this.routingService = routingService;
  }

  createPage() {
    this.networkService.getTopNewsBySource(this.sourceId).then(data => {
      store.dispatchAction(new LoadArticles(data.articles));

      this.createPageElements(state.articles);
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
      this.htmlService,
      this.networkService,
      this.routingService
    ).createNewsArticlesCards();

    pageElement.appendChild(header);
    pageElement.appendChild(articleCards);

    bodyElement.appendChild(pageElement);
  }
}
