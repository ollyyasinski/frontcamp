import { ActionTypes } from "./news-actions";

export let state = initialState;

export const store = {
  dispatchAction: action => {
    state = newsReducer(state, action);
  }
};

const initialState = {
  sources: [],
  selectedSourceID: null,
  articles: [],
  selectedArticleID: null
};

function newsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOAD_SOURCES:
      return {
        ...state,
        sources: action.payload
      };
    case ActionTypes.SELECT_SOURCE:
      return {
        ...state,
        selectedSourceID: action.payload
      };

    case ActionTypes.LOAD_ARTICLES:
      const articles = action.payload.map(article => ({
        id: article.publishedAt,
        description: article.description,
        title: article.title,
        url: article.url,
        urlToImage: article.urlToImage
      }));

      return {
        ...state,
        articles: articles
      };

    case ActionTypes.SELECT_ARTICLE:
      return {
        ...state,
        selectedArticleID: action.payload
      };

    default:
      return state;
  }
}
