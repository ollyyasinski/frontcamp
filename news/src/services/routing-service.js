import { LandingPage } from "../containers/landing-page/landing-page";
import { TopNewsPage } from "../containers/top-news-page/top-news-page";

export class RoutingService {
  constructor() {}

  navigateToLandingPage() {
    const body = document.querySelector("body");
    body.innerHTML = "";

    new LandingPage(...arguments).createPage();
  }

  navigateToTopNewsPage() {
    const body = document.querySelector("body");
    body.innerHTML = "";

    new TopNewsPage(...arguments).createPage();
  }
}
