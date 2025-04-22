import Header from './components/Header';
import Container from './components/Container';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [ pokemon , setPokemon] = useState([])


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
    console.log(data)
  }

  useEffect(() => {

    const arrayOfPokemons = ['pikachu', 'charmander', 'mewtwo', 'bulbasaur', 'squirtle', 'snorlax', 'vulpix', 'poliwrath', 'alakazam', 'tentacruel', 'golem', 'chansey']

    const pokemonArray = shuffle(arrayOfPokemons)

    console.log(pokemonArray)

    const pokemonPromises = pokemonArray.map( poke => 
      fetch(`${pokemonMainURL}${poke}`)
        .then(response => response.json())
        .catch(error => console.log(error))
    )
    
    Promise.all(pokemonPromises).then(data => setPokemon(data))

  }, [])

  return (
    <div className='app-container'>
      {/* The Header will have the Title, rule, and the scores => Current Score and Best Score.  */}
      <Header />
      {/* The container will the cards displayed, where the APP wil send the infos after the promises. */}
      <Container 
        pokemonArrayData={pokemon} 
        nameClicking={getNameData}
      />
    </div>
  )
}

export default App
