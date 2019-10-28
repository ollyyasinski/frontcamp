export class HTMLService {
  constructor() {}

  createSimpleElement(tag, classList) {
    const newElement = document.createElement(tag);

    if (classList) {
      newElement.classList.add(...classList);
    }

    return newElement;
  }
}
