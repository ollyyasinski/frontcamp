import React, { Component, Fragment } from "react";

import MoviesList from "../../components/movies-list/movies-list";
import Footer from "../../components/footer/footer";

import response from "../../data-mocks/get-movies-response.json";
import { SORTING_TYPES } from "../../consts/sorting-types";

class SearchPage extends Component {
  constructor() {
    super();

    this.state = {
      sortState: {
        active: SORTING_TYPES.releaseDate
      }
    };
  }

  selectReleaseDateOption() {
    this.setState({
      sortState: {
        active: SORTING_TYPES.releaseDate
      }
    });
  }

  selectRatingOption() {
    this.setState({
      sortState: {
        active: SORTING_TYPES.rating
      }
    });
  }

  render() {
    return (
      <Fragment>
        <MoviesList
          movies={response.data}
          title={`${response.data.length} movie found`}
          activeTab={this.state.sortState.active}
          selectFirstOption={() => this.selectReleaseDateOption()}
          selectSecondOption={() => this.selectRatingOption()}
        />
        <Footer />
      </Fragment>
    );
  }
}

export default SearchPage;
