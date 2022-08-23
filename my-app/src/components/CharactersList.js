import React from "react";
import CharacterCard from "./CharacterCard";
import Filter from "./Filter";
import { Link } from "react-router-dom";

function CharactersList({ characters, handleClick }) {
  const charactersToDisplay = characters.map((character) => (
    <CharacterCard 
      character={character} 
      key={character["_id"]} 
      handleClick={handleClick}
    />
  ));

  return (
    <div>
      {charactersToDisplay}
    </div>
  );
}

export default CharactersList;
