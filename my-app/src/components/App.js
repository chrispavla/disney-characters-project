import "../App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import CharactersList from "./CharactersList";
import FavoriteCharacters from "./FavoriteCharacters";
import NewCharacterForm from "./NewCharacterForm";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/characters")
      .then((res) => res.json())
      .then((characterData) => setCharacters(characterData));
  }, []);

  function setSearchBar(e) {
    setSearch(e.target.value);
  }

  const filteredCharactersBySearchBar = characters.filter((character) => {
    return character.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/all">
          <CharactersList
            characters={filteredCharactersBySearchBar}
            setSearchBar={setSearchBar}
          />
        </Route>
        <Route path="/favorites">
          <FavoriteCharacters />
        </Route>
        <Route path="/create-new">
          <NewCharacterForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
