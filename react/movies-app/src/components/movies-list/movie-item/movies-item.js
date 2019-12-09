import React from "react";
import PropTypes from "prop-types";

import "./movies-item.css";

const MovieItem = props => (
  <div className="movie-item">
    <img src={props.imgSource} alt="movie poster"></img>
    <div className="movie-item__details-wrapper">
      <div className="movie-item__title-wrapper">
        <h2>{props.title}</h2>
        <div className="movie-item__year">{props.year}</div>
      </div>
      <p>{props.genre}</p>
    </div>
  </div>
);

MovieItem.propTypes = {
  imgSource: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  genre: PropTypes.string
};

export default MovieItem;
