import React from "react";

const MovieCard = ({ movieTitle, moviePoster, movieYear }) => {
  const checkGuess = (e) => {
    e.preventDefault();
    // Check if guess is correct here.
  };

  return (
    <div>
      <img src={moviePoster} alt={movieTitle} />
      <h3>{movieTitle}</h3>
      <form>
        <input
          type="text"
          pattern="\d*"
          maxlength="4"
          name="year-guess"
          id="year-guess"
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
