import React from "react";

const SubmitGuess = ({ answerHandler, year, setYear }) => {
  const updateYear = (e) => {
    if (!/^$|^[0-9]+$/.test(e.target.value)) {
      alert("You may enter only numeric characters");
      return;
    }
    setYear(e.target.value);
  };

  return (
    <form className="answerForm" onSubmit={answerHandler}>
      <input
        type="text"
        onChange={updateYear}
        value={year}
        maxLength="4"
      ></input>
      <p className="format">Please enter in YYYY format</p>
      <button className="submitButton" type="submit">
        Submit answer
      </button>
    </form>
  );
};

export default SubmitGuess;
