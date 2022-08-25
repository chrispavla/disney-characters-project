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
      <div style={{ marginTop: "40px" }}>
        <button
          className="btn btn-primary btn-lg btn-block my-1 mx-1"
          onClick={handleGoBack}
        >
          Go back
        </button>
      </div>
      <div
        class="card mb-3 mx-auto"
        style={{ maxWidth: "640px", marginTop: "60px" }}
      >
        <div class="row no-gutters flexCont">
          <div class="col-md-4">
            <img
              src={character.imageUrl}
              class="card-img my-5 mx-5"
              alt={character.name}
            ></img>
          </div>
          <div class="col-md-8">
            <h3 class="card-title">{character.name}</h3>
            <div>
              <p>
                {character.films.length === 0 ? null : (
                  <div>
                    <h6 style={{ fontWeight: "bold" }}> Films:</h6>
                    {character.films.map((film) => (
                      <li>{film}</li>
                    ))}
                  </div>
                )}
                {character.shortFilms.length === 0 ? null : (
                  <div>
                    <h6 style={{ fontWeight: "bold" }}>Short Films:</h6>
                    {character.shortFilms.map((film) => (
                      <li>{film}</li>
                    ))}
                  </div>
                )}
                {character.tvShows.length === 0 ? null : (
                  <div>
                    <h6 style={{ fontWeight: "bold" }}>TV Shows:</h6>
                    {character.tvShows.map((show) => (
                      <li>{show}</li>
                    ))}
                  </div>
                )}
                {character.isVillain ? <h6>Villain</h6> : <h6>Not Villain</h6>}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(CharacterDetails);
