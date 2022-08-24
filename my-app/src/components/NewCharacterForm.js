import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function NewCharacterForm(props) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [films, setFilms] = useState([]);
  const [tvshows, setTvshows] = useState([]);
  const [isVillain, setIsVillain] = useState(false);

  const { submitNewCharacter, history } = props;

  function handleSubmit(e) {
    e.preventDefault();

    let newCharacter = {
      name: name,
      imageUrl: imageUrl,
      films: films,
      shortFilms: [],
      tvShows: tvshows,
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
    <div>
      <h2>Add Characters to Disney Universe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Character name</label>
        <input
          required
          type="text"
          id="name"
          name="name"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label htmlFor="image">Add image link</label>
        <input
          required
          type="text"
          id="image"
          name="image"
          placeholder="Image URL..."
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <br></br>
        <label htmlFor="film">Add film name</label>
        <input
          type="text"
          name="film"
          step="0.01"
          placeholder="Film..."
          value={films}
          onChange={(e) => setFilms(e.target.value)}
        />
        <br></br>
        <label htmlFor="film">Add TV show name</label>
        <input
          type="text"
          name="tvshow"
          step="0.01"
          placeholder="TV show..."
          value={tvshows}
          onChange={(e) => setTvshows(e.target.value)}
        />
        <br></br>
        <label htmlFor="villain">Is it a villain?</label>
        <input
          type="radio"
          id="villain"
          name="isVillain"
          value={true}
          onChange={() => handleToggle(true)}
        />
        <label htmlFor="villain">Villain</label>
        <input
          type="radio"
          id="notVillain"
          name="isVillain"
          value={false}
          onChange={() => handleToggle(false)}
        />
        <label htmlFor="notVillain">Not a villain</label>
        <br></br>
        <button type="submit">Submit character</button>
      </form>
    </div>
  );
}

export default withRouter(NewCharacterForm);
