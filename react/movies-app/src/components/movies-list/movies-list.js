import React, { Fragment } from "react";
import PropTypes from "prop-types";

import MovieItem from "./movie-item/movies-item";
import MoviesListHeader from "./movies-list-header/movies-list-header";
import "./movies-list.css";

const MoviesList = props => {
  const items = [];

  for (const movie of props.movies) {
    items.push(
      <MovieItem
        key={movie.id}
        imgSource={movie.poster_path}
        title={movie.title}
        year={movie.release_date.slice(0, 4)}
        genre={movie.genres.join(", ")}
      />
    );
  }

  return (
    <Fragment>
      <MoviesListHeader title={props.title} />
      <div className="movies-list">{items}</div>
    </Fragment>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
  title: PropTypes.string
};

export default MoviesList;
