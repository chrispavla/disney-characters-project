import React from "react";
import CharacterCard from "./CharacterCard";

function CharactersList({
  characters,
  handleClick,
  handleUpdatedLikes,
  updateDelete,
}) {
  const charactersToDisplay = characters.map((character) => (
    <CharacterCard
      character={character}
      key={character.id}
      handleClick={handleClick}
      handleUpdatedLikes={handleUpdatedLikes}
      updateDelete={updateDelete}
    />
  ));

  return <div className="row">{charactersToDisplay}</div>;
}

export default CharactersList;
