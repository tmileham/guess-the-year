import React, { useState } from "react";

import "./MovieCard.css";

import SubmitGuess from "./SubmitGuess";

const MovieCard = ({
  setCurrentQuestion,
  movieTitle,
  moviePoster,
  movieYear,
}) => {
  return (
    <div className="MovieContainer">
      <div className="MovieItem">
        <img src={moviePoster} alt={movieTitle} />
        <h3 className="title">{movieTitle}</h3>
      </div>
      <SubmitGuess
        setCurrentQuestion={setCurrentQuestion}
        movieYear={movieYear}
      />
    </div>
  );
};

export default MovieCard;
