import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" exact to="/">
          {/* <img
            src="/docs/5.2/assets/brand/bootstrap-logo.svg"
            alt="logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          /> */}
          Disney Characters
        </Link>
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
            <NavLink className="nav-link" exact to="/characters">
              All Characters
            </NavLink>
            <NavLink className="nav-link" exact to="/favorites">
              My Favorite Characters
            </NavLink>
            <NavLink className="nav-link" exact to="/create-new">
              Create A New Character
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
