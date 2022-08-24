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
        setFavoriteCharacters(
          characterData.filter((character) => character.isFavorited === true)
        );
      });
  }, []);

  function submitNewCharacter(newCharacterObj) {
    setCharacters([...characters, newCharacterObj]);
  }

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
    fetch(`http://localhost:3000/characters/${favoritedCharacter.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isFavorited: favoritedCharacter.isFavorited ? false : true,
      }),
    })
      .then((res) => res.json())
      .then((data) => updateFavoritedCharacters(data));
  }

  function updateFavoritedCharacters(updatedCharacter) {
    let newCharacters = characters.map((character) => {
      if (character.id === updatedCharacter.id) {
        return updatedCharacter;
      } else {
        return character;
      }
    });
    setCharacters(newCharacters);
    setFavoriteCharacters(
      newCharacters.filter((character) => character.isFavorited === true)
    );
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
          <FavoriteCharacters
            favoriteCharacters={favoriteCharacters}
            handleClick={handleClick}
          />
        </Route>
        <Route exact path="/create-new">
          <NewCharacterForm submitNewCharacter={submitNewCharacter} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
