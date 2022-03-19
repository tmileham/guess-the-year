import React from "react";

const MovieCard = ({ CurrentMovie }) => {
  return (
    <div>
      <img src={CurrentMovie.Poster} />
      <h3>{CurrentMovie.Title}</h3>
    </div>
  );
};

export default MovieCard;
