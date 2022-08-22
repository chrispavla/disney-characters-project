import React from "react";
import CharacterCard from "./CharacterCard";
import Search from "./Search";

function CharactersList({ characters }) {

  const charactersToDisplay = characters.map(character => 
    <CharacterCard character={character} key={character["_id"]}/>)

  return (
    <div>
      <Search />
      {charactersToDisplay}
    </div>
  );
}

export default CharactersList;
