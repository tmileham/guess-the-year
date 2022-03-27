import React, { useEffect, useState, useContext } from "react";

import { QuizGameContext } from "../../App";

// Components
import StartGame from "../main-menu/StartGame";
import MovieCard from "./MovieCard";
import SubmitGuess from "./SubmitGuess";
import GameOver from "./GameOver";
import RestartGame from "./RestartGame";

// API Import
import MovieAPI from "../API/MovieAPI";

// CONSTANTS

const CURRENT_YEAR = new Date().getFullYear();

const Quiz = () => {
  // Array of Movies - TODO: Allow user to dynamically create these
  // const QuestionSet1 = ["tt1877830", "tt0407887", "tt1637725", "tt1119646"];
  const QuestionSet1 = ["tt1877830", "tt0407887"];

  const { guessCount, setGuessCount } = useContext(QuizGameContext);
  console.log(guessCount);
  const NUMBER_OF_USER_GUESSES = guessCount;

  // States
  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [questionSet, setQuestionSet] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [result, setResult] = useState([]);
  const [year, setYear] = useState("");
  const [score, setScore] = useState(0);
  const [remainingGuesses, setRemainingGuesses] = useState(3);

  // Previously used start game function
  //functions
  // const startGame = async () => {
  //   setLoading(true);
  //   setGameOver(false);
  //   setQuestionSet(await MovieAPI(QuestionSet1));
  //   setScore(0);
  //   setRemainingGuesses(NUMBER_OF_USER_GUESSES);
  //   setCurrentQuestionNumber(0);
  //   setLoading(false);
  // };

  const checkGameOver = () => {
    if (currentQuestionNumber === questionSet.length - 1) {
      setGameOver(true);
    }
  };

  const resultHandler = (movieId, movieName, correctAnswer, userAnswer) => {
    setResult([...result, { movieId, movieName, correctAnswer, userAnswer }]);
    console.log(result);
  };

  // UseEffect alternative for StartGame, game starts automatically.
  useEffect(() => {
    setLoading(true);
    setGameOver(false);
    (async () => {
      setQuestionSet(await MovieAPI(QuestionSet1));
    })();
    setScore(0);
    setCurrentQuestionNumber(0);
    setLoading(false);
  }, []);

  useEffect(() => {
    setYear("");
  }, [currentQuestionNumber]);

  const answerHandler = (e) => {
    const userAnswerYear = Number(year);
    const answerYear = Number(questionSet[[currentQuestionNumber]].Year);
    const questionTitle = questionSet[[currentQuestionNumber]].Title;
    const questionId = questionSet[[currentQuestionNumber]].imdbID;

    e.preventDefault();
    // Check for invalid answer
    if (
      userAnswerYear === "" ||
      userAnswerYear > CURRENT_YEAR ||
      userAnswerYear < 1900
    ) {
      alert(`Please enter a year between 1900 and ${CURRENT_YEAR}`);
      setYear("");
      return;
    }

    // Correct Answer
    if (userAnswerYear === answerYear) {
      setScore(score + 1);
      resultHandler(questionId, questionTitle, answerYear, userAnswerYear);
      setCurrentQuestionNumber(currentQuestionNumber + 1);
      setRemainingGuesses(NUMBER_OF_USER_GUESSES);
      checkGameOver();
    } else {
      // Wrong Answer & Run out of guesses - Moves onto next Question
      if (remainingGuesses === 1) {
        resultHandler(questionId, questionTitle, answerYear, userAnswerYear);
        setCurrentQuestionNumber(currentQuestionNumber + 1);
        setRemainingGuesses(NUMBER_OF_USER_GUESSES);
        checkGameOver();
        return;
      }
      // Wrong Answer & Has Guesses remaining
      setRemainingGuesses(remainingGuesses - 1);
    }
  };

  return (
    <div className="Quiz">
      {!gameOver ? (
        questionSet.length === 0 ? null : ( // ) //   </> //     <StartGame startGame={startGame} /> //   <> // (
          <div className="QuestionContainer">
            <div className="GameInfo">
              <h3>
                Question: {currentQuestionNumber + 1} / {questionSet.length}
              </h3>
              <h3>Score: {score}</h3>
            </div>
            <MovieCard CurrentMovie={questionSet[currentQuestionNumber]} />

            <SubmitGuess
              year={year}
              setYear={setYear}
              answerHandler={answerHandler}
            />

            {remainingGuesses < NUMBER_OF_USER_GUESSES ? (
              <>
                <p className="incorrectAnswer">Incorrect answer</p>
                <p className="remainingGuesses">
                  Remaining guesses: {remainingGuesses}
                </p>
              </>
            ) : null}
          </div>
        )
      ) : (
        <>
          <GameOver
            score={score}
            totalNumQuestions={questionSet.length}
            result={result}
          />
          <RestartGame />
        </>
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Quiz;
