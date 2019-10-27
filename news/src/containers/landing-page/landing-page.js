import css from "./landing-page.css";

import { Header } from "../../components/header/header";
import { NewsChannelCards } from "../../components/news-channels/news-channels";

export class LandingPage {
  constructor(htmlService) {
    this.htmlService = htmlService;
  }

  createLandingPage() {
    const pageElement = this.htmlService.createSimpleElement("div", [
      "landing-page"
    ]);
    const cards = [
      { name: "test1", description: "test description 1", url: "test" },
      { name: "test2", description: "test description 2", url: "test" }
    ];
    const header = new Header(
      "News Channels",
      false,
      this.htmlService
    ).createHeader();

    const channelCards = new NewsChannelCards(
      cards,
      this.htmlService
    ).createNewsChannelCards();

    pageElement.appendChild(header);
    pageElement.appendChild(channelCards);

    return pageElement;
  }
}
