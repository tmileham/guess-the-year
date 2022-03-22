import React from "react";

const RestartGame = () => {
  const restartGame = () => {
    window.location.reload();
  };

  return (
    <>
      <button className="startGameButton submitButton" onClick={restartGame}>
        Play Again!
      </button>
    </>
  );
};

export default RestartGame;
