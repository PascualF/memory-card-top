import './Card.css'

function Card(props) {

    const capitalizeName = (name) => {
        return name[0].toUpperCase() + name.slice(1)
    }

    const sendNameToApp = (data) => {
        props.nameClicking(capitalizeName(data))   
    }

    return (
        <div className='card-grid'>
            {props.pokemonArrayData && props.pokemonArrayData.map((data, index) => (
                <div  
                    key={index} 
                    className="card-container" 
                    onClick={() => sendNameToApp(data.name)}
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