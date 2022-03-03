import React, { useEffect, useState} from "react";
import { useParams, Link } from 'react-router-dom';


export default function Recommendations() {
  const handleSubmit = (film) => {
    console.log(film);
    addToWatchlist(film);
    console.log('this is working');
  }
  let { film_id } = useParams();
  const [recommendations, setRecommendations] = useState([]);
  const [filmToAdd, setFilmToAdd] = useState([]);
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

async function addToWatchlist(film) {
  let filmObj = {FilmID: film.id, Title: film.title, PosterURL: film.poster_path};
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(filmObj)
  };
  let data = null;
  console.log(filmObj);
  try {
    let response = await fetch("/watchlist", options);
    if (response.ok) {
      data = await response.json();
      setFilmToAdd(data);
    } else {
      console.log("server error:", response.statusText);
    }
  } catch (e) {
    console.log("network error:", e.message);
  } return data;
}


console.log(recommendations);
return (
  <div className="recommendations">
    <div class="row row-cols-3 row-cols-md-3 g-20">
    {
      recommendations.map(film => (
        <div class="col my-3">
        <div class="card text-center h-100" key = {film.id}>
        <img class="card-img-top" src = {`https://image.tmdb.org/t/p/original${film.poster_path}`} />
        <div class="card-body">
        <h5 class="card-title">{film.title}</h5>
        <p class="card-body">{film.overview}</p>
        </div>
        <div class="card-footer">
        <Link to={`/recommendations/${film.id}`}>
        <a type="button" href="`/recommendations/${film.id}`" class="btn btn-primary my-2 mx-1 btn-outline-light" style={{ backgroundColor: '#b30000' }}>Watched!</a>
        </Link>
        <a type="button" className="btn btn-primary mx-1 btn-outline-light" style={{ backgroundColor: '#b30000' }} onClick={() => handleSubmit(film)}>Add to WatchList</a>
        </div>
        </div>
        </div>
      ))
    }
    </div>
  </div>
)

};

