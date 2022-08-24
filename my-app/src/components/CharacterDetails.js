import { withRouter } from "react-router-dom";

function CharacterDetails(props) {
  const { characters, history, match } = props;
  const id = parseInt(match.params.id);
  const character = characters.find((character) => character.id === id);

  function handleGoBack() {
    history.goBack();
  }

  return (
    <div className="bg-fit">
      <div> 
        <button className="btn btn-primary btn-sm btn-block my-1 mx-1" onClick={handleGoBack}>Go back</button>
      </div>
      <div class="card mb-3 mx-auto" style={{maxWidth: "540px"}}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src={character.imageUrl} class="card-img my-5 mx-5" alt={character.name}></img>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{character.name}</h5>
              <p class="card-text">
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
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default withRouter(CharacterDetails);
