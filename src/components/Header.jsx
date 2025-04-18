import './Header.css'

function Header(){
    
    return (
        <div className="header-container">
            <h1>Welcome to Memory Card Game</h1>
            <div className='score-div'>
                <p>Current Score</p>
                <p>Best Score</p>
            </div>
        </div>
    )
}

export default Header;