import React from "react";
import CharacterCard from "./CharacterCard";
import Filter from "./Filter";
import { Link } from "react-router-dom";

function CharactersList({ characters, handleClick, handleUpdatedLikes }) {
  const charactersToDisplay = characters.map((character) => (
    <CharacterCard
      character={character}
      key={character.id}
      handleClick={handleClick}
      handleUpdatedLikes={handleUpdatedLikes}
    />
  ));

  return <div class="row">{charactersToDisplay}</div>;
}

export default CharactersList;
