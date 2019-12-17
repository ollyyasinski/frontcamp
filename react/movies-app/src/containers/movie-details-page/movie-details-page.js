import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import response from "../../data-mocks/get-movies-response.json";
import MoviesList from "../../components/movies-list/movies-list";
import Footer from "../../components/footer/footer";
import MovieDetailsPageHeader from "../../components/movie-details-page-header/movie-details-page-header";
import { SEARCH_TYPES } from "../../consts/search-types.js";

import {
  loadMovieByIdAction,
  loadMoviesAction
} from "../../actions/movies-action";

class MovieDetailsPage extends Component {
  componentDidMount() {
    this.props.loadMovieByIdAction(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedMovie !== this.props.selectedMovie) {
      this.props.loadMovies(
        `?search=${nextProps.selectedMovie.genres[0].toLowerCase()}&searchBy=${SEARCH_TYPES.secondOption.toLowerCase()}`
      );
    }
  }

  render() {
    const selectedMovie = this.props.selectedMovie;
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
        <MoviesList
          movies={this.props.moviesList}
          title={`Films by ${this.props.selectedMovie.genres[0]} genre`}
          supportQuery={false}
        />
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  moviesList: state.moviesReducer.moviesList,
  selectedMovie: state.moviesReducer.selectedMovie
});

const mapDispatchToProps = dispatch => ({
  loadMovies: searchQuery => dispatch(loadMoviesAction(searchQuery)),
  loadMovieByIdAction: id => dispatch(loadMovieByIdAction(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailsPage);
