import CharacterCard from "./CharacterCard";

function FavoriteCharacters({ favoriteCharacters, handleClick }) {
  const favoriteCharactersToDisplay = favoriteCharacters.map((character) => (
    <CharacterCard
      character={character}
      key={character.id}
      handleClick={handleClick}
    />
  ));

  return (
    <div>
      <h3>My Favorite Characters</h3>
      <div class="row">{favoriteCharactersToDisplay}</div>
    </div>
  );
}

export default FavoriteCharacters;
