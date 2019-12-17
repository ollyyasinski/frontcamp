export const ACTION_TYPES = {
  loadMoviesSuccess: "LOAD_MOVIES_SUCCESS",
  loadMovieByIdSuccess: "LOAD_MOVIE_BY_ID_SUCCESS",
  sortMoviesList: "SORT_MOVIES_LIST",
  updateMoviesList: "UPDATE_MOVIES_LIST"
};

export const loadMoviesActionSuccess = data => ({
  type: ACTION_TYPES.loadMoviesSuccess,
  payload: data
});

export const loadMoviesAction = queryParams => dispatch => {
  fetch(`https://reactjs-cdp.herokuapp.com/movies${queryParams}&limit=100`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(data => dispatch(loadMoviesActionSuccess(data)))
    .catch(() => {});
};

export const loadMovieByIdSuccess = data => ({
  type: ACTION_TYPES.loadMovieByIdSuccess,
  payload: data
});

export const loadMovieByIdAction = id => dispatch => {
  fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(data => dispatch(loadMovieByIdSuccess(data)))
    .catch(() => {});
};

export const sortMoviesList = sortBy => ({
  type: ACTION_TYPES.sortMoviesList,
  payload: sortBy
});

export const updateMoviesList = newList => ({
  type: ACTION_TYPES.updateMoviesList,
  payload: newList
});
