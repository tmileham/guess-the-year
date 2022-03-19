const API = "https://www.omdbapi.com/?apikey=42041cf9&i=";

// const MovieAPI = async (id) => {
//   const data = await (await fetch(`${API + id}`)).json();
//   return data;
// };

//prettier-ignore
const MovieAPI = async (arr) => {
  
  let QuestionsArray = await Promise.all(
    arr.map(async (MovieId) => {
        const response = await fetch(`${API + MovieId}`)
        console.log(response);
        const data = await response.json();
        return data;
    }
    )
    
    )
    return QuestionsArray;
  
};

export default MovieAPI;
