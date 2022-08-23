import CharacterCard from "./CharacterCard"

function FavoriteCharacters({ favoriteCharacters }) {

    const favoriteCharactersToDisplay = favoriteCharacters.map((character) => (
        <CharacterCard 
          character={character} 
          key={character["_id"]} 
        />
      ))

    return (
        <div>
            <h3>My Favorite Characters</h3>
            {favoriteCharactersToDisplay}
        </div>
    )
}

export default FavoriteCharacters