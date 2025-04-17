import Header from './components/Header';
import Container from './components/Container';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [ pokemon , setPokemon] = useState([])

  /* Get 12 pokemons */
  /* https://pokeapi.co/api/v2/pokemon/pikachu */
  /* Where to get sprite => other.official-artwork.front-default */
  const pokemonMainURL = 'https://pokeapi.co/api/v2/pokemon/'
  

  useEffect(() => {

    const pokemonArray = ['pikachu', 'charmander', 'mewtwo', 'bulbasaur', 'squirtle', 'snorlax', 'vulpix', 'poliwrath', 'alakazam', 'tentacruel', 'golem', 'chansey']

    const pokemonPromises = pokemonArray.map( poke => 
      fetch(`${pokemonMainURL}${poke}`)
        .then(response => response.json())
        .catch(error => console.log(error))
    )
    
    Promise.all(pokemonPromises).then(data => setPokemon(data))

  }, [])

  return (
    <div>
      {/* The Header will have the Title, rule, and the scores => Current Score and Best Score.  */}
      <Header />
      {/* The container will the cards displayed, where the APP wil send the infos after the promises. */}
      <Container pokemonArrayData={pokemon}/>
    </div>
  )
}

export default App
