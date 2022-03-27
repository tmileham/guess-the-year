import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { QuizQuestionsContext } from "../../App";

const QuestionSelections = () => {
  const { questions, setQuestions } = useContext(QuizQuestionsContext);
  const returnLink = useNavigate();

  // Removes Movie from questions array
  const removeSelectedQuestionItem = (e) => {
    const removeID = e.target.getAttribute("data-id");
    const arrPosition = questions.findIndex((element) => (element = removeID));

    setQuestions([
      ...questions.slice(0, arrPosition),
      ...questions.slice(arrPosition + 1),
    ]);
  };

  // Discard changes and return to menu
  const discardSelections = () => {
    setQuestions([]);
    returnLink("/");
  };

  const saveQuestions = () => {
    console.log("test");
    const localQuestions = {
      set01: [],
    };

    questions.map((question) => {
      localQuestions.set01.push(question.imdbID);
    });

    localStorage.setItem("Quiz2", JSON.stringify(localQuestions));
    returnLink("/");
  };

  {
    /* Selected Movie Fixed Position Div */
  }
  return (
    <>
      <div className="SelectedItems">
        <div className="ItemContainer">
          {questions.length
            ? questions.map((question) => (
                <div className="selectedQuestionItem">
                  <p>{question.Title}</p>
                  <div
                    data-id={question.imdbID}
                    className="removeSelectionQuestionItem"
                    onClick={removeSelectedQuestionItem}
                  >
                    X
                  </div>
                </div>
              ))
            : null}
        </div>
        <div className="SelectedItemsHeader">
          {/* <h5>Selected Movies:</h5> */}
          <button onClick={saveQuestions}>Save</button>

          <button onClick={discardSelections}>Discard and exit</button>
        </div>
      </div>
    </>
  );
};

export default QuestionSelections;
