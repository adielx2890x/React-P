

async function getRandomPokemonId(id) {
  try {

    const pokemonIds = Array.from({ length: 5 }, getRandomPokemonId);

    const fetchedPokemons = [];


    for (const id of pokemonIds) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      const data = await response.json();
      fetchedPokemons.push(data);
      console.log(pokemonIds)
  }} catch(error) {
  
  }}

export default getRandomPokemonId
