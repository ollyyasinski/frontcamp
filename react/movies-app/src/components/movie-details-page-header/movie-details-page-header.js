import React from "react";
import PropTypes from "prop-types";

import "./search-page-header.css";
import Logo from "../logo/logo";

const MovieDetailsPageHeader = ({
  imgSource,
  title,
  year,
  duration,
  genre,
  description
}) => (
  <div className="movie-detals-page-header">
    <div className="movie-detals-page-header__overlay">
      <Logo />
      <div className="movie-detals-page-header__content-wrapper">
        <img src={imgSource} alt="Movie poster" />
        <div clasName="movie-details-page-header__details-wrapper">
          <h1>{title}</h1>
          <p>{genre}</p>
          <div>
            <div>{year}</div>
            <div>{duration}</div>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  </div>
);

MovieDetailsPageHeader.propTypes = {
  imgSource: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  duration: PropTypes.string,
  genre: PropTypes.string,
  description: PropTypes.string
};

export default MovieDetailsPageHeader;
