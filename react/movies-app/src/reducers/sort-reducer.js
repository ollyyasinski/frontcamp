import { ACTION_TYPES } from "../actions/sort-actions";
import { SORTING_TYPES } from "../consts/sorting-types";

export default (
  state = {
    sortType: SORTING_TYPES.firstOption
  },
  action
) => {
  switch (action.type) {
    case ACTION_TYPES.selectSortOption:
      return {
        ...state,
        sortType: action.payload
      };
    default:
      return state;
  }
};
