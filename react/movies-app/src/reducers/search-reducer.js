import { ACTION_TYPES } from "../actions/search-actions";
import { SEARCH_TYPES } from "../consts/search-types";

export default (
  state = {
    searchType: SEARCH_TYPES.firstOption
  },
  action
) => {
  switch (action.type) {
    case ACTION_TYPES.selectSearchOption:
      return {
        ...state,
        searchType: action.payload
      };
    default:
      return state;
  }
};
