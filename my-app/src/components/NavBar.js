import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <div id="nav">
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
        </div>
    )
}

export default NavBar