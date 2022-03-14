import React, { useState } from "react";

import "./MovieCard.css";

const MovieCard = ({ movieTitle, moviePoster, movieYear }) => {
  const [guess, setGuess] = useState("");

  const guessHandler = (e) => {
    setGuess(Number(e.target.value));
  };

  const checkGuess = (e) => {
    e.preventDefault();
    // Check if guess is correct here.

    if (guess == movieYear) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
    }
  };

  return (
    <div className="MovieContainer">
      <div className="MovieItem">
        <img src={moviePoster} alt={movieTitle} />
        <h3 className="title">{movieTitle}</h3>
      </div>
      <form>
        <input
          type="text"
          pattern="\d*"
          // maxlength="4"
          name="year_guess"
          id="year_guess"
          onChange={guessHandler}
        />
        <label htmlFor="year-guess">(YYYY Format)</label>
        <button type="submit" onClick={checkGuess}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default MovieCard;
