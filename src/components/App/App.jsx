import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import datalocal from "../../assets/data.json";
import Search from "../Search/Search";
import CardList from "../CardList/CardList";

import style from "./style.module.css"

//import api from "../../utils/api";

function App() {
   const [cards, setCards] = useState([]);
   const [searchQuery, setSearchQuery] = useState(""); //** переменная где храниться наш поиск*/

   const onChange = (text) => setSearchQuery(text);

   const onBtnSearchClick = () => {
      setCards(datalocal.filter((card) => card.name.toLowerCase().includes(searchQuery)))
   };
   //    setCards((data) => data.filter((card) => card.name.toLowerCase().startsWith(searchQuery)))
   // };


   useEffect(() => {
      onBtnSearchClick()
   }, [searchQuery])

   // useEffect(() => {
   //    api.getAllProducts()
   //       .then(data => setCards(data.products))

   // }, [])


   return (
      <>
         <Header>
            <Logo></Logo>
            <Search onChange={onChange} onBtnSearchClick={onBtnSearchClick}></Search>
         </Header>
         <div className={style.comtainer}>
            <CardList cards={cards}></CardList>
         </div>
      </>
   );
}

export default App;
