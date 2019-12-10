import React, { Component, Fragment } from "react";

import MoviesList from "../../components/movies-list/movies-list";
import Footer from "../../components/footer/footer";

import response from "../../data-mocks/get-movies-response.json";

import "./search-page.css";
import MovieDetailsPageHeader from "../../components/movie-details-page-header/movie-details-page-header";

class SearchPage extends Component {
  render() {
    const genre = "Drame";
    const selectedMovie = response.data[3];

    return (
      <Fragment>
        <MovieDetailsPageHeader
          imgSource={selectedMovie.poster_path}
          title={selectedMovie.title}
          year={selectedMovie.release_date.slice(0, 4)}
          genre={selectedMovie.genres.join(", ")}
          duration={selectedMovie.runtime ? selectedMovie.runtime : "-"}
          description={selectedMovie.overview}
        />
        <MoviesList movies={response.data} title={`Films by ${genre} genre`} />
        <Footer />
      </Fragment>
    );
  }
}

export default SearchPage;
