import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styling
import "./App.css";

// Components
import Quiz from "./components/quiz/Quiz";
import ConfigureQuiz from "./components/configure/ConfigureQuiz";
import Mainmenu from "./components/main-menu/Mainmenu";

// Context exports
export const QuizQuestionsContext = createContext();
export const QuizGameContext = createContext();

const App = () => {
  const [questionData, setQuestionData] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [userSelectedQuestions, setUserSelectedQuestions] = useState([]);
  const [guessCount, setGuessCount] = useState(3);

  return (
    <QuizQuestionsContext.Provider
      value={{
        questionData,
        setQuestionData,
        questions,
        setQuestions,
        userSelectedQuestions,
        setUserSelectedQuestions,
      }}
    >
      <QuizGameContext.Provider value={{ guessCount, setGuessCount }}>
        <Router>
          <Routes>
            <Route path="/" element={<Mainmenu />} />
            <Route path="/startgame" element={<Quiz />} />
            <Route path="/configure" element={<ConfigureQuiz />} />
          </Routes>
        </Router>
      </QuizGameContext.Provider>
    </QuizQuestionsContext.Provider>
  );
};

export default App;
