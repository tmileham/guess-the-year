import React from "react";

const StartGame = ({ startGame }) => {
  return (
    <>
      <button className="startGameButton submitButton" onClick={startGame}>
        Start Game
      </button>
    </>
  );
};

export default StartGame;
