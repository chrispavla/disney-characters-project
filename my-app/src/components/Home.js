import React from "react";
import { Link } from "react-router-dom";
import disneyImage from "../assets/disney-characters.png"

function Home() {
  return (
    <div>
      <img src={disneyImage} alt="Disney characters"></img>
      <div>
        <h2>WELCOME TO THE WORLD OF DISNEY CHARACTERS</h2>
        <p>Explore the wonderful world of Disney characters, where you can find and add your favorite characters!</p>
        <Link exact="true" to="/characters">
          Explore
        </Link>
      </div>
    </div>
  );
}

export default Home;
