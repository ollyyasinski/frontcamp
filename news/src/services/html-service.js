export class HTMLService {
  constructor() {}

  createSimpleElement(tag, classList) {
    const newElement = document.createElement(tag);

    newElement.classList.add(...classList);

    return newElement;
  }
}
