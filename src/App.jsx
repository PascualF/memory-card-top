import Header from './components/Header';
import Container from './components/Container';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  // This is for the pokemon list
  const [ pokemon , setPokemon] = useState([])

  // This is to re.shuffle the list everytime a pokemon is clicked.
  const [ reshuffleTrigger, setReshuffleTrigger ] = useState(0)

  // This will be to handle the list of clicked pokemon, one for the list, the other for the best score.
  const [ listClickPokemon, setListClickPokemon ] = useState([])
  const [ bestScore, setBestScore ] = useState(0)

  /* Get 12 pokemons */
  /* https://pokeapi.co/api/v2/pokemon/pikachu */
  /* Where to get sprite => other.official-artwork.front-default => OK */
  const pokemonMainURL = 'https://pokeapi.co/api/v2/pokemon/'

  const shuffle = (array) => {
    let shuffledArray = []; // The shuffled array
    let usedIndexs = []; // Tracking of the used indexs.

    let i = 0;
    while(i < array.length) {
      const randomIndex = Math.floor(Math.random()*array.length)
      if(!usedIndexs.includes(randomIndex)) {
        shuffledArray.push(array[randomIndex])
        usedIndexs.push(randomIndex)
        i++;
      }
    }
    return shuffledArray;
  }

  const getNameData = (data) => {
    let list = [...listClickPokemon]
    let trigger = reshuffleTrigger;

    if(!listClickPokemon.includes(data)){
      console.log("Still not in the list")
      list.push(data)
      setListClickPokemon(list)
    } else {
      console.log("Already in the list")
      // I need to make sure the 
      setBestScore((prevScore) => Math.max(prevScore, listClickPokemon.length))
      setListClickPokemon([])
    }

    setReshuffleTrigger(trigger + 1)

  }

  useEffect(() => {

    const arrayOfPokemons = ['pikachu', 'charmander', 'mewtwo', 'bulbasaur', 'squirtle', 'snorlax', 'vulpix', 'poliwrath', 'alakazam', 'tentacruel', 'golem', 'chansey']


    const pokemonArray = shuffle(arrayOfPokemons)

    /* console.log(pokemonArray) */

    const pokemonPromises = pokemonArray.map( poke => 
      fetch(`${pokemonMainURL}${poke}`)
        .then(response => response.json())
        .catch(error => console.log(error))
    )
    Promise.all(pokemonPromises).then(data => setPokemon(data))
  }, [reshuffleTrigger])

  return (
    <div className='app-container'>
      {/* The Header will have the Title, rule, and the scores => Current Score and Best Score.  */}
      <Header 
        currentScoreCount={listClickPokemon}
        bestScore={bestScore}
      />
      {/* The container will the cards displayed, where the APP wil send the infos after the promises. */}
      <Container 
        pokemonArrayData={pokemon} 
        nameClicking={getNameData}
      />
    </div>
  )
}

export default App
