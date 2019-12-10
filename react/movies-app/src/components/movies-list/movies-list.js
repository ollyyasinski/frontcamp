import React, { Fragment } from "react";
import PropTypes from "prop-types";

import MovieItem from "./movie-item/movies-item";
import MoviesListHeader from "./movies-list-header/movies-list-header";
import "./movies-list.css";
import NoMovies from "./no-movies/no-movies";

const MoviesList = ({
  movies,
  title,
  activeTab,
  tabs,
  selectFirstOption,
  selectSecondOption
}) => {
  const items = [];

  for (const movie of movies) {
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
      <MoviesListHeader
        title={title}
        activeTab={activeTab}
        tabs={tabs}
        selectFirstOption={selectFirstOption}
        selectSecondOption={selectSecondOption}
      />
      {items.length > 0 ? (
        <div className="movies-list">{items}</div>
      ) : (
        <NoMovies />
      )}
    </Fragment>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
  title: PropTypes.string,
  activeTab: PropTypes.string,
  tabs: PropTypes.shape({
    firstOption: PropTypes.string,
    secondOption: PropTypes.string
  }),
  selectFirstOption: PropTypes.func,
  selectSecondOption: PropTypes.func
};

export default MoviesList;
