import React from "react";

const SubmitGuess = ({ nextQuestion }) => {
  return <button onClick={nextQuestion}>Submit answer</button>;
};

export default SubmitGuess;
