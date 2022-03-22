import React from "react";

const GameOver = ({ score, totalNumQuestions, result }) => {
  return (
    <>
      <h2>Gameover</h2>
      <p>
        Final Score: {score} out of {totalNumQuestions}
      </p>
      <br />
      <p>Your results were:</p>
      <div className="quizResultItems">
        <ul>
          {result.map((entry, index) => {
            return (
              <li key={index} className="quizResultItem">
                <p>Movie: {entry.movieName}</p>
                <p>Correct Answer: {entry.correctAnswer}</p>
                <p>Your Answer: {entry.userAnswer}</p>
                {entry.correctAnswer === entry.userAnswer ? (
                  <p className="correctGreen">Correct!</p>
                ) : (
                  <p className="wrongRed">Wrong!</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default GameOver;
