import React from "react";
import PropTypes from "prop-types";

import "./toggle.css";

import { SORTING_TYPES } from "../../consts/sorting-types";

const Toggle = ({
  title,
  firstOption,
  secondOption,
  activeTab,
  selectFirstOption,
  selectSecondOption
}) => (
  <div className="toggle__wrapper">
    <p className="toggle__title">{title}</p>
    <div className="toggle">
      <div
        onClick={selectFirstOption}
        className={activeTab === SORTING_TYPES.releaseDate ? "selected" : null}
      >
        {firstOption}
      </div>
      <div
        onClick={selectSecondOption}
        className={activeTab === SORTING_TYPES.rating ? "selected" : null}
      >
        {secondOption}
      </div>
    </div>
  </div>
);

Toggle.propsTypes = {
  title: PropTypes.string,
  firstOption: PropTypes.string,
  secondOption: PropTypes.string,
  activeTab: PropTypes.string,
  selectFirstOption: PropTypes.func,
  selectSecondOption: PropTypes.func
};

export default Toggle;
