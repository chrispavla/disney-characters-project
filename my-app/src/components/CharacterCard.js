import React from "react";
import { Link } from "react-router-dom";

function CharacterCard({
  character,
  handleClick,
  handleUpdatedLikes,
  updateDelete,
}) {
  function handleLikes() {
    handleUpdatedLikes(character);
  }

  function handleDelete() {
    updateDelete(character);
  }

  return (
    <div className="col-xs-6 col-sm-3">
      <Link to={`/characters/${character.id}`}>
        <img
          src={character.imageUrl}
          alt={character.name}
          className="img-thumbnail"
        ></img>
        <h3>{character.name}</h3>
      </Link>
      <button onClick={handleLikes}>❤️ {character.likes} Likes </button>
      <button
        onClick={() => {
          handleClick(character);
        }}
      >
        {character.isFavorited ? "Remove from Favorites" : "Add to Favorites ⭐️"}
      </button>
      <button onClick={handleDelete}>
        Delete Character 😢
      </button>
    </div>
  );
}

export default CharacterCard;
