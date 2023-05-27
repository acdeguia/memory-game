import React from "react";
import logo from '../assets/logo.svg'

function Header(props) {

    const { score, highScore } = props;
    return(
        <div className="header">
            <img src={logo} alt="" />
            <h1>Memory Card Game</h1>
            <h2>DONT CLICK THE SAME CARD TWICE</h2>
            <div className="score">
            <p>CURRENT SCORE: {score}</p>
                <p>BEST SCORE: {highScore}</p>
            </div>
        </div>
    )
}

export default Header