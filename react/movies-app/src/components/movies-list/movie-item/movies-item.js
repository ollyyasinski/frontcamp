import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./movies-item.css";

const MovieItem = ({ imgSource, title, year, genre, id }) => (
  <Link to={`/film/${id}`}>
    <div className="movie-item">
      <img src={imgSource} alt="movie poster"></img>
      <div className="movie-item__details-wrapper">
        <div className="movie-item__title-wrapper">
          <h2>{title}</h2>
          <div className="movie-item__year">{year}</div>
        </div>
        <p>{genre}</p>
      </div>
    </div>
  </Link>
);

MovieItem.propTypes = {
  id: PropTypes.number,
  imgSource: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  genre: PropTypes.string
};

export default MovieItem;
