import React, { Component, Fragment } from "react";
// import { connect } from "react-redux";

import response from "../../data-mocks/get-movies-response.json";
import MoviesList from "../../components/movies-list/movies-list";
import Footer from "../../components/footer/footer";
import MovieDetailsPageHeader from "../../components/movie-details-page-header/movie-details-page-header";
// import loadMoviesAation from "../../actions/load-data-action";

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

// const mapStateToProps = state => ({
//   moviesList: state.moviesList
// });

// const mapDispatchToProps = dispatch => ({
//   loadMovies: () => dispatch(loadMoviesAation())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
export default MovieDetailsPage;
