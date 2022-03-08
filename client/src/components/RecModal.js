import React, {useEffect, useState} from "react";
import getProviders from "../helpers/getproviders";

export default function RecModal (props) {
    const [prov, setProv] = useState([]);
    const [unavail, setUnavail] = useState(false);
    let f = props.recFilm;

    useEffect ( async () => {
      let result = await getProviders(f)
      if (result !== undefined) {
        setProv(result.flatrate);
       } else {
        setUnavail(true);
       }
         }, []);

    return (
    <div className="recmodal">
      <div className="modal" tabindex="-1" style={{ display: 'block' }}>
        <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
        <h5 className="modal-title">{f.title}</h5>
        <button type="button" className="btn-close" onClick={props.hide}></button>
      </div>
      <div className="modal-body">
      
      <div className="container-fluid text-center">
    
   
      
          
          <img className="float-start me-2" style={{ width: '200px' }} src={`https://image.tmdb.org/t/p/original${f.poster_path}`} alt="" />
         
          <p>{f.overview}</p>
          <h6>Available in the following UK streaming platforms:</h6>
        <ul>
          {unavail === false && prov ? prov.map(p => <li key={p.id}>{p.provider_name}</li>) : <p>no flatrate streaming available in this area</p>}
        </ul>
         
      
      
      </div>

      </div>
     </div>
     </div>
     </div>
        
    
       
           
  
    </div>
);
};