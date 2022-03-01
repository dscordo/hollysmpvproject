import React, { useEffect, useState} from "react";
import { useParams, Link } from 'react-router-dom';



export default function Watchlist() {
    const [watchlist, setWatchlist] = useState([]);
    async function showWatchlist() {
        try {
            let watchlistResults = await fetch("/watchlist")
            if (watchlistResults.ok) {
               let data = await watchlistResults.json();
               console.log(data);
               setWatchlist(data);
            }
        } catch (e) {
            console.log("network error:", e.message);
        } 
    }
  
    useEffect(() => {
        showWatchlist()
      }, []);

    return (
    <div>
        <div class="row row-cols-3 row-cols-md-3 g-20">
        {
      watchlist.map((film, i) => (
        <div class="col">
        <div class="card text-center h-100" key = {i}>
        <img class="card-img-top" src = {`https://image.tmdb.org/t/p/original${film.PosterUrl}`} />
        <h5> {film.Title} </h5>
        </div>
        </div>
      ))
    }
    </div>
    </div>);

  

}
