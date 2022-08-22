import React from "react";
import CharacterCard from "./CharacterCard";
import Search from "./Search";

function CharactersList({ characters, setSearchBar }) {
  const charactersToDisplay = characters.map((character) => (
    <CharacterCard character={character} key={character["_id"]} />
  ));

  return (
    <div>
      <Search setSearchBar={setSearchBar} />
      {charactersToDisplay}
    </div>
  );
}

export default CharactersList;
