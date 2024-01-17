import { useState, useEffect } from "react";
import getCards from "../features/api";

export default function Cards() {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getCards();
                setPokemonData(result);
            }catch (error){
                alert("Error fetching Pokemon Data");
            }
        } 
        fetchData();
    }, []);

    const shuffleCards = (array) => {
        let copy = array.slice(0);
        for (var i = copy.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = copy[i];
            copy[i] = copy[j];
            copy[j] = temp;
        }
        return copy
    } 

    const clickHandle = () => {
        setPokemonData(shuffleCards(pokemonData));
    }

if (pokemonData[0])    return (
        <div>
          {pokemonData.map((pokemon, index) => (
            <div key={index}>
              <p>{pokemon.name}</p>
              <img src={pokemon.img} alt={pokemon.name} onClick={clickHandle} />
            </div>
          ))}
        </div>
      )

    return (
        <div>Loading</div>
    )
          }