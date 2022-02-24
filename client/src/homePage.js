import React, { useState, useEffect } from "react";
import './App.css';

export default function App() {
    const [loading, setLoading] = useState(false);
    const [filmList, setfilmList] = useState([]);

    async function getMovies(filmList) {
        setLoading(true);
        setError("Error, try again");
      
        console.log("this is working");
        const appId = "df18e230169160c88b27ae6a222d9b10";
        const topRatedFilmUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=df18e230169160c88b27ae6a222d9b10&language=en-US&page=1';
       
        try {
          let response = await fetch(topRatedFilmUrl);
          console.log(response);
          if (response.ok) {
            let data = await response.json();
            console.log(data);
            setfilmList(data.results)
          } else {
            console.log(`server error: ${response.status} ${response.statusText}`);
          }
        } catch (error) {
          console.log(`Network error: ${error.message}`);
        }
      }
      
      
      
      useEffect(() => {
        getMovies()
      }, []);
      
      console.log(filmList);
        return (
          <div>
            {
            filmList.map(film => (
              <div key = {film.id}>
              <img src = {`https://image.tmdb.org/t/p/original${film.poster_path}`} /> 
              <button>
              {film.title}
              </button>
              </div>
            )
            )
      }
            </div>
        );

}