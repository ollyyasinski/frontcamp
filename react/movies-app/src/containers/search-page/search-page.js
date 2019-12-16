import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { SEARCH_TYPES } from "../../consts/search-types";
import { SORTING_TYPES } from "../../consts/sorting-types";
import MoviesList from "../../components/movies-list/movies-list";
import Footer from "../../components/footer/footer";
import SearchPageHeader from "../../components/search-page-header/search-page-header";

import { loadMoviesAction } from "../../actions/load-data-action";
import { selectSortOption } from "../../actions/sort-actions";
import { selectSearchOption } from "../../actions/search-actions";

class SearchPage extends Component {
  constructor() {
    super();

    this.state = {
      navigateToSerach: false,
      searchInput: ""
    };
  }

  componentDidMount() {
    this.props.loadMovies(this.props.location.search);
  }

  componentWillReceiveProps(nextProps) {
    const newSearch = nextProps.location.search;
    if (newSearch !== this.props.location.search) {
      this.props.loadMovies(newSearch);
    }
  }

  selectReleaseDateOption() {
    this.props.selectSortOption(SORTING_TYPES.firstOption);
  }

  selectRatingOption() {
    this.props.selectSortOption(SORTING_TYPES.secondOption);
  }

  selectTitleOption() {
    this.props.selectSearchOption(SEARCH_TYPES.firstOption);
  }

  selectGenreOption() {
    this.props.selectSearchOption(SEARCH_TYPES.secondOption);
  }

  handleSearch(event) {
    event.preventDefault();

    const searchWord = event.nativeEvent.currentTarget.querySelector("input")
      .value;

    this.props.history.push({
      pathName: "/search",
      search: `?search=${searchWord}&searchBy=${this.props.searchType.toLowerCase()}`
    });
  }

  render() {
    return (
      <Fragment>
        <SearchPageHeader
          title={"FIND YOUR MOVIE"}
          activeTab={this.props.searchType}
          tabs={SEARCH_TYPES}
          selectFirstOption={() => this.selectTitleOption()}
          selectSecondOption={() => this.selectGenreOption()}
          onSearchClick={event => this.handleSearch(event)}
        />
        <MoviesList
          movies={this.props.moviesList}
          title={
            this.props.moviesList.length > 0
              ? `${this.props.moviesList.length} movie found`
              : null
          }
          activeTab={this.props.sortType}
          tabs={SORTING_TYPES}
          selectFirstOption={() => this.selectReleaseDateOption()}
          selectSecondOption={() => this.selectRatingOption()}
        />
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  moviesList: state.loadDataReducer.moviesList,
  sortType: state.sortReducer.sortType,
  searchType: state.searchReducer.searchType
});

const mapDispatchToProps = dispatch => ({
  loadMovies: searchQuery => dispatch(loadMoviesAction(searchQuery)),
  selectSortOption: option => dispatch(selectSortOption(option)),
  selectSearchOption: option => dispatch(selectSearchOption(option))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchPage));
