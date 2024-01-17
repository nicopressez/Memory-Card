import { useState, useEffect } from 'react'
import './App.css'
import Scores from './components/Scores'
import Cards from './components/Cards'
import getCards from './features/api'


function App() {

  const [pokemonData, setPokemonData] = useState([]);
  const [score, setScore] = useState(0);

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

    const clickHandle = (name) => {
        const currentCard = pokemonData.find(pokemon => pokemon.name === name)
        if (!currentCard.clicked){
        currentCard.clicked = true;
        setScore(score + 1)
        setPokemonData(shuffleCards(pokemonData));}

      

    }


  return (
    <main>
    <Scores score={score}/>
    <Cards pokemonData={pokemonData} clickHandle={clickHandle} 
            />
    </main>
  )
}

export default App
