import React from "react";

import "./ConfigureQuiz.css";

//Components
import MovieSearch from "./MovieSearch";
import QuestionSelections from "./QuestionSelections";

const ConfigureQuiz = () => {
  return (
    <div className="configureContainer">
      <MovieSearch />
      <QuestionSelections />
    </div>
  );
};

export default ConfigureQuiz;
