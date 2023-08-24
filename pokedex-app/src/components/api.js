const URL = "";

async function getPokemon(id){

    try{
const response = await fetch (`${URL} ${id}`)
    }
catch(error){
    console.error()
}

}