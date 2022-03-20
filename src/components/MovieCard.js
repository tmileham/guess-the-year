import React from "react";

const MovieCard = ({ CurrentMovie }) => {
  return (
    <div>
      <img src={CurrentMovie.Poster} alt={CurrentMovie.Title} />
      <h3>{CurrentMovie.Title}</h3>
    </div>
  );
};

export default MovieCard;
