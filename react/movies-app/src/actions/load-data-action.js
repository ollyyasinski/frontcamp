export const ACTION_TYPES = {
  loadMoviesSuccess: "LOAD_MOVIES_SUCCESS"
};

export const loadMoviesActionSuccess = data => ({
  type: ACTION_TYPES.loadMoviesSuccess,
  payload: data
});

export const loadMoviesAction = () => dispatch => {
  fetch("https://reactjs-cdp.herokuapp.com/movies")
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
