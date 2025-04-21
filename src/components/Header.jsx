import './Header.css'

function Header(){
    
    return (
        <div className="header-container">
            <h1>Memory Card Game</h1>
            <div className='score-div'>
                <p>Current Score: 0</p>
                <p>Best Score: 0</p>
            </div>
        </div>
    )
}

export default Header;