import CharacterDetails from "./CharacterDetails";
import { Link } from "react-router-dom"

function CharacterCard({ character }) {
  return (
    <div>
      <Link to={`/characters/${character["_id"]}`}>
        <img src={character.imageUrl} alt={character.name}></img>
        <h3>{character.name}</h3>
        {/* <CharacterDetails character={character} /> */}
      </Link>
    </div>
    )
}

export default CharacterCard;
