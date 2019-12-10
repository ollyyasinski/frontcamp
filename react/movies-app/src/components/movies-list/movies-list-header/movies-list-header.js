import React from "react";
import PropTypes from "prop-types";

import "./movies-list-header.css";
import Toggle from "../../toggle/toggle";
import { SORTING_TYPES } from "../../../consts/sorting-types";

const MoviesListHeader = ({
  title,
  activeTab,
  selectFirstOption,
  selectSecondOption
}) => (
  <div className="movies-list-header">
    <h4>{title}</h4>
    <Toggle
      title={"SORT BY"}
      firstOption={SORTING_TYPES.releaseDate}
      secondOption={SORTING_TYPES.rating}
      activeTab={activeTab}
      selectFirstOption={selectFirstOption}
      selectSecondOption={selectSecondOption}
    />
  </div>
);

MoviesListHeader.propTypes = {
  title: PropTypes.string,
  activeTab: PropTypes.string,
  onClick: PropTypes.func,
  selectFirstOption: PropTypes.func,
  selectSecondOption: PropTypes.func
};

export default MoviesListHeader;
