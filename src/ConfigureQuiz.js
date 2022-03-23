import React, { useState, useEffect } from "react";

import "./ConfigureQuiz.css";

//components

import MovieResult from "./components/configure/MovieResult";
import SearchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com/?apikey=42041cf9";

const ConfigureQuiz = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(data.Search);
  };

  return (
    <div className="configureContainer">
      <h1>Setup / Configure Quiz</h1>
      <p>Search and select movies for the quiz</p>
      <div className="SelectedItems">
        <p>Selected Movies:</p>
        <p>No movies selected</p>
        <button>Save</button>
      </div>

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
          {movies
            .filter((movie) => movie.Type === "movie" && movie.Poster !== "N/A")
            .map((movie) => (
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
