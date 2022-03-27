import React from "react";
import { Link } from "react-router-dom";

const StartGame = () => {
  return (
    <>
      <Link to="/startgame">
        <button className="startGameButton submitButton">Start Game</button>
      </Link>
    </>
  );
};

export default StartGame;
