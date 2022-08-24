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
    <div className="card-group col-sm-3">
      <div className="card listcard my-3 mx-4">
        <Link className="link" to={`/characters/${character.id}`}>
          {character.isFavorited ? 
            <div className="parent"><h2 className="child">⭐️</h2></div> : null
          }
          <img className="card-img-top" src={character.imageUrl} alt={character.name}></img>
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
          </div>
        </Link>
        <div class="card-footer">
          <button className="btn btn-primary btn-sm btn-block my-1 mx-1" onClick={handleLikes}>❤️ {character.likes} Likes </button>
          <button className="btn btn-primary btn-sm btn-block my-1 mx-1" onClick={() => {handleClick(character)}}>
            {character.isFavorited ? "Remove from Favorites" : "Add to Favorites ⭐️"}
          </button>
          <button className="btn btn-primary btn-sm btn-block my-1 mx-1" onClick={handleDelete}>
            Delete Character 😢
          </button>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
