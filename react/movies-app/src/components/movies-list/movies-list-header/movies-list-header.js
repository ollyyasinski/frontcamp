import React from "react";
import PropTypes from "prop-types";

import "./movies-list-header.css";

import Toggle from "../../toggle/toggle";

const MoviesListHeader = ({
  title,
  activeTab,
  tabs,
  selectFirstOption,
  selectSecondOption
}) => (
  <div className="movies-list-header">
    <h4>{title}</h4>
    {tabs && (
      <Toggle
        title={"SORT BY"}
        activeTab={activeTab}
        tabs={tabs}
        selectFirstOption={selectFirstOption}
        selectSecondOption={selectSecondOption}
      />
    )}
  </div>
);

MoviesListHeader.propTypes = {
  title: PropTypes.string,
  activeTab: PropTypes.string,
  tabs: PropTypes.shape({
    firstOption: PropTypes.string,
    secondOption: PropTypes.string
  }),
  selectFirstOption: PropTypes.func,
  selectSecondOption: PropTypes.func
};

export default MoviesListHeader;
