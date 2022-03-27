import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { QuizGameContext } from "../../App";

const Configure = () => {
  const { guessCount, setGuessCount } = useContext(QuizGameContext);

  const guessCountHandler = (e) => {
    if (Number(e.target.value) !== 0) {
      setGuessCount(Number(e.target.value));
    }
  };

  return (
    <>
      <h2>Quiz Options</h2>

      <div className="questionSetContainer">
        <p>Select question set:</p>
        <button className="currentQuestionSet activeQuestionSet" onClick={null}>
          Golden Oldies
        </button>
        <button className="currentQuestionSet" onClick={null}>
          Animation
        </button>
        <div className="userDefineQuestionContainer">
          <button className="currentQuestionSet" onClick={null}>
            User Defined
          </button>
          <div>
            <Link to="/configure">Select your own movies</Link>
          </div>
        </div>
      </div>
      <div className="attemptCounterContainer">
        <p>Guess Count</p>
        <input
          type="number"
          value={guessCount}
          onChange={guessCountHandler}
        ></input>
      </div>
    </>
  );
};

export default Configure;
