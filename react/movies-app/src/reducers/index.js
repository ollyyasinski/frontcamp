import { combineReducers } from "redux";

import loadDataReducer from "./load-data-reducer";
import sortReducer from "./sort-reducer";
import searchReducer from "./search-reducer";

export default combineReducers({
  loadDataReducer,
  sortReducer,
  searchReducer
});
