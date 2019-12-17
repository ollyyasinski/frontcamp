import { ACTION_TYPES } from "../actions/movies-action";
import { SORTING_TYPES_MAP } from "../consts/sorting-types";

export default (
  state = {
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
  },
  action
) => {
  switch (action.type) {
    case ACTION_TYPES.loadMoviesSuccess:
      return {
        ...state,
        moviesList: action.payload.data
      };
    case ACTION_TYPES.loadMovieByIdSuccess:
      return {
        ...state,
        selectedMovie: action.payload
      };
    case ACTION_TYPES.updateMoviesList:
      return {
        ...state,
        selectedMovie: action.payload
      };
    case ACTION_TYPES.sortMoviesList:
      return {
        ...state,
        moviesList: state.moviesList.sort((a, b) =>
          action.payload === SORTING_TYPES_MAP.RATING
            ? b[action.payload] - a[action.payload]
            : new Date(b[action.payload]) - new Date(a[action.payload])
        )
      };
    default:
      return state;
  }
};
