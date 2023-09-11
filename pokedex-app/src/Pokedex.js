import React, { useState, useEffect } from "react";
import { getPokemonList } from "./api";

function Ajai() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const url = `https://pokeapi.co/api/v2/pokemon`;
      const data = await getPokemonList(url);
      setIsLoading(false);
      if (data) {
        setPokemonList(data.array);
      }
    }

    fetchData();
  }, []);

  //

  return (
    <main id="Pokedex">
      <div>
        <h1>Pokedex</h1>
      </div>

      {isLoading ? (
        <img
          id="vImg"
          src="http://gifgifs.com/animations/anime/dragon-ball-z/Vegeta/vegeta_6.gif"
          alt=""
        ></img>
      ) : (
        <div>
          <ul id="pokemon">
            {pokemonList.map((pokemon) => (
              <li id="eachPokemon" key={pokemon.id}>
                PID: {pokemon.id} <br />
                Pokemon: {pokemon.name},
                <img id="pImgs" src={pokemon.image} />
              </li>
            ))}
            <div id="boxButton">
              <button id="vegetaButton" className="buttons">

        
              </button>

              <button id="gokuButton" className="buttons">
               
              </button>
            </div>
          </ul>
        </div>
      )}
    </main>
  );
}

export default Ajai;
