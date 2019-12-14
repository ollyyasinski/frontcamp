import { ACTION_TYPES } from "../actions/load-data-action";

export default (
  state = {
    maviesList: null
  },
  action
) => {
  switch (action.type) {
    case ACTION_TYPES.loadMoviesSuccess:
      return {
        ...state,
        moviesList: action.payload
      };
    default:
      return state;
  }
};
