import _ from "lodash";

import "./style.css";

import { HTMLService } from "./services/html-service";
import { LandingPage } from "./containers/landing-page/landing-page";

const htmlService = new HTMLService();
const bodyElement = document.querySelector("body");
const landingPage = new LandingPage(htmlService).createLandingPage();

bodyElement.appendChild(landingPage);

// function component() {
//   const element = document.createElement("div");
//   const htmlService = new HTMLService();

//   // Lodash, currently included via a script, is required for this line to work
//   // element.innerHTML = _.join(["Hello", "webpack"], " ");
//   // element.classList.add("hello");

//   // // Add the image to our existing div.
//   // const myIcon = new Image();
//   // myIcon.src = Icon;

//   // element.appendChild(myIcon);

//   const testPage = new NewsPage();
//   testPage.fetchData();

//   const header = new Header("name", false, htmlService).createHeader();
//   element.appendChild(header);

//   return element;
// }

// document.body.appendChild(component());
