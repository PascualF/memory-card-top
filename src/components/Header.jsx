import './Header.css'

function Header(props){
    return (
        <div className="header-container">
            <h1>Pokemon Card Game</h1>
            <div className='score-div'>
                <p>Current Score: {props.currentScoreCount.length}</p>
                <p>Best Score: {props.bestScore}</p>
            </div>
        </div>
    )
}

export default Header;