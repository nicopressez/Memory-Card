const allPokemons = [];

export default async function getCards(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur", {
        method: "GET"
    })
    const cards = await response.json();
    const pokemonName = cards.name
    const pokemonImg = cards.sprites.front_default
    allPokemons.push({name: pokemonName, img:pokemonImg})
    console.log(allPokemons)
}