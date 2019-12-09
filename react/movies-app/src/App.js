import React from "react";
import logo from "./logo.svg";

import MoviesList from "./components/movies-list/movies-list";
import Footer from "./components/footer/footer";
import "./App.css";
import response from "./data-mocks/get-movies-response.json";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, Vlad!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <MoviesList
        movies={response.data}
        title={`${response.data.length} movie found`}
      />
      <Footer />
    </div>
  );
}

export default App;