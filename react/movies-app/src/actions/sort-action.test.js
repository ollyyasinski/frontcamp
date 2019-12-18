import * as actions from "./sort-action";

describe("Sort Actions", () => {
  it("should create an action for successful selection of dort option", () => {
    const payloadMock = "test";
    const expectedAction = {
      type: actions.ACTION_TYPES.selectSortOption,
      payload: payloadMock
    };
    expect(actions.selectSortOption(payloadMock)).toEqual(expectedAction);
  });
});
