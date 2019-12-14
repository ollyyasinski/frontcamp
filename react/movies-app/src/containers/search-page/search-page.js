import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { SEARCH_TYPES } from "../../consts/search-types";
import { SORTING_TYPES } from "../../consts/sorting-types";
import MoviesList from "../../components/movies-list/movies-list";
import Footer from "../../components/footer/footer";
import SearchPageHeader from "../../components/search-page-header/search-page-header";

import { loadMoviesAction } from "../../actions/load-data-action";

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

  componentDidMount() {
    this.props.loadMovies();
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
          movies={this.props.moviesList}
          title={
            this.props.moviesList.length > 0
              ? `${this.props.moviesList.length} movie found`
              : null
          }
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

const mapStateToProps = state => {
  // debugger;
  return {
    moviesList: state.loadDataReducer.moviesList
  };
};

const mapDispatchToProps = dispatch => ({
  loadMovies: () => dispatch(loadMoviesAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
