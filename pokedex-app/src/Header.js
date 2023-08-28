import React, { useState, useEffect } from "react";

function Header() {
  const [randomPokemons, setRandomPokemons] = useState([]);
  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        const getRandomPokemonId = () => Math.floor(Math.random() * 200) + 1;

        const pokemonIds = Array.from({ length: 5 }, getRandomPokemonId);

        const fetchedPokemons = [];

        for (const id of pokemonIds) {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          );
          const data = await response.json();
          fetchedPokemons.push(data);
        }

        setRandomPokemons(fetchedPokemons);
      } catch (error) {}
    };
    fetchRandomPokemon();
  }, []);

  return (
    <header id="pHeader">
      <h1>Pokemon</h1>
      <div className="contenedor">
        {randomPokemons.map((pokemon) => (
          <div id="pokemons" key={pokemon.id}>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              id="pokemonsImgs"
            />
            <p>{pokemon.name}</p>
            <p>{pokemon.id}</p>
          </div>
        ))}
      </div>
    </header>
  );
}

export default Header;