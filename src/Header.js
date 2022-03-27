import React from "react";
import { Link } from "react-router-dom";

// Components
import Quiz from "./Quiz";
import StartGame from "./components/quiz/StartGame";

const Header = () => {
  return (
    <div>
      <h1 className="title">Guess the year quiz</h1>
      <p>Test your movie knowledge!</p>
    </div>
  );
};

export default Header;
