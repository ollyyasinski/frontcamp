import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { SEARCH_TYPES } from "../../consts/search-types";
import { SORTING_TYPES, SORTING_TYPES_MAP } from "../../consts/sorting-types";
import MoviesList from "../../components/movies-list/movies-list";
import Footer from "../../components/footer/footer";
import SearchPageHeader from "../../components/search-page-header/search-page-header";

import { loadMoviesAction, sortMoviesList } from "../../actions/movies-action";
import { selectSortOption } from "../../actions/sort-actions";
import { selectSearchOption } from "../../actions/search-actions";

class SearchPage extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (this.props.location.search) {
      this.props.loadMovies(
        `${
          this.props.location.search
        }&searchBy=${this.props.searchType.toLowerCase()}`
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    const newSearch = nextProps.location.search;
    if (newSearch !== this.props.location.search) {
      this.props.loadMovies(
        `${newSearch}&searchBy=${this.props.searchType.toLowerCase()}`
      );
    }
  }

  selectReleaseDateOption() {
    this.props.selectSortOption(SORTING_TYPES.firstOption);
    this.props.sortMoviesList(SORTING_TYPES_MAP[SORTING_TYPES.firstOption]);
  }

  selectRatingOption() {
    const test = SORTING_TYPES_MAP[SORTING_TYPES.secondOption];
    this.props.selectSortOption(SORTING_TYPES.secondOption);
    this.props.sortMoviesList(test);
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
      search: `?search=${searchWord}`
    });
  }

  render() {
    const searchQueryWord = this.props.location.search.match(/=(.+)/);

    return (
      <Fragment>
        <SearchPageHeader
          title={"FIND YOUR MOVIE"}
          activeTab={this.props.searchType}
          tabs={SEARCH_TYPES}
          selectFirstOption={() => this.selectTitleOption()}
          selectSecondOption={() => this.selectGenreOption()}
          onSearchClick={event => this.handleSearch(event)}
          inputValue={searchQueryWord ? searchQueryWord[1] : null}
        />
        <MoviesList
          movies={this.props.moviesList}
          title={
            this.props.moviesList.length > 0 || this.props.location.search
              ? `${this.props.moviesList.length} movie found`
              : null
          }
          activeTab={this.props.sortType}
          tabs={SORTING_TYPES}
          selectFirstOption={() => this.selectReleaseDateOption()}
          selectSecondOption={() => this.selectRatingOption()}
          searchQuery={this.props.location.search}
        />
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  moviesList: state.moviesReducer.moviesList,
  sortType: state.sortReducer.sortType,
  searchType: state.searchReducer.searchType
});

const mapDispatchToProps = dispatch => ({
  loadMovies: searchQuery => dispatch(loadMoviesAction(searchQuery)),
  sortMoviesList: sortBy => dispatch(sortMoviesList(sortBy)),
  selectSortOption: option => dispatch(selectSortOption(option)),
  selectSearchOption: option => dispatch(selectSearchOption(option))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchPage));
