import React, { useContext } from "react";
import { Spin } from "antd";

import CardList from "../../components/CardList/CardList";
import NotFound from "../../components/NotFound/NotFound";
import PageHeader from '../../components/PageHeader/PageHeader';
import { LoadingContext } from "../../context/loadingContext";

import s from "./style.module.css";

const FavouritePage = ({ favouriteCards }) => {
   const { isLoading } = useContext(LoadingContext);
   return favouriteCards.length === 0 ? (
      <NotFound title={'Товаров в избранном нет'} buttonText={'В каталог'} link={'/catalog'}></NotFound>
   ) : (
      <div>
         {isLoading ? (
            <Spin></Spin>
         ) : (
            <>
               <PageHeader title={'Избранное'} buttonText="На главную" link={'/'}></PageHeader>
               <CardList cards={favouriteCards}></CardList>
            </>
         )}
      </div>
   );
};

export default FavouritePage;
