import './Card.css'

function Card(props) {

    const capitalizeName = (name) => {
        return name[0].toUpperCase() + name.slice(1)
    }
    
    const handleClickCard = (name) => {
        console.log('working ' + name)
    }


    return (
        <div className='card-grid'>
            {props.pokemonArrayData && props.pokemonArrayData.map((data, index) => (
                <div  
                    key={index} 
                    className="card-container" 
                    onClick={() => handleClickCard(data.name)}
                >
                    {console.log(data.sprites.other['official-artwork'].front_default)}
                    <img src={data.sprites.other['official-artwork'].front_default} alt={data.name} />
                    <p className='pokemon-name'>{capitalizeName(data.name)}</p>
                </div>
            ))}
        </div>
    )
}

export default Card;