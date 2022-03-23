import React from "react";
import { Link } from "react-router-dom";

// Components
import Quiz from "./Quiz";

const Home = () => {
  return (
    <div>
      <h1 className="title">Guess the year quiz</h1>
      <p>Test your movie knowledge!</p>
      <Quiz />
      <p>Current question set:</p>
      <div className="currentQuestionSet">Random</div>
      <Link to="/configure">Select your own movies</Link>
    </div>
  );
};

export default Home;
