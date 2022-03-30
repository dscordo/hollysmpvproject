import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import HomeModal from "./components/HomeModal";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [filmList, setfilmList] = useState([]);
  const [featured, setFeatured] = useState(false);
  const [filmData, setfilmData] = useState([]);
 

  async function getMovies(filmList) {
    setLoading(true);
    // setError("Error, try again");

    
    const appId = ""; //add your own API key here
    const topRatedFilmUrl =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=df18e230169160c88b27ae6a222d9b10&language=en-US&page=1";

    try {
      let response = await fetch(topRatedFilmUrl);
      if (response.ok) {
        let data = await response.json();
        setfilmList(data.results);
      } else {
        console.log(`server error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.log(`Network error: ${error.message}`);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  function showFilm(film) {
    setfilmData(film);
    setFeatured(true);
  }
  
  return (
    <div className="homepage">
      <div className="container">
        <h3>If you've watched (and liked!) any of these films, please click on the thumbnail to see further recommendations.</h3>
      <div className="row row-cols-md-3 g-20">
      {filmList.map((film) => (
          <div className="col my-3">
        <div className="card text-center h-100" key={film.id}>
          <div className="card-body">
          <img className="card-img-top" src={`https://image.tmdb.org/t/p/original${film.poster_path}`} />
          
          <h5 className="card-title">{film.title}</h5>
          {/* <p className="card-body">{film.overview}</p> */}
          </div>
          <div className="card-footer">
          <Link to={`/recommendations/${film.id}`}>
          <a href="`/recommendations/${film.id}`" className="btn btn-primary my-2 btn-outline-light" style={{ backgroundColor: '#b30000' }}>Watched!</a>
          </Link>
          <a onClick={ () => showFilm(film) } className="btn btn-primary my-2 btn-outline-light" style={{ backgroundColor: '#b30000' }}>More info</a>
          </div>
        </div>
        </div>
      ))}
      </div>
      </div>
      { featured === true ? <HomeModal featFilm={ filmData } hide={() => setFeatured(false)}/> : '' }
     
    </div>
    
  );
};

