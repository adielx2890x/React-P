import React, { useState, useEffect } from "react";

function Header() {
  const [randomPokemons, setRandomPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
          console.log(pokemonIds);
        }
        setRandomPokemons(fetchedPokemons);
        setIsLoading(false)
      } catch (error) {setIsLoading(false)}
    };
    fetchRandomPokemon();
  }, []);

  return (
    <body id="headerBody">
    <header id="pHeader">
      <h1>Wellcome to the Pokedex</h1>
      <p>
        the place that you'll can know all pokemon from the commodity of your
        home or institution enjoy it
      </p>



{
  isLoading ? (<img src="http://gifgifs.com/animations/anime/dragon-ball-z/Vegeta/vegeta_21.gif"></img>) : (


<div className="contenedor">
        {randomPokemons.map((pokemon) => (
          <div id="pokemons" key={pokemon.id}>
            <img
              src={pokemon.sprites.front_shiny}
              alt={pokemon.name}
              id="pokemonsImgs"
            />
            <p>{pokemon.name}</p>
            <p>{pokemon.id}</p>
          </div>
        ))}

      </div>


  )
}
      
    </header>



    </body>
  );
}

export default Header;

//mostrar pokemones en ordeny ID
//Poner barra de busqueda para buscar el pokemon por el nombre
