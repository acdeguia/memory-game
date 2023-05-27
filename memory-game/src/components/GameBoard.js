import React, { useState, useEffect } from "react";
import Card from "./Card";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import seven from "../assets/7.png";
import eight from "../assets/8.png";
import nine from "../assets/9.png";
import ten from "../assets/10.png";

function GameBoard(props) {

    const { handleGameLogic, score, highScore } = props;

    const images = [
      { src: one, title: one },
      { src: two, title: two },
      { src: three, title: three },
      { src: four, title: four },
      { src: five, title: five },
      { src: six, title: six },
      { src: seven, title: seven },
      { src: eight, title: eight },
      { src: nine, title: nine },
      { src: ten, title: ten }
    ];

  const [cards, setNewCards] = useState(images);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIdx = Math.floor(Math.random() * i);
      [array[randomIdx], array[i]] = [array[i], array[randomIdx]];
    }
  };


  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards);
    setNewCards(newCards);
  }, [score, highScore]);

  return (
    <div className="card-container">
      {cards.map((card) => (
        <Card card={card} key={card.title} handleGameLogic={handleGameLogic} />
      ))}
    </div>
  );
}

export default GameBoard;
