import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav id="pNavBar">
      <ul id="pLinks">
        <li>
          <Link to="/"> Home</Link>
        </li>
        
        <li>
          <Link to="/pokedex"> Pokedex</Link>
        </li>
        <li>
          <Link to="/about"> About</Link>
        </li>

      </ul>
    </nav>
  );
};
