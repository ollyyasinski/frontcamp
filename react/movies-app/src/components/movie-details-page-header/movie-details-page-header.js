import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./movie-details-page-header.css";
import Rating from "./rating/rating";
import Logo from "../logo/logo";
import SearchIcon from "../../assets/search.svg";

const MovieDetailsPageHeader = ({
  imgSource,
  title,
  year,
  duration,
  genre,
  description,
  rating
}) => (
  <div className="movie-details-page-header">
    <div className="movie-details-page-header__overlay">
      <div className="movie-details-page-header__top-row">
        <Logo />
        <Link to="/search">
          <img src={SearchIcon} alt="Search" />
        </Link>
      </div>

      <div className="movie-details-page-header__content-wrapper">
        <img src={imgSource} alt="Movie poster" />
        <div className="movie-details-page-header__details-wrapper">
          <div className="movie-details-page-header__title-wrapper">
            <h1>{title}</h1>
            <Rating rating={rating} />
          </div>
          <p>{genre}</p>
          <div className="movie-details-page-header__year-duration-wrapper">
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
  duration: PropTypes.any,
  genre: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number
};

export default MovieDetailsPageHeader;
