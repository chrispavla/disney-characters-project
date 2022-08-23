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
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/characters")
      .then((res) => res.json())
      .then((characterData) => {
        setCharacters(characterData);
      });
  }, []);

  function handleUpdatedLikes(character) {
    fetch(`http://localhost:3000/characters/${character.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: character.likes + 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => updatedCharacters(data));
  }

  function updatedCharacters(updatedCharacter) {
    let newCharacters = characters.map((character) => {
      if (character.id === updatedCharacter.id) {
        return updatedCharacter;
      } else {
        return character;
      }
    });
    setCharacters(newCharacters);
  }

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

  function handleClick(favoritedCharacter) {
    setFavoriteCharacters([...favoriteCharacters, favoritedCharacter]);
  }

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
            handleClick={handleClick}
            handleUpdatedLikes={handleUpdatedLikes}
          />
        </Route>
        <Route exact path="/characters/:id">
          <CharacterDetails characters={characters} />
        </Route>
        <Route exact path="/favorites">
          <FavoriteCharacters favoriteCharacters={favoriteCharacters} />
        </Route>
        <Route exact path="/create-new">
          <NewCharacterForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
