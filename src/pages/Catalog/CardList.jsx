import React, { useContext } from "react";
import Card from "../../components/Card/Card";
import { LoadingContext } from "../../context/loadingContext";
import { Spin } from "antd";
import style from "./style.module.css";
import { ThemeContext } from "../../context/themeContext";
// import uniqid from "uniqid";

const CardList = ({ cards }) => {
   // const cardsWithId = cards.map((card) => {
   //    return { ...card, id: uniqid() }; });
   const { isLoading } = useContext(LoadingContext);
   const { theme } = useContext(ThemeContext);


   return (
      <div className={style.cards}>
         {isLoading ? <Spin className={style.spin} /> : cards?.map((card) =>
            <Card key={card._id} {...card} styletheme={{ backgroundColor: theme.backgroundColor, color: theme.color }} />)}
      </div>
   );
};

export default CardList;
