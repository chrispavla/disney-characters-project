function CharacterCard({ character }) {
  return (
    <div>
      <img src={character.imageUrl} alt={character.name}></img>
      <h3>{character.name}</h3>
    </div>
    )
}

export default CharacterCard;
