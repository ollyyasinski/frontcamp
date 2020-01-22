import * as actions from "./movies-action";

describe("Movies Actions", () => {
  it("should create an action for successfully loaded movies", () => {
    const payloadMock = "test";
    const expectedAction = {
      type: actions.ACTION_TYPES.loadMoviesSuccess,
      payload: payloadMock
    };
    expect(actions.loadMoviesActionSuccess(payloadMock)).toEqual(
      expectedAction
    );
  });

  it("should create an action for successfully loaded movie by id", () => {
    const payloadMock = "test";
    const expectedAction = {
      type: actions.ACTION_TYPES.loadMovieByIdSuccess,
      payload: payloadMock
    };
    expect(actions.loadMovieByIdSuccess(payloadMock)).toEqual(expectedAction);
  });

  it("should create an action to sort movies", () => {
    const payloadMock = "test";
    const expectedAction = {
      type: actions.ACTION_TYPES.sortMoviesList,
      payload: payloadMock
    };
    expect(actions.sortMoviesList(payloadMock)).toEqual(expectedAction);
  });

  it("should create an action to update movies list", () => {
    const payloadMock = "test";
    const expectedAction = {
      type: actions.ACTION_TYPES.updateMoviesList,
      payload: payloadMock
    };
    expect(actions.updateMoviesList(payloadMock)).toEqual(expectedAction);
  });
});
