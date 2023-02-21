import React from 'react';

import Card from '../../components/Card/Card';

import s from "./style.module.css"

const CardList = ({ cards }) => {
   return <div className={s.cards}>
      {cards?.map((card) => (
         <Card key={card._id} {...card} />
      ))}
   </div>
};

export default CardList;
