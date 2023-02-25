import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";
import Adv from "../../components/Adv/Adv";

import background from "./img/dog-running.svg";
import backgroundTwo from "./img/dog-food-eat.svg";

import s from "./style.module.css";

const MainPage = () => {
   const navigate = useNavigate();
   return (
      // <div className={s.box}>
      <div className={s.info}>
         <h1>Крафтовые <br /> лакомства  для собак</h1>
         <p>Всегда свежие лакомства ручной работы <br /> с доставкой по России и Миру</p>
         <img src={background} className={s.image} />
         <img src={backgroundTwo} className={s.imageTwo} />
         <Adv className={s.adv} title={"Подарок за первый заказ!"} subtitle={"Скидка за последующие три заказа!"} />
         <div> </div>
         <Button type="secondary" onClick={() => navigate("/catalog")}>{"В каталог >"}</Button>
      </div>
      // </div>

   );
};

export default MainPage;
