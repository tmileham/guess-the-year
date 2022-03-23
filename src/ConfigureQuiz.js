import React, { useState, useEffect } from "react";

//components

import MovieResult from "./components/configure/MovieResult";
import SearchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com/?apikey=42041cf9";

const ConfigureQuiz = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    searchMovies("as");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div>
      <h1>Setup / Configure Quiz</h1>
      <div className="search">
        <input
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieResult movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default ConfigureQuiz;
