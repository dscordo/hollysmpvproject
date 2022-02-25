import React, { useEffect } from "react";

export default function getReccos() {
  const [recommendations, setRecommendations] = useState([]);
  async function getReccos(recommendations) {
  setLoading(true);
  console.log("this is working");
  const appId = "df18e230169160c88b27ae6a222d9b10";
  const recommendsUrl =
    `https://api.themoviedb.org/3/movie/${film.id}/recommendations?api_key=df18e230169160c88b27ae6a222d9b10&language=en-US&page=1`;
  
    try {
      let response = await fetch(recommendsUrl)
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
      } else {
        console.log(`server error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.log(`Network error: ${error.message}`);
    }
} 

useEffect(() => {
  getReccos()
}, []);

console.log(recommendations);
return (
  <div>
    {
      recommendations.map(film => (
        <div key = {film.id}>
        <img src = {`https://image.tmdb.org/t/p/original${film.poster_path}`} />
        <button>
          {film.title}
        </button>
        </div>
      ))
    }
  </div>
)

}
