import React, { useState } from "react";

function NewCharacterForm() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [films, setFilms] = useState("");
  const [isVillain, setIsVillain] = useState(false);

  return (
    <div>
      <h2>Add Characters to Disney Universe</h2>
      <form>
        <label for="name">Character name</label>
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
        <label for="image">Add image link</label>
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
        <label for="film">Add film name</label>
        <input
          required
          type="text"
          name="film"
          step="0.01"
          placeholder="Film..."
          value={films}
          onChange={(e) => setFilms(e.target.value)}
        />
        <br></br>
        <label for="villain">Is it a villain?</label>
        <input type="radio" id="villain" name="isVillain" />
        <label for="villain">Villain</label>
        <input type="radio" id="notVillain" name="isVillain" />
        <label for="notVillain">Not a villain</label>
        <br></br>
        <button type="submit">Submit character</button>
      </form>
    </div>
  );
}

export default NewCharacterForm;
