import React from "react";

const SubmitGuess = ({ nextQuestion, year, setYear }) => {
  const updateYear = (e) => {
    setYear(e.target.value);
  };

  return (
    <form className="answerForm" onSubmit={nextQuestion}>
      <input
        type="text"
        pattern="\d*"
        onChange={updateYear}
        value={year}
        maxLength="4"
      ></input>
      <button className="submitButton" type="submit">
        Submit answer
      </button>
    </form>
  );
};

export default SubmitGuess;
