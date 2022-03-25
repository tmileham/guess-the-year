import React, { useContext } from "react";
import { QuizQuestionsContext } from "../../App";

const MovieCard = ({ movie, setSearchTerm }) => {
  const { questions, setQuestions } = useContext(QuizQuestionsContext);

  const addMovieToQuestion = () => {
    if (!questions.includes(movie)) {
      setQuestions([...questions, movie]);
      setSearchTerm("");
    }
  };

  return (
    <div className="movie" onClick={addMovieToQuestion}>
      <div>Select</div>

      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
