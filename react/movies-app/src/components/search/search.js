import React from "react";
import PropTypes from "prop-types";

import "./search.css";

import Toggle from "../toggle/toggle";

const Search = ({ activeTab, tabs, selectFirstOption, selectSecondOption }) => (
  <div className="search__wrapper">
    <form>
      <input className="search__input" placeholder="Search"></input>
      <button>SEARCH</button>
    </form>
    <Toggle
      title={"SEARCH BY"}
      activeTab={activeTab}
      tabs={tabs}
      selectFirstOption={selectFirstOption}
      selectSecondOption={selectSecondOption}
    />
  </div>
);

Search.propTypes = {
  activeTab: PropTypes.string,
  tabs: PropTypes.shape({
    firstOption: PropTypes.string,
    secondOption: PropTypes.string
  }),
  selectFirstOption: PropTypes.func,
  selectSecondOption: PropTypes.func
};

export default Search;
