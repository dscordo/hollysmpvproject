import React from "react";
import getProviders from "../helpers/getproviders";

export default function RecModal (props) {
    const [prov, setProv] = useState([]);
    let f = props.recFilm;

    useEffect ( async () => {
      let result = await getProviders(f)
      setProv(result.flatrate);
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
      
      <div className="container-fluid">
    
      <div className="row">
      
          <div className="col-8 col-sm-6">
          <img className="rounded float-start" style={{ width: '200px' }} src={`https://image.tmdb.org/t/p/original${f.poster_path}`} alt="" />
          </div>
          <div className="col-4 col-sm-6">
          <p>{f.overview}</p>
          <h6>Available in the following UK streaming platforms:</h6>
        {/* <ul>
          {prov.map(p => <li key={p.id}>{p.provider_name}</li>)}
        </ul> */}
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