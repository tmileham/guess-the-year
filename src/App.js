import React, { useEffect, useState } from "react";
import "./App.css";

// Components
import MovieCard from "./components/MovieCard";
import SubmitGuess from "./components/SubmitGuess";

// API Import
import MovieAPI from "./MovieAPI";

// CONSTANTS
const NUMBEROFGUESSES = 3;

const App = () => {
  // Array of Movies - TODO: Allow user to dynamically create these
  const QuestionSet1 = ["tt1877830", "tt0407887", "tt1637725", "tt1119646"];

  // States
  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [questionSet, setQuestionSet] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [result, setResult] = useState([]);
  const [year, setYear] = useState("");
  const [score, setScore] = useState(0);
  const [remainingGuesses, setRemainingGuesses] = useState(NUMBEROFGUESSES);

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

  useEffect(() => {
    setYear("");
  }, [currentQuestionNumber]);

  const checkAnswer = () => {
    if (+year === +questionSet[[currentQuestionNumber]].Year) {
      console.log("You DE MAN");
      setCurrentQuestionNumber(currentQuestionNumber + 1);
      setScore(score + 1);
      //
    } else {
      if (remainingGuesses === 1) {
        setCurrentQuestionNumber(currentQuestionNumber + 1);
        setRemainingGuesses(3);
        return;
      }
      setRemainingGuesses(remainingGuesses - 1);
    }
  };

  const currentYear = new Date().getFullYear();

  const nextQuestion = (e) => {
    e.preventDefault();

    if (year === "" || +year > currentYear) {
      alert(`Invalid answer. Enter a year between 1900 and ${currentYear}`);
      setYear("");
      return;
    }
    checkAnswer();
  };

  return (
    <div className="App">
      <h1>Guess the year</h1>
      {!gameOver && questionSet.length === 0 ? (
        <>
          <p>Test your movie knowledge!</p>
          <button className="startGameButton submitButton" onClick={startGame}>
            Start Game
          </button>
        </>
      ) : (
        <div className="QuestionContainer">
          <div className="GameInfo">
            <h3>
              Question {currentQuestionNumber + 1} / {questionSet.length}
            </h3>
            <h3>Score: {score}</h3>
          </div>
          <MovieCard CurrentMovie={questionSet[currentQuestionNumber]} />

          <SubmitGuess
            year={year}
            setYear={setYear}
            nextQuestion={nextQuestion}
            checkAnswer={checkAnswer}
          />

          {remainingGuesses < NUMBEROFGUESSES ? (
            <>
              <p className="incorrectAnswer">Incorrect answer</p>
              <p className="remainingGuesses">
                Remaining guesses: {remainingGuesses}
              </p>
            </>
          ) : null}
        </div>
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default App;
