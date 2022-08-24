import CharacterDetails from "./CharacterDetails";
import { Link } from "react-router-dom";
import { useState } from "react";

function CharacterCard({ character, handleClick, handleUpdatedLikes }) {

  function handleLikes() {
    handleUpdatedLikes(character);
  }

  return (
    <div class="col-xs-6 col-sm-3">
      <Link to={`/characters/${character.id}`}>
        <img src={character.imageUrl} alt={character.name} class="img-thumbnail"></img>
        <h3>{character.name}</h3>
      </Link>
      <button onClick={handleLikes}>❤️ {character.likes} Likes </button>
      <button
        onClick={() => {
          handleClick(character);
        }}
      >
        {character.isFavorited ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}

export default CharacterCard;
