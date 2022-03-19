import React, { useState } from "react";
import "./App.css";
import QuestionCard from "./components/QuestionCard";

import MovieAPI from "./MovieAPI";

const App = () => {
  // Array of Movies - TODO: Allow user to dynamically create these
  const QuestionSet1 = ["tt1877830", "tt0407887", "tt1637725", "tt1119646"];

  // States
  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [questionSet, setQuestionSet] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const startGame = async () => {
    // setLoading(true);
    // const currentQuestionSet = ;
    setQuestionSet(await MovieAPI(QuestionSet1));

    // setQuestionSet([...currentQuestionSet]);
    // setCurrentQuestionNumber(currentQuestionNumber + 1);
    // setScore(0);
    // setLoading(false);
  };

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>Guess the Year</h1>
      <button onClick={startGame}>Start Game</button>
      <QuestionCard />
      {currentQuestionNumber}
    </div>
  );
};

export default App;
