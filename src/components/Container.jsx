import Card from "./Card";
import './Container.css'

function Container(props){


    return (
        <div className="main-container">
            {/* The cards will be mapped here */}
            <h1>This is the Container</h1>
            <Card pokemonArrayData={props.pokemonArrayData}/>
        </div>
    )
}

export default Container;