import React from "react";

import "./MovieCard.css";

const MovieCard = ({ CurrentMovie }) => {
  return (
    <div>
      <img
        className="MovieCard-Poster"
        src={CurrentMovie.Poster}
        alt={CurrentMovie.Title}
      />
      <h3 className="MovieCard-Title">{CurrentMovie.Title}</h3>
    </div>
  );
};

export default MovieCard;
