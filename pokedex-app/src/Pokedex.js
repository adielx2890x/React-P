import React, { useState, useEffect } from "react";
import { getPokemonList } from "./api";

function Ajai() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [previousPageUrl, setPreviousPageUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const url = `https://pokeapi.co/api/v2/pokemon`;

      const data = await getPokemonList(url);

      setIsLoading(false);
      setCurrentPage(1);
      if (data) {
        setPokemonList(data.array);
        setNextPageUrl(data.next);
      }
    }

    fetchData();
  }, []);

  async function next(url) {
    setIsLoading(true);
    const response = await getPokemonList(url);
    //console.log(response);
    const data = response.array;
    setPokemonList(data);
    const next = response.next;
    setNextPageUrl(next);
    setIsLoading(false);
    //previous previous
    setPreviousPageUrl(response.previous);

    // alert("hola")
  }

  async function previous(url) {
    setIsLoading(true);
    console.log("previus", url);
    const response = await getPokemonList(url);
    const data = response.array;
    //update url
    const next = response.next;
    setNextPageUrl(next);
    //
    const previous = response.previous;
    setPreviousPageUrl(previous);
    //
    setPokemonList(data);
    setIsLoading(false);
  }
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
              <button
                onClick={() => previous(previousPageUrl)}
                id="vegetaButton"
                className="buttons"
              ></button>

              <button
                onClick={() => next(nextPageUrl)}
                id="gokuButton"
                className="buttons"
              ></button>

              <form>
                <input type="text"></input>
                <button>Buscar</button>
              </form>
            </div>
          </ul>
        </div>
      )}
    </main>
  );
}

export default Ajai;
