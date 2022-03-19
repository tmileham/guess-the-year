const API = "https://www.omdbapi.com/?apikey=42041cf9&i=";

//prettier-ignore
const MovieAPI = async (arr) => {
  
  let QuestionsArray = await Promise.all(
    arr.map(async (MovieId) => {
        const response = await fetch(`${API + MovieId}`)
        console.log(response);
        const data = await response.json();

        console.log(data);
        return data;
    }
    )
    
    )
    return QuestionsArray;
  
};

export default MovieAPI;
