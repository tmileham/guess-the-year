import React, { useState, useEffect, useContext } from "react";

import { QuizQuestionsContext } from "./App";

import "./ConfigureQuiz.css";

//components

import MovieResult from "./components/configure/MovieResult";
import SearchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com/?apikey=42041cf9";

const ConfigureQuiz = () => {
  const { questions, setQuestions } = useContext(QuizQuestionsContext);

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  const removeSelectedQuestionItem = (e) => {
    const removeID = e.target.getAttribute("data-id");
    const arrPosition = questions.findIndex((element) => (element = removeID));

    const newArray = questions.splice(arrPosition);
    console.log(`newArray ${newArray}`);

    setQuestions(...newArray);

    console.log(removeID);
    console.log(questions);
  };

  return (
    <div className="configureContainer">
      <h1>Setup / Configure Quiz</h1>
      <p>Search and select movies for the quiz</p>
      <div className="search">
        <input
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies
            .filter((movie) => movie.Type === "movie" && movie.Poster !== "N/A")
            .map((movie) => (
              <>
                <MovieResult movie={movie} setSearchTerm={setSearchTerm} />
              </>
            ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies Found</h2>
        </div>
      )}
      {/* Selected Movie Fixed Position Div */}
      <div className="SelectedItems">
        <div className="ItemContainer">
          {questions.length
            ? questions?.map((question) => (
                <div className="selectedQuestionItem">
                  <p>{question.Title}</p>
                  <div
                    data-id={question.imdbID}
                    className="removeSelectionQuestionItem"
                    onClick={removeSelectedQuestionItem}
                  >
                    X
                  </div>
                </div>
              ))
            : null}
        </div>
        <div className="SelectedItemsHeader">
          {/* <h5>Selected Movies:</h5> */}
          <button>Save</button>
          <button>Discard and exit</button>
        </div>
      </div>
    </div>
  );
};

export default ConfigureQuiz;
