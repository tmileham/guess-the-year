import React from "react";

const StartGame = ({ startGame }) => {
  return (
    <>
      <p>Test your movie knowledge!</p>
      <button className="startGameButton submitButton" onClick={startGame}>
        Start Game
      </button>
    </>
  );
};

export default StartGame;
