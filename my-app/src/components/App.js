import '../App.css';
import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar"
import Home from './Home';
import CharactersList from './CharactersList';
import FavoriteCharacters from './FavoriteCharacters';
import NewCharacterForm from './NewCharacterForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/all">
          <CharactersList />
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
