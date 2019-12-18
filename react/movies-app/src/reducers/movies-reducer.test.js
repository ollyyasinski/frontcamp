import reducer from "./movies-reducer";
import { ACTION_TYPES } from "../actions/movies-action";
import { SORTING_TYPES_MAP } from "../consts/sorting-types";

const initialStateMock = {
  moviesList: [],
  selectedMovie: {
    poster_path: "",
    title: "",
    release_date: "",
    genres: [],
    runtime: null,
    overview: "",
    vote_average: null,
    rating: null
  }
};

describe("Movies reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialStateMock);
  });

  it("should handle loadMoviesSuccess action", () => {
    expect(
      reducer([], {
        type: ACTION_TYPES.loadMoviesSuccess,
        payload: {
          data: ["test"]
        }
      })
    ).toEqual({
      moviesList: ["test"]
    });
  });

  it("should handle loadMovieByIdSuccess action", () => {
    expect(
      reducer([], {
        type: ACTION_TYPES.loadMovieByIdSuccess,
        payload: ["test"]
      })
    ).toEqual({
      selectedMovie: ["test"]
    });
  });

  it("should handle updateMoviesList action", () => {
    expect(
      reducer([], {
        type: ACTION_TYPES.updateMoviesList,
        payload: ["test"]
      })
    ).toEqual({
      selectedMovie: ["test"]
    });
  });

  it("should handle sortMoviesList action", () => {
    expect(
      reducer(
        {
          moviesList: [{ vote_average: "a" }, { vote_average: "b" }]
        },
        {
          type: ACTION_TYPES.sortMoviesList,
          payload: SORTING_TYPES_MAP.RATING
        }
      )
    ).toEqual({
      moviesList: [{ vote_average: "a" }, { vote_average: "b" }]
    });
  });
});
