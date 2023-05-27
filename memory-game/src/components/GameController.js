import React, { useState } from 'react';
import GameBoard from './GameBoard';
import Header from './Header';

function GameController() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardsArr, addCard] = useState([]);

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
      setScore((prevScore) => prevScore + 1);
    } else {
      setHighScore((prevHighScore) => (score > prevHighScore ? score : prevHighScore));
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