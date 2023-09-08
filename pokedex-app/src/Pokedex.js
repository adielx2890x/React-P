import React, {useState, useEffect} from "react";
import { getPokemonList } from "./api";



function Ajai() {
const [pokemonList, setPokemonList] = useState ([])

useEffect(()=>{
async function fetchData(){
  const url =  `https://pokeapi.co/api/v2/pokemon`;
  const data = await getPokemonList(url)
  if (data){
    setPokemonList(data.array)
  }
}

fetchData()
}, [])





//

  return (
    <main id="Pokedex">
      <div>
        <h1>Pokedex</h1>
      </div>
<div>
  <ul id="pokemon">
    {pokemonList.map((pokemon) =>(
      <li id="eachPokemon" key={pokemon.id}>
PID: {pokemon.id} <br/>
Pokemon: {pokemon.name}, 
<img id="pImgs" src={pokemon.image}/>

      </li>
    )
    
    )}
  </ul>
</div>
      <div>
        <button>

Siguiente
        </button>
        
        <button>

Anterior
        </button>

        
      </div>
    </main>
  );
}

export default Ajai;
