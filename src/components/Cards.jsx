import { useState, useEffect } from "react";
import getCards from "../features/api";

export default function Cards({pokemonData, clickHandle, ended}) {

if (pokemonData[0] && !ended)    return (
        <div className="cardsContainer">
          {pokemonData.map((pokemon) => (
            <div key={pokemon.name} onClick={() => clickHandle(pokemon.name)}>
              <p>{pokemon.name}</p>
              <img src={pokemon.img} alt={pokemon.name}  />
            </div>
          ))}
        </div>
      )

    else if (!pokemonData[0])return (
        <div className="loading">Loading</div>
    )
          }