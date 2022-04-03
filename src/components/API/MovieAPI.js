const API = "https://www.omdbapi.com/?apikey=42041cf9&i=";

const MovieAPI = async (arr) => {
  let QuestionsArray = await Promise.all(
    arr.map(async (MovieId) => {
      const response = await fetch(`${API + MovieId}`);

      const data = await response.json();

      return data;
    })
  );

  return QuestionsArray;
};

export default MovieAPI;
