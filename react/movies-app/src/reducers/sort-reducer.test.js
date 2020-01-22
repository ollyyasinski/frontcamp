import reducer from "./sort-reducer";
import { ACTION_TYPES } from "../actions/sort-actions";
import { SORTING_TYPES } from "../consts/sorting-types";

const initialStateMock = {
  sortType: SORTING_TYPES.firstOption
};
describe("Sort reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialStateMock);
  });

  it("should handle search action", () => {
    expect(
      reducer([], {
        type: ACTION_TYPES.selectSortOption,
        payload: SORTING_TYPES.secondOption
      })
    ).toEqual({
      sortType: SORTING_TYPES.secondOption
    });
  });
});
