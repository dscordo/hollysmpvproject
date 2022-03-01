import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import Recommendations from "./Recommendations";
import Watchlist from "./Watchlist";


export default function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recommendations/:film_id" element={<Recommendations />} />
      <Route path= "/watchlist" element={<Watchlist />} />
      </Routes>
    </div>
  );
}


