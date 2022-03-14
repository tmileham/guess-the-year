import React, { useState, useEffect } from "react";
import "./App.css";

import API_KEY from "./API_KEY";
import MovieCard from "./components/MovieCard";

const App = () => {
  //States
  const [isLoading, setLoading] = useState(true);
  const [questionSet, setQuestionSet] = useState(["tt0114709", "tt0088763"]);

  const [currentQuestion, setCurrentQuestion] = useState("tt0114709");
  const [movie, setMovie] = useState();

  // useEffect hook run on app launch, for now.
  useEffect(() => {
    searchMovie(currentQuestion);
  }, [currentQuestion]);

  const createQuestionSet = () => {};

  // Retrieve Data from API
  const searchMovie = async (id) => {
    const response = await fetch(`${API_KEY + id}`);
    const data = await response.json();

    setMovie(data);
    setLoading(false);
  };

  return (
    <div className="App">
      <h1 className="title">Guess the year</h1>
      {isLoading ? (
        <div className="loading">Loading Movie</div>
      ) : (
        <MovieCard
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          movieTitle={movie.Title}
          moviePoster={movie.Poster}
          movieYear={movie.Year}
        />
      )}
    </div>
  );
};

export default App;
