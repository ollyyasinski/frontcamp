import _ from "lodash";

import "./style.css";
import Icon from "./icon.png";
import { NewsPage } from "./news-page/news-page";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  const testPage = new NewsPage();
  testPage.fetchData();

  return element;
}

document.body.appendChild(component());
