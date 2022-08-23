import CharacterDetails from "./CharacterDetails";
import { Link } from "react-router-dom";
import { useState } from "react";

function CharacterCard({ character, handleClick }) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div>
      <Link to={`/characters/${character["_id"]}`}>
        <img src={character.imageUrl} alt={character.name}></img>
        <h3>{character.name}</h3>
      </Link>
      <button
        onClick={() => {
          handleClick(character);
          setIsFavorited(!isFavorited);
        }}
      >
        {isFavorited ? "Favorited" : "Add to Favorites"}
      </button>
    </div>
  );
}

export default CharacterCard;
