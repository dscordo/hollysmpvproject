import React, { useEffect, useState} from "react";
import { useParams, Link } from 'react-router-dom';


export default function Recommendations() {
  let { film_id } = useParams();
  const [recommendations, setRecommendations] = useState([]);
  async function getReccos(recommendations) {
  console.log("this is working");
  const appId = "df18e230169160c88b27ae6a222d9b10";
  const recommendsUrl =
    `https://api.themoviedb.org/3/movie/${film_id}/recommendations?api_key=df18e230169160c88b27ae6a222d9b10&language=en-US&page=1`;
  
    try {
      let response = await fetch(recommendsUrl)
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setRecommendations(data.results);
      } else {
        console.log(`server error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.log(`Network error: ${error.message}`);
    }
} 

useEffect(() => {
  getReccos()
}, [film_id]);

console.log(recommendations);
return (
  <div>
    {
      recommendations.map(film => (
        <div key = {film.id}>
        <img src = {`https://image.tmdb.org/t/p/original${film.poster_path}`} />
        <Link to={`/recommendations/${film.id}`}>
        <button>
          {film.title}
        </button>
        </Link>
        <button>Add to watchlist</button>
        </div>
      ))
    }
  </div>
)

}
