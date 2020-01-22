import React from "react";
import PropTypes from "prop-types";

import "./toggle.css";

const Toggle = ({
  title,
  activeTab,
  tabs,
  selectFirstOption,
  selectSecondOption
}) => (
  <div className="toggle__wrapper">
    <p className="toggle__title">{title}</p>
    <div className="toggle">
      <div
        onClick={selectFirstOption}
        className={activeTab === tabs.firstOption ? "selected" : null}
      >
        {tabs.firstOption}
      </div>
      <div
        onClick={selectSecondOption}
        className={activeTab === tabs.secondOption ? "selected" : null}
      >
        {tabs.secondOption}
      </div>
    </div>
  </div>
);

Toggle.propsTypes = {
  title: PropTypes.string,
  activeTab: PropTypes.string,
  tabs: PropTypes.shape({
    firstOption: PropTypes.string,
    secondOption: PropTypes.string
  }),
  selectFirstOption: PropTypes.func,
  selectSecondOption: PropTypes.func
};

export default Toggle;
