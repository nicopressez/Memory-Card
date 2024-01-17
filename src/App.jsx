import { useState, useEffect } from "react";
import Scores from "./components/Scores";
import Cards from "./components/Cards";
import getCards from "./features/api";
import Gameend from "./components/Gameend";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [end, setEnd] = useState(false);
  const [restart, setRestart] = useState(true);

  useEffect(() => {
    if (restart) {
      const fetchData = async () => {
        try {
          const result = await getCards();
          setPokemonData(result);
        } catch (error) {
          alert("Error fetching Pokemon Data");
        }
      };
      fetchData();
      setRestart(false);
    }
  }, [restart]);

  // Update best score everytime score updates
  useEffect(() => {
    if (score > bestScore) setBestScore(score);
  }, [score, bestScore]);

  const shuffleCards = (array) => {
    let copy = array.slice(0);
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
    return copy;
  };

  const clickHandle = (name) => {
    const currentCard = pokemonData.find((pokemon) => pokemon.name === name);
    if (!currentCard.clicked) {
      currentCard.clicked = true;
      setScore(score + 1);
      setPokemonData(shuffleCards(pokemonData));
    } else setEnd(true);
  };

  const restartHandler = () => {
    setRestart(true);
    setEnd(false);
    setScore(0);
  };

  return (
    <main>
      <Scores score={score} bestScore={bestScore} />
      <Cards pokemonData={pokemonData} clickHandle={clickHandle} ended={end} />
      <Gameend ended={end} restartHandler={restartHandler} score={score} />
    </main>
  );
}

export default App;
