import "../App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import CharactersList from "./CharactersList";
import NewCharacterForm from "./NewCharacterForm";
import { useEffect, useState } from "react";
import CharacterDetails from "./CharacterDetails";
import Filter from "./Filter";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [showVillains, setShowVillains] = useState(false);
  const [sortBy, setSortBy] = useState("");

// initial fetch
  useEffect(() => {
    fetch("http://localhost:3000/characters")
      .then((res) => res.json())
      .then((characterData) => {
        setCharacters(characterData);
      });
  }, []);


// button functions
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
      .then((data) => updatedCharacters(data));
  }

  function updateDelete(deletedCharacter) {
    fetch(`http://localhost:3000/characters/${deletedCharacter.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => updateDeletedCharacter(deletedCharacter));
  }

  function updateDeletedCharacter(deletedCharacter) {
    setCharacters(
      characters.filter((character) => character.id !== deletedCharacter.id)
    );
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

// form submission
  function submitNewCharacter(newCharacterObj) {
    setCharacters([...characters, newCharacterObj]);
  }

// filter functions
  function handleShowVillains() {
    setShowVillains((showVillains) => !showVillains);
  }

  function setSearchBar(e) {
    setSearch(e.target.value);
  }

  function handleSortBy(value) {
    setSortBy(value);
  }

  const filteredCharactersBySearchBar = characters
    .filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((character) => (showVillains ? character.isVillain : true))
    .sort((a, b) => {
      if (sortBy === "") return characters;
      else if (sortBy === "name") return a.name.localeCompare(b.name);
      else if (sortBy === "likes") return b.likes - a.likes;
    });

  const favoriteCharacters = filteredCharactersBySearchBar.filter(
    (character) => character.isFavorited === true
  )

// JSX
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/characters">
          <h2>All Characters</h2>
          <Filter
            setSearchBar={setSearchBar}
            showVillains={showVillains}
            handleShowVillains={handleShowVillains}
            handleSortBy={handleSortBy}
          />
          <CharactersList
            characters={filteredCharactersBySearchBar}
            handleClick={handleClick}
            handleUpdatedLikes={handleUpdatedLikes}
            updateDelete={updateDelete}
          />
        </Route>
        <Route exact path="/characters/:id">
          <CharacterDetails characters={characters} />
        </Route>
        <Route exact path="/favorites">
          <h2>My Favorite Characters</h2>
          <Filter
              setSearchBar={setSearchBar}
              showVillains={showVillains}
              handleShowVillains={handleShowVillains}
              handleSortBy={handleSortBy}
          />
          <CharactersList
            characters={favoriteCharacters}
            handleClick={handleClick}
            handleUpdatedLikes={handleUpdatedLikes}
            updateDelete={updateDelete}
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
