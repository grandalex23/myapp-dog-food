import React, { useContext } from "react";
import { useMatch } from "react-router-dom";
import { Spin } from "antd";


import CardList from "../../components/CardList/CardList";
import PageHeader from "../../components/PageHeader/PageHeader";
import NotFound from "../../components/NotFound/NotFound";
import Sort from "../../components/Sort/Sort";
import { LoadingContext } from "../../context/loadingContext";

//import style from "./style.module.css";


const tabs = [
   {
      id: "cheap",
      title: "Сначала дешевые",
   },
   {
      id: "low",
      title: "Сначала дорогие",
   },
   {
      id: "sale",
      title: "По скидке",
   },
   {
      id: "default",
      title: "Без сортировки",
   },
];

const CatalogPage = ({ cards, searchQuery, onChangeSort, currentSort }) => {
   const { isLoading } = useContext(LoadingContext);

   return (
      <>
         {/* <div className={style.cards}> */}
         {/* {!useMatch("/") && <PageHeader title={"Каталог"} buttonText="На главную" link={"/"}></PageHeader>} */}
         {isLoading ? (
            <Spin></Spin>
         ) : (
            <>
               {searchQuery?.length > 0 && cards?.length > 0 && (
                  <h2>
                     По запросу {searchQuery} найдено {cards?.length} товаров
                  </h2>
               )}
               {cards?.length > 0 && <Sort currentSort={currentSort} onChangeSort={onChangeSort} tabs={tabs}></Sort>}
               <div>
                  {cards?.length === 0 ? <NotFound title={"По данному запросу ничего не найдено"} buttonText={"Перейти в каталог"} link={"/catalog"}></NotFound> : <CardList cards={cards}></CardList>}
               </div>
            </>
         )}
      </>
   );
};

export default CatalogPage;