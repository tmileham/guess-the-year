import React, { useState, useEffect } from "react";

import MovieResult from "./MovieResult";
import SearchIcon from "../../assets/svg/search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=42041cf9";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <>
      <h1>Setup / Configure Quiz</h1>
      <p>Search and select movies for the quiz</p>
      <div className="search">
        <input
          placeholder="Search for a movie"
          value={searchTerm}
          ref={(input) => input && input.focus()}
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
          {movies
            .filter((movie) => movie.Type === "movie" && movie.Poster !== "N/A")
            .map((movie) => (
              <>
                <MovieResult movie={movie} setSearchTerm={setSearchTerm} />
              </>
            ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies Found</h2>
        </div>
      )}
    </>
  );
};

export default MovieSearch;
