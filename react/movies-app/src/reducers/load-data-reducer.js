import { ACTION_TYPES } from "../actions/load-data-action";

export default (
  state = {
    moviesList: []
  },
  action
) => {
  switch (action.type) {
    case ACTION_TYPES.loadMoviesSuccess:
      return {
        ...state,
        moviesList: action.payload.data
      };
    default:
      return state;
  }
};
