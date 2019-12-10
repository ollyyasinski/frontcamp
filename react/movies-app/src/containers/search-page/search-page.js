import React, { Component, Fragment } from "react";

import MoviesList from "../../components/movies-list/movies-list";
import Footer from "../../components/footer/footer";

import response from "../../data-mocks/get-movies-response.json";
import { SORTING_TYPES } from "../../consts/sorting-types";
import SearchPageHeader from "../../components/search-page-header/search-page-header";
import { SEARCH_TYPES } from "../../consts/search-types";

import "./search-page.css";

class SearchPage extends Component {
  constructor() {
    super();

    this.state = {
      sortState: {
        active: SORTING_TYPES.firstOption
      },
      searchState: {
        active: SEARCH_TYPES.firstOption
      }
    };
  }

  selectReleaseDateOption() {
    this.setState({
      sortState: {
        active: SORTING_TYPES.firstOption
      }
    });
  }

  selectRatingOption() {
    this.setState({
      sortState: {
        active: SORTING_TYPES.secondOption
      }
    });
  }

  selectTitleOption() {
    this.setState({
      searchState: {
        active: SEARCH_TYPES.firstOption
      }
    });
  }

  selectGenreOption() {
    this.setState({
      searchState: {
        active: SEARCH_TYPES.secondOption
      }
    });
  }

  render() {
    return (
      <Fragment>
        <SearchPageHeader
          title={"FIND YOUR MOVIE"}
          activeTab={this.state.searchState.active}
          tabs={SEARCH_TYPES}
          selectFirstOption={() => this.selectTitleOption()}
          selectSecondOption={() => this.selectGenreOption()}
        />
        <MoviesList
          movies={response.data}
          title={`${response.data.length} movie found`}
          activeTab={this.state.sortState.active}
          tabs={SORTING_TYPES}
          selectFirstOption={() => this.selectReleaseDateOption()}
          selectSecondOption={() => this.selectRatingOption()}
        />
        <Footer />
      </Fragment>
    );
  }
}

export default SearchPage;
