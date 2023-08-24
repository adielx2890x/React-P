import React, { useState, useEffect } from "react";

function Header() {
  const [randomPokemons, setRandomPokemons] = useState([]);
  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        const getRandomPokemonId = () => Math.floor(Math.random() * 200) + 1;

        const pokemonIds = Array.from({ length: 4 }, getRandomPokemonId);

        const fetchedPokemons = [];

        for (const id of pokemonIds) {
          const Response = await fetch(`${id}`);
          const data = await response.json();
          fetchedPokemons.push(data);
        }

        setRandomPokemons(fetchedPokemons);
      } catch (error) {}
    };
  });
  return (
    <header>
      <h1>Random Pokémon Header</h1>
      <div className="pokemon-container">
        {randomPokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </header>
  );
}

export default Header;