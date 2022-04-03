import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { QuizQuestionsContext } from "../../App";

const QuestionSelections = () => {
  const { userSelectedQuestions, setUserSelectedQuestions } =
    useContext(QuizQuestionsContext);
  const returnLink = useNavigate();

  // Removes Movie from userSelectedQuestions array
  const removeSelectedQuestionItem = (e) => {
    const removeID = e.target.getAttribute("data-id");
    const arrPosition = userSelectedQuestions.findIndex(
      (element) => (element = removeID)
    );

    setUserSelectedQuestions([
      ...userSelectedQuestions.slice(0, arrPosition),
      ...userSelectedQuestions.slice(arrPosition + 1),
    ]);
  };

  // Discard changes and return to menu
  const discardSelections = () => {
    setUserSelectedQuestions([]);
  };

  const exitToMenu = () => {
    returnLink("/");
  };

  const saveQuestions = () => {
    console.log("test");
    const localQuestions = {
      name: "User Defined",
      questions: [],
    };

    userSelectedQuestions.map((question) => {
      localQuestions.questions.push(question.imdbID);
    });

    localStorage.setItem("Quiz", JSON.stringify(localQuestions));
    returnLink("/");
  };

  {
    /* Selected Movie Fixed Position Div */
  }
  return (
    <>
      <div className="SelectedItems">
        <div className="ItemContainer">
          {userSelectedQuestions.length
            ? userSelectedQuestions.map((question) => (
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

          <button onClick={discardSelections}>Clear</button>
          <button onClick={exitToMenu}>Exit</button>
        </div>
      </div>
    </>
  );
};

export default QuestionSelections;
