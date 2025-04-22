import Card from "./Card";
import './Container.css'

function Container(props){


    return (
        <div className="main-container">
            {/* The cards will be mapped here */}
            <Card 
                pokemonArrayData={props.pokemonArrayData}
                nameClicking={props.nameClicking}   
            />
        </div>
    )
}

export default Container;