import React from "react";
import PropTypes from "prop-types";

import "./search-page-header.css";

import Search from "../search/search";
import Logo from "../logo/logo";

const SearchPageHeader = ({
  title,
  activeTab,
  tabs,
  selectFirstOption,
  selectSecondOption,
  onSearchClick,
  inputValue
}) => (
  <div className="search-page-header">
    <div className="search-page-header__overlay">
      <Logo />
      <div className="search-page-header__content-wrapper">
        <h1>{title}</h1>
        <Search
          activeTab={activeTab}
          tabs={tabs}
          selectFirstOption={selectFirstOption}
          selectSecondOption={selectSecondOption}
          onSearchClick={onSearchClick}
          inputValue={inputValue}
        />
      </div>
    </div>
  </div>
);

SearchPageHeader.propTypes = {
  title: PropTypes.string,
  activeTab: PropTypes.string,
  tabs: PropTypes.shape({
    firstOption: PropTypes.string,
    secondOption: PropTypes.string
  }),
  selectFirstOption: PropTypes.func,
  selectSecondOption: PropTypes.func,
  onSearchClick: PropTypes.func,
  inputValue: PropTypes.string
};

export default SearchPageHeader;
