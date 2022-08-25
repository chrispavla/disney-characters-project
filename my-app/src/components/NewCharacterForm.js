import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function NewCharacterForm(props) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [films, setFilms] = useState(null);
  const [tvshows, setTvshows] = useState(null);
  const [isVillain, setIsVillain] = useState(false);

  const { submitNewCharacter, history } = props;

  function handleSubmit(e) {
    e.preventDefault();

    let newCharacter = {
      name: name,
      imageUrl: imageUrl,
      films: films ? [films] : [],
      shortFilms: [],
      tvShows: tvshows ? [tvshows] : [],
      videoGames: [],
      parkAttractions: [],
      isVillain: isVillain,
      likes: 0,
      isFavorited: false,
    };

    fetch("http://localhost:3000/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCharacter),
    })
      .then((res) => res.json())
      .then((newCharObj) => {
        submitNewCharacter(newCharObj);
        history.push(`/characters/${newCharObj.id}`);
      });

    setName("");
    setImageUrl("");
    setFilms([]);
    setTvshows([]);
    setIsVillain(false);
  }

  function handleToggle(villainStatus) {
    setIsVillain(villainStatus);
  }

  return (
    <div className="bg-fit">
      <h2 className="headers">Add Characters to Disney Universe</h2>
      <div className="not-center" style={{ marginTop: "40px" }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group row my-2 mx-5">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Character name
            </label>
            <div className="col-sm-8">
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row my-2 mx-5">
            <label htmlFor="image" className="col-sm-2 col-form-label">
              Add image link
            </label>
            <div className="col-sm-8">
              <input
                required
                type="text"
                id="image"
                name="image"
                placeholder="Image URL..."
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row my-2 mx-5">
            <label htmlFor="film" className="col-sm-2 col-form-label">
              Add film name
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                name="film"
                step="0.01"
                placeholder="Film..."
                value={films}
                onChange={(e) => setFilms(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row my-2 mx-5">
            <label htmlFor="film" className="col-sm-2 col-form-label">
              Add TV show name
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                name="tvshow"
                step="0.01"
                placeholder="TV show..."
                value={tvshows}
                onChange={(e) => setTvshows(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <fieldset class="form-group">
            <div className="row mx-5">
              <legend className="col-form-label col-sm-2 pt-0">
                Is it a villain?
              </legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <label for="villain" className="form-check-label">
                    Villain
                  </label>
                  <input
                    type="radio"
                    id="villain"
                    name="isVillain"
                    value={true}
                    onChange={() => handleToggle(true)}
                    className="form-check-input"
                  />
                </div>
                <div className="form-check">
                  <label for="notVillain" className="form-check-label">
                    Not a villain
                  </label>
                  <input
                    type="radio"
                    id="notVillain"
                    name="isVillain"
                    value={false}
                    onChange={() => handleToggle(false)}
                    className="form-check-input"
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" className="btn btn-primary mx-5 my-4">
                Submit character
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(NewCharacterForm);
