import React from "react";
import style from "./style.module.css";
import Card from "../Card/Card";
// import uniqid from "uniqid";

const CardList = ({ cards, handleLikeStatus, userId }) => {
   // const cardsWithId = cards.map((card) => {
   //    return { ...card, id: uniqid() };
   // });

   return (
      <div className={style.cards}>
         {cards?.map((card) => (
            <Card userId={userId} handleLikeStatus={handleLikeStatus} key={card._id} {...card} />
         ))}
      </div>
   );
};

export default CardList;
