const URL = "https://pokeapi.co/api/v2/pokemon/";

async function getRandomPokemonId(id) {
  try {
    const response = await fetch(`${URL} ${id}`);
  } catch (error) {
    console.error();
  }
}
export default getRandomPokemonId;
