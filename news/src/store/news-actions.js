export const ActionTypes = {
  LOAD_SOURCES: "Load Sources",
  SELECT_SOURCE: "Select Source",
  LOAD_ARTICLES: "Load Articles",
  SELECT_ARTICLE: "Select Article"
};

export class LoadSources {
  constructor(payload) {
    this.type = ActionTypes.LOAD_SOURCES;
    this.payload = payload;
  }
}

export class SelectSource {
  constructor(payload) {
    this.type = ActionTypes.SELECT_SOURCE;
    this.payload = payload;
  }
}

export class LoadArticles {
  constructor(payload) {
    this.type = ActionTypes.LOAD_ARTICLES;
    this.payload = payload;
  }
}

export class SelectArticle {
  constructor(payload) {
    this.type = ActionTypes.SELECT_ARTICLE;
    this.payload = payload;
  }
}
