import React from "react";
import logo from '../assets/logo.svg'

function Header() {
    return(
        <div>
            <img src={logo} alt="" />
            <h1>Memory Card Game</h1>
            <h2>DONT CLICK THE SAME CARD TWICE</h2>
            <div className="score">
            <p>CURRENT SCORE:</p>
                <p>BEST SCORE:</p>
            </div>
        </div>
    )
}

export default Header