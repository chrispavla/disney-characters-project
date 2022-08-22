import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">
          {/* <img
            src="./291-2917582_mickey-mouse-logo-transparent-hd-png-download.png"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          /> */}
          Disney Characters
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" exact to="/" aria-current="page">
              Home
            </NavLink>
            <NavLink className="nav-link" exact to="/all">
              All Characters
            </NavLink>
            <NavLink className="nav-link" exact to="/favorites">
              My Favorite Characters
            </NavLink>
            <NavLink
              className="nav-link"
              //   class="nav-link"
              exact
              to="/create-new"
            >
              Create A New Character
            </NavLink>
          </div>
        </div>
      </div>
    </nav>

    /* <nav class="navbar  bg-light">
        <NavLink exact to="/">
          Home
        </NavLink>

        <NavLink exact to="/all">
          All Characters
        </NavLink>

        <NavLink exact to="/favorites">
          My Favorite Characters
        </NavLink>

        <NavLink exact to="/create-new">
          Create A New Character
        </NavLink>
      </nav> */
    // </div>
  );
}

export default NavBar;
