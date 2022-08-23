import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Home component
      <Link exact to="/characters">
        Explore Disney Characters
      </Link>
    </div>
  );
}

export default Home;
