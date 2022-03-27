import React, { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";

// Styling
import "./App.css";

// Components
import Quiz from "./Quiz";
import ConfigureQuiz from "./ConfigureQuiz";
import Home from "./Home";

// Context exports
export const QuizQuestionsContext = createContext();
export const QuizGameContext = createContext();

const App = () => {
  const [questions, setQuestions] = useState([]);

  return (
    <QuizQuestionsContext.Provider value={{ questions, setQuestions }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/startgame" element={<Quiz />} />
          <Route path="/configure" element={<ConfigureQuiz />} />
        </Routes>
      </Router>
    </QuizQuestionsContext.Provider>
  );
};

export default App;
