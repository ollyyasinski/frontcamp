import { combineReducers } from "redux";

import moviesReducer from "./movies-reducer";
import sortReducer from "./sort-reducer";
import searchReducer from "./search-reducer";

export default combineReducers({
  moviesReducer,
  sortReducer,
  searchReducer
});
