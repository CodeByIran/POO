// src/pages/Home.js
import React from "react";
import NavBar from '../components/NavBar';
import MovieButtons from '../components/MovieButtons';
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <MovieButtons/>
    </div>
  );
};

export default Home;
