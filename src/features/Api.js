export default async function getCards(){
    const allPokemons = [];
    const pokemonsToFetch = ["bulbasaur", "fearow", "beedrill", "abra",
                             "slaking", "duskull","dragonite", "tirtouga",
                            "mawile","flabebe", "luxio", "wartortle"]

for (let i = 0; i < pokemonsToFetch.length; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonsToFetch[i]}`, {
        method: "GET"
    })
    const cards = await response.json();
    const pokemonName = cards.name
    const pokemonImg = cards.sprites.front_default
    allPokemons.push({name: pokemonName, img:pokemonImg})
}
    return allPokemons
}