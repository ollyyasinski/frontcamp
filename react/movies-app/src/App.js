import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";

import SearchPage from "./containers/search-page/search-page";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import MovieDetailsPage from "./containers/movie-details-page/movie-details-page";
import NotFound from "./components/not-found/not-found";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/search" component={SearchPage} />
            <Route exact from="/" component={SearchPage} />
            <Route exact path="/film/:id" component={MovieDetailsPage} />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect from="*" to="/not-found" />
          </Switch>
        </BrowserRouter>
      </div>
    </ErrorBoundary>
  );
}

export default App;
