import React from "react";
import { Link } from "react-router-dom";

const RestartGame = () => {
  return (
    <>
      <Link to="/">
        <button className="startGameButton submitButton">Return to menu</button>
      </Link>
    </>
  );
};

export default RestartGame;
