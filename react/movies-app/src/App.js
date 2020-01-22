import React from "react";

import SearchPage from "./containers/search-page/search-page";
import ErrorBoundary from "./components/error-boundary/error-boundary";
// import MovieDetailsPage from "./containers/movie-details-page/movie-details-page";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <SearchPage />
        {/* <MovieDetailsPage /> */}
      </div>
    </ErrorBoundary>
  );
}

export default App;
