import React, { useState, useEffect } from "react";
import "./App.css";

import API_KEY from "./API_KEY";
import MovieCard from "./components/MovieCard";

const App = () => {
  // Example Movie, for now.
  const TEMP_EXAMPLE_MOVIE_ID = "tt0114709";

  //States
  const [isLoading, setLoading] = useState(true);
  const [movie, setMovie] = useState();

  // useEffect hook run on app launch, for now.
  useEffect(() => {
    searchMovie(TEMP_EXAMPLE_MOVIE_ID);
  }, []);

  // Retrieve Data from API
  const searchMovie = async (id) => {
    const response = await fetch(`${API_KEY + id}`);
    const data = await response.json();

    setMovie(data);
    setLoading(false);
  };

  return (
    <div className="App">
      <h1 className="title">Guess the year of release?</h1>
      {isLoading ? (
        <div className="loading">Loading Movie</div>
      ) : (
        <MovieCard
          movieTitle={movie.Title}
          moviePoster={movie.Poster}
          movieYear={movie.Year}
        />
      )}
    </div>
  );
};

export default App;
