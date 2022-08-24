import CharacterDetails from "./CharacterDetails";
import { Link } from "react-router-dom";
import { useState } from "react";

function CharacterCard({ character, handleClick, handleUpdatedLikes }) {

  function handleLikes() {
    handleUpdatedLikes(character);
  }

  return (
    <div>
      <button onClick={handleLikes}>❤️ {character.likes} Likes </button>
      <Link to={`/characters/${character.id}`}>
        <img src={character.imageUrl} alt={character.name}></img>
        <h3>{character.name}</h3>
      </Link>
      <button
        onClick={() => {
          handleClick(character);
        }}
      >
        {character.isFavorited ? "Favorited" : "Add to Favorites"}
      </button>
    </div>
  );
}

export default CharacterCard;
