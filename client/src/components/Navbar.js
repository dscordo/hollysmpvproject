import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
return (
    <div classNameName="Navbar">
        <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: '#b30000' }} >
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button> 
            <div className="collapse navbar-collapse" id="navbarNav"> 
        <ul className="navbar-nav">
            <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/watchlist" className="nav-link">WatchList</NavLink></li>
        </ul>
        </div>
        </div>
        </nav>
    </div>
);
};

export default Navbar;