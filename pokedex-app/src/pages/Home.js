import React, { useEffect, useState } from "react";

export const Home = () => {
  const [Pokemones, setPokemones] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
      .then((Response) => Response.json)
      .then((data) => {
        setPokemones([data])
  })
  
  return
  
  
  
  
  
  //   <h1>Home</h1>
  // {
    
    //   Pokemones.map(item => {
      //     return(
        //       <div key={item.id}>
  // <h1>{item.name}</h1>
  // <img src={item.sprites.other["official-artwork"] ["front_default"]} />
  
  
  //       </div>
  //     )
  
  //   })
  
  
  
  
  
  
  
  
}
  )
  
  
};
