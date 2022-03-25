import React, { useState, useContext, createContext } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ConfigureQuiz from "./ConfigureQuiz";

// Components
import Home from "./Home";
export const QuizQuestionsContext = createContext();

const App = () => {
  const [questions, setQuestions] = useState([]);

  const savedQuestions = localStorage.getItem("savedQuestions");
  if (savedQuestions) {
    console.log("No questions found");
  }
  return (
    <QuizQuestionsContext.Provider value={{ questions, setQuestions }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/configure" element={<ConfigureQuiz />} />
        </Routes>
      </Router>
    </QuizQuestionsContext.Provider>
  );
};

export default App;
