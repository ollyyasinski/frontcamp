import React from "react";
import PropTypes from "prop-types";

import "./movies-list-header.css";

const MoviesListHeader = props => (
  <div className="movies-list-header">
    <h4>{props.title}</h4>
  </div>
);

MoviesListHeader.propTypes = {
  title: PropTypes.string
};
export default MoviesListHeader;
