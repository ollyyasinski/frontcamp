export const ACTION_TYPES = {
  selectSortOption: "SELECT_SORT_OPTION"
};

export const selectSortOption = option => ({
  type: ACTION_TYPES.selectSortOption,
  payload: option
});
