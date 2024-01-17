import { useState, useEffect } from "react";
import getCards from "../features/api";

export default function Cards({pokemonData, clickHandle}) {

if (pokemonData[0])    return (
        <div>
          {pokemonData.map((pokemon) => (
            <div key={pokemon.name} onClick={() => clickHandle(pokemon.name)}>
              <p>{pokemon.name}</p>
              <img src={pokemon.img} alt={pokemon.name}  />
            </div>
          ))}
        </div>
      )

    return (
        <div>Loading</div>
    )
          }