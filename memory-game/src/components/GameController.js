import React, { useState } from 'react';
import GameBoard from './GameBoard';
import Header from './Header';

function GameController() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardsArr, addCard] = useState([]);

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleHighScore = () => {
    setHighScore(score);
  };

  const handleCard = (cardName) => {
    addCard((prevArr) => [...prevArr, cardName]);
  };

  const reset = () => {
    setScore(0);
    addCard([]);
  };

  const handleGameLogic = (cardName) => {
    if (!cardsArr.includes(cardName)) {
      handleCard(cardName);
      handleScore();
    } else {
      handleHighScore();
      reset();
    }
  };

  return (
    <div>
     <Header score={score} highScore={highScore} />
      <div className="card-container" id="card-container">
        <GameBoard
          handleGameLogic={handleGameLogic}
          score={score}
          highScore={highScore}
        />
      </div>
    </div>
  );
}

export default GameController;