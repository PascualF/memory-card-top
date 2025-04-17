import Card from "./Card";

function Container(props){


    return (
        <div>
            {/* The cards will be mapped here */}
            <h1>This is the Container</h1>
            <Card pokemonArrayData={props.pokemonArrayData}/>
        </div>
    )
}

export default Container;