import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [filmList, setfilmList] = useState([]);

  async function getMovies(filmList) {
    setLoading(true);
    // setError("Error, try again");

    console.log("this is working");
    const appId = "df18e230169160c88b27ae6a222d9b10";
    const topRatedFilmUrl =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=df18e230169160c88b27ae6a222d9b10&language=en-US&page=1";

    try {
      let response = await fetch(topRatedFilmUrl);
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
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

  console.log(filmList);
  return (
    <div>
      <div>
        <h3>If you've watched (and liked!) any of these films, please click on the thumbnail to see further recommendations.</h3>
      </div>
      <div className="row row-cols-3 row-cols-md-3 g-20">
      {filmList.map((film) => (
          <div className="col my-3">
        <div className="card text-center h-100" key={film.id}>
          <img className="card-img-top" src={`https://image.tmdb.org/t/p/original${film.poster_path}`} />
          <h5 className="card-title">{film.title}</h5>
          <p className="card-title">{film.overview}</p>
          <Link to={`/recommendations/${film.id}`}>
          <a href="`/recommendations/${film.id}`" className="btn btn-primary my-2">Watched!</a>
          </Link>
        </div>
        </div>
      ))}
      </div>
    </div>
  );
};

