import { withRouter } from "react-router-dom";

function CharacterDetails(props) {
  const { characters, history, match } = props;
  const id = parseInt(match.params.id);
  const character = characters.find((character) => character.id === id);

  function handleGoBack() {
    history.goBack();
  }

  return (
    <div>
      <div> 
        <button onClick={handleGoBack}>Go back</button>
      </div>
      <img src={character.imageUrl} alt={character.name}></img>
      <h3>{character.name}</h3>
      {character.films.length === 0 ? null : (
        <ul>
          Films:
          {character.films.map((film) => (
            <li>{film}</li>
          ))}
        </ul>
      )}
      {character.shortFilms.length === 0 ? null : (
        <ul>
          Short Films:
          {character.shortFilms.map((film) => (
            <li>{film}</li>
          ))}
        </ul>
      )}
      {character.tvShows.length === 0 ? null : (
        <ul>
          TV Shows:
          {character.tvShows.map((show) => (
            <li>{show}</li>
          ))}
        </ul>
      )}
      {character.isVillain ? (
        <p>Villain</p>
      ) : (
        <p>Not Villain</p>
      )}
    </div>
  );
}

export default withRouter(CharacterDetails);
