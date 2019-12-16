export const ACTION_TYPES = {
  selectSearchOption: "SELECT_SEARCH_OPTION"
};

export const selectSearchOption = option => ({
  type: ACTION_TYPES.selectSearchOption,
  payload: option
});
