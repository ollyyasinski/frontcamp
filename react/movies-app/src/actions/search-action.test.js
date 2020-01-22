import * as actions from "./movies-action";

describe("Search Actions", () => {
  it("should create an action for successful selection of sort option", () => {
    const payloadMock = "test";
    const expectedAction = {
      type: actions.ACTION_TYPES.selectSearchOption,
      payload: payloadMock
    };
    expect(actions.selectSearchOption(payloadMock)).toEqual(expectedAction);
  });
});
