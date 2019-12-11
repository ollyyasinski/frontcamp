import React, { Component, Fragment } from "react";

import MoviesList from "../../components/movies-list/movies-list";
import Footer from "../../components/footer/footer";

import response from "../../data-mocks/get-movies-response.json";

import "./movie-details-page.css";
import MovieDetailsPageHeader from "../../components/movie-details-page-header/movie-details-page-header";

class MovieDetailsPage extends Component {
  render() {
    const selectedMovie = response.data[39];
    const genre = selectedMovie.genres.join(", ");

    return (
      <Fragment>
        <MovieDetailsPageHeader
          imgSource={selectedMovie.poster_path}
          title={selectedMovie.title}
          year={selectedMovie.release_date.slice(0, 4)}
          genre={genre}
          duration={selectedMovie.runtime ? selectedMovie.runtime : "-"}
          description={selectedMovie.overview}
          rating={selectedMovie.vote_average}
        />
        <MoviesList movies={response.data} title={`Films by ${genre} genre`} />
        <Footer />
      </Fragment>
    );
  }
}

export default MovieDetailsPage;
