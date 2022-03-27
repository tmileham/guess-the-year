import React from "react";

import "./ConfigureQuiz.css";

//components
import MovieSearch from "./components/configure/MovieSearch";
import QuestionSelections from "./components/configure/QuestionSelections";

const ConfigureQuiz = () => {
  return (
    <div className="configureContainer">
      <MovieSearch />
      <QuestionSelections />
    </div>
  );
};

export default ConfigureQuiz;
