//  Header V2

// import React, { useState, useEffect } from "react";

// import { getRandomPokemonId } from "./components/api"; // Importa la función de otro archivo


// function HeaderV2() {
//   // Estado para almacenar los Pokémon aleatorios
//   const [randomPokemons, setRandomPokemons] = useState([]);

//   useEffect(() => {
//     // Función asincrónica para obtener Pokémon aleatorios
//     const fetchRandomPokemons = async () => {
//       try {
//         // Función para obtener un ID de Pokémon aleatorio
//         const getRandomId = () => Math.floor(Math.random() * 898) + 1;
//         const pokemonIds = Array.from({ length: 4 }, getRandomId); // Crea un array de IDs aleatorios

//         // Obtén los datos de los Pokémon usando map y Promise.all
//         const fetchedPokemons = await Promise.all(
//           pokemonIds.map(async (id) => getRandomPokemonId(id))
//         );

//         // Actualiza el estado con los Pokémon obtenidos
//         setRandomPokemons(fetchedPokemons);
//       } catch (error) {
//         console.error("Error al obtener datos de Pokémon aleatorios:", error);
//       }
//     };

//     // Llama a la función para obtener los Pokémon al montar el componente
//     fetchRandomPokemons();
//   }, []);

//   return (
//     <header id="pHeader">
//     <h1>Wellcome to the Pokedex</h1>
//     <p>the place that you'll can know all pokemon from the commodity of your home or institution enjoy it</p>
//     <div className="contenedor">
//       {randomPokemons.map((pokemon) => (
//         <div id="pokemons" key={pokemon.id}>
//           <img
//             src={pokemon.sprites.front_shiny}
//             alt={pokemon.name}
//             id="pokemonsImgs"
//           />
//           <p>{pokemon.name}</p>
//           <p>{pokemon.id}</p>
//         </div>
//       ))}
//     </div>

//   </header>
//   );
// }

// export default HeaderV2;
