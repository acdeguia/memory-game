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

function CardContainer(props) {

    const { handleGameLogic, score, highScore } = props;

  let images = [
    {
      src: one,
    },
    {
        src: two,
    },
    {
        src: three,
    },
    {
        src: four,
    },
    {
        src: five,
    },
    {
        src: six,
    },
    {
        src: seven,
    },
    {
        src: eight,
    },
    {
        src: nine,
    },
    {
        src: ten,
    }
  ];

  const [cards, setNewCards] = useState(images);

  const shuffle = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIdx = Math.floor(Math.random() * i);
      [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
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

export default CardContainer;
