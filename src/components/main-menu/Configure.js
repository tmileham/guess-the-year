import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { QuizGameContext, QuizQuestionsContext } from "../../App";
import { predefinedQuestions } from "../../assets/Questions";

const Configure = () => {
  const { guessCount, setGuessCount } = useContext(QuizGameContext);
  const { questionData, setQuestionData } = useContext(QuizQuestionsContext);

  const guessCountHandler = (e) => {
    if (Number(e.target.value) !== 0) {
      setGuessCount(Number(e.target.value));
    }
  };

  const getLocalSavedQuestions = () => {
    return [JSON.parse(localStorage.getItem("Quiz"))];
  };

  const buttonHandler = (selectedQuestions) => {
    console.log(selectedQuestions);
  };

  const localQuestions = getLocalSavedQuestions();
  const combinedQuestions = [...predefinedQuestions, ...localQuestions];

  useEffect(() => {
    setQuestionData(combinedQuestions);
  }, []);

  return (
    <>
      <h2>Quiz Options</h2>
      <p>Select question set:</p>
      <div className="questionSetContainer">
        {questionData.length > 0
          ? questionData.map((genre) => {
              return (
                <button className="currentQuestionSet" onClick={null}>
                  {genre.name}
                </button>
              );
            })
          : null}

        {/* 
        <button className="currentQuestionSet" onClick={null}>
          Animation
        </button>
        <div className="userDefineQuestionContainer">
          <button className="currentQuestionSet" onClick={null}>
            User Defined
          </button>
         
        </div> */}
        <div>
          <Link to="/configure">Select your own movies</Link>
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
