import React from "react";
// import logo from "./logo.svg";

// import MoviesList from "./components/movies-list/movies-list";
// import Footer from "./components/footer/footer";
import "./App.css";
import SearchPage from "./containers/search-page/search-page";
import MovieDetailsPage from "./containers/movie-details-page/movie-details-page";
// import response from "./data-mocks/get-movies-response.json";

function App() {
  return (
    <div className="App">
      {/* <SearchPage /> */}
      <MovieDetailsPage />
    </div>
  );
}

export default App;
