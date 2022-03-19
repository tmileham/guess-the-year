import React, { useEffect, useState } from "react";
import "./App.css";
// Components
import MovieCard from "./components/MovieCard";
import YearPicker from "./components/YearPicker.js";
import SubmitGuess from "./components/SubmitGuess";
// API Import
import MovieAPI from "./MovieAPI";

const App = () => {
  // Array of Movies - TODO: Allow user to dynamically create these
  const QuestionSet1 = ["tt1877830", "tt0407887", "tt1637725", "tt1119646"];

  // States
  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [questionSet, setQuestionSet] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [userAnswers, setUserAnswers] = useState([]);
  const [year, setYear] = useState("");
  const [score, setScore] = useState(0);

  const startGame = async () => {
    setLoading(true);
    setGameOver(false);
    setQuestionSet(await MovieAPI(QuestionSet1));
    setScore(0);
    setCurrentQuestionNumber(0);
    setLoading(false);
  };

  // // UseEffect alternative for StartGame
  // useEffect(() => {
  //  setLoading(true);
  //  setGameOver(false);
  //   (async () => {
  //     setQuestionSet(await MovieAPI(QuestionSet1));
  //   })();
  // setScore(0);
  // setCurrentQuestionNumber(0);
  // setLoading(false);
  // }, []);

  const nextQuestion = () => {
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  };

  return (
    <div className="App">
      <h1>Guess the Year</h1>
      {!gameOver && questionSet.length === 0 ? (
        <button onClick={startGame}>Start Game</button>
      ) : (
        <>
          <MovieCard CurrentMovie={questionSet[currentQuestionNumber]} />
          <YearPicker year={year} setYear={setYear} />
          <SubmitGuess nextQuestion={nextQuestion} />
        </>
      )}
    </div>
  );
};

export default App;
