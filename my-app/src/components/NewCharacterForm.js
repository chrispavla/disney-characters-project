import React, { useState } from "react";

function NewCharacterForm() {
  return (
    <div>
      <h2>Add Characters to Disney Universe</h2>
      <form>
        <label for="name">Character name</label>
        <input type="text" id="name" name="name" placeholder="Name..." />
        <br></br>
        <label for="image">Add image link</label>
        <input type="text" id="image" name="image" placeholder="Image URL..." />
        <br></br>
        <label for="film">Add film name</label>
        <input type="text" name="film" step="0.01" placeholder="Film..." />
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
