import reducer from "./search-reducer";
import { ACTION_TYPES } from "../actions/search-actions";
import { SEARCH_TYPES } from "../consts/search-types";

const initialStateMock = {
  searchType: SEARCH_TYPES.firstOption
};

describe("Search reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialStateMock);
  });

  it("should handle select search option action", () => {
    expect(
      reducer([], {
        type: ACTION_TYPES.selectSearchOption,
        payload: SEARCH_TYPES.secondOption
      })
    ).toEqual({
      searchType: SEARCH_TYPES.secondOption
    });
  });
});
