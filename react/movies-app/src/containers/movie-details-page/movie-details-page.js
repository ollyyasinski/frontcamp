import React, { Component, Fragment } from "react";

import MoviesList from "../../components/movies-list/movies-list";
import Footer from "../../components/footer/footer";

import response from "../../data-mocks/get-movies-response.json";

import "./search-page.css";

class SearchPage extends Component {
  render() {
    const genre = "Drame";

    return (
      <Fragment>
        <MoviesList movies={response.data} title={`Films by ${genre} genre`} />
        <Footer />
      </Fragment>
    );
  }
}

export default SearchPage;
