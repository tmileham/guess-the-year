import React, { useContext } from "react";

import { QuizQuestionsContext } from "../../App";

const QuestionSelections = () => {
  const { questions, setQuestions } = useContext(QuizQuestionsContext);

  const removeSelectedQuestionItem = (e) => {
    const removeID = e.target.getAttribute("data-id");
    const arrPosition = questions.findIndex((element) => (element = removeID));

    setQuestions([
      ...questions.slice(0, arrPosition),
      ...questions.slice(arrPosition + 1),
    ]);
  };

  const saveQuestions = () => {
    localStorage.setItem("Test", "Tom");
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
          <button>Discard and exit</button>
        </div>
      </div>
    </>
  );
};

export default QuestionSelections;
