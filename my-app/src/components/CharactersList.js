import React from "react";
import CharacterCard from "./CharacterCard";
import Filter from "./Filter";
import { Link } from "react-router-dom";

function CharactersList({
  characters,
  // setSearchBar,
  // showVillains,
  // handleShowVillains,
}) {
  const charactersToDisplay = characters.map((character) => (
    <CharacterCard character={character} key={character["_id"]} />
  ));

  return (
    <div>
      {/* <Filter
       setSearchBar={setSearchBar}
       showVillains={showVillains}
      handleShowVillains={handleShowVillains}
      > */}
      {charactersToDisplay}
    </div>
  );
}

export default CharactersList;
