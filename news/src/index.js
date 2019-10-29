import "./style.css";

import { LandingPage } from "./containers/landing-page/landing-page";
import { HTMLService } from "./services/html-service";
import { NetworkService } from "./services/network-service";
import { RoutingService } from "./services/routing-service";

const htmlService = new HTMLService();
const networkService = new NetworkService();
const routingService = new RoutingService();

new LandingPage(htmlService, networkService, routingService).createPage();
