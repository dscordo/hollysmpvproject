import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./homePage";
import Recommendations from "./recommendations";
import Watchlist from "./Watchlist";


export default function App() {
  return (
    <div className="App">
   
      <Navbar></Navbar>
      <div className="container">
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recommendations/:film_id" element={<Recommendations />} />
      <Route path= "/watchlist" element={<Watchlist />} />
      </Routes>
      
      </div>
    </div>
  );
}


