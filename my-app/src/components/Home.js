import React from "react";
import { Link } from "react-router-dom";
import disneyImage from "../assets/disney-characters.png"

function Home() {
  return (
    <div className="bg-fit home">
      <div className="home-img">
        <img src={disneyImage} alt="Disney characters"></img>
      </div>
      <div className="home-img">
        <h2 className="headers">WELCOME TO THE WORLD OF DISNEY CHARACTERS</h2>
        <p className="with-margin">Explore the wonderful world of Disney characters, where you can find and add your favorite characters!</p>
        <Link exact="true" to="/characters" >
          <button className="btn btn-primary btn-lg home-btn">Explore</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
