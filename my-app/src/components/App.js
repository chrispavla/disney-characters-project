import "../App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import CharactersList from "./CharactersList";
import FavoriteCharacters from "./FavoriteCharacters";
import NewCharacterForm from "./NewCharacterForm";
import { useEffect, useState } from "react";
import CharacterDetails from "./CharacterDetails";
import { useParams } from "react-router-dom";
import Filter from "./Filter";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [showVillains, setShowVillains] = useState(false);
  // const { id } = useParams()

  useEffect(() => {
    fetch("http://localhost:3000/characters")
      .then((res) => res.json())
      .then((characterData) => {
        setCharacters(characterData);
        // debugger
      });
  }, []);

  function handleShowVillains() {
    setShowVillains((showVillains) => !showVillains);
  }

  function setSearchBar(e) {
    setSearch(e.target.value);
  }

  const filteredCharactersBySearchBar = characters
    .filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((character) => (showVillains ? character.isVillain : true));

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/characters">
          <Filter
            setSearchBar={setSearchBar}
            showVillains={showVillains}
            handleShowVillains={handleShowVillains}
          />
          <CharactersList
            characters={filteredCharactersBySearchBar}
            setSearchBar={setSearchBar}
            handleShowVillains={handleShowVillains}
            showVillains={showVillains}
          />
        </Route>

        <Route exact path="/characters/:id">
          <CharacterDetails characters={characters} />
        </Route>
        <Route exact path="/favorites">
          <FavoriteCharacters />
        </Route>
        <Route exact path="/create-new">
          <NewCharacterForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
