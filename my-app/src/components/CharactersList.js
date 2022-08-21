import React from "react";
import CharacterCard from "./CharacterCard";
import Search from "./Search";

function CharactersList() {
  return (
    <div>
      CharactersList Component
      <Search />
      <CharacterCard />
    </div>
  );
}

export default CharactersList;
