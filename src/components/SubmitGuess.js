import React, { useState } from "react";

import "./SubmitGuess.css";

const SubmitGuess = ({ movieYear, setCurrentQuestion }) => {
  const [guess, setGuess] = useState("");

  const guessHandler = (e) => {
    setGuess(e.target.value);
  };

  const checkGuess = (e) => {
    e.preventDefault();
    // Check if guess is correct here.

    if (guess === movieYear) {
      console.log("Correct");
      setCurrentQuestion("tt0088763");
    } else {
      console.log("Incorrect");
    }
  };
  return (
    <form>
      <input
        type="text"
        pattern="\d*"
        maxLength="4"
        name="year_guess"
        id="year_guess"
        onChange={guessHandler}
      />
      <label htmlFor="year-guess">(YYYY Format)</label>
      <button type="submit" onClick={checkGuess}>
        Submit
      </button>
    </form>
  );
};

export default SubmitGuess;
