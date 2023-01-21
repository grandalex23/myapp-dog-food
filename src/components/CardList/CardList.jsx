import React from "react";
import style from "./style.module.css";
import Card from "../Card/Card";
import uniqid from "uniqid";

const CardList = ({ cards }) => {
   const cardsWithId = cards.map((card) => {
      return { ...card, id: uniqid() };
   });
   return (
      <div className={style.cards}>
         {cardsWithId.map((card, i) => (
            <Card key={card.id} {...card} />
         ))}
      </div>
   );
};

export default CardList;
