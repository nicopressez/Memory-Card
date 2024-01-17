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

if (pokemonData[0])    return (
        <div>
          {pokemonData.map((pokemon, index) => (
            <div key={index}>
              <p>{pokemon.name}</p>
              <img src={pokemon.img} alt={pokemon.name} />
            </div>
          ))}
        </div>
      )
          }