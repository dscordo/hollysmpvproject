import React, { useEffect, useState } from "react";
import getProviders from "../helpers/getproviders";


export default function FeaturedFilm(props) {
  let f = props.featFilm;

  useEffect(() => {
   getProviders()
      }, [])


      
    
    return (
    <div className="FeaturedFilm">
      <div className="modal" tabindex="-1" style={{ display: 'block' }}>
        <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
        <h5 className="modal-title">{f.title}</h5>
        <button type="button" className="btn-close" onClick={props.hide}></button>
      </div>
      <div className="modal-body">
      
      <div className="container-fluid">
    
      <div className="row">
      
          <div className="col-8 col-sm-6">
          <img className="rounded float-start" style={{ width: '200px' }} src={`https://image.tmdb.org/t/p/original${f.poster_path}`} alt="" />
          </div>
          <div className="col-4 col-sm-6">
          <p>{f.overview}</p>
          </div>
      
      </div>
      </div>

      </div>
     </div>
     </div>
     </div>
        
    
       
           
  
    </div>
);
};