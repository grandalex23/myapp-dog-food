import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import CardList from "../CardList/CardList";
import { Spin } from "antd";
import useDebounce from "../../hooks/useDebounce";

import style from "./style.module.css"

import api from "../../utils/api";
import isLike from "../../utils/utils";

function App() {
   const [cards, setCards] = useState([]);
   const [user, setUser] = useState({});
   const [searchQuery, setSearchQuery] = useState(""); //** переменная где храниться наш поиск*/
   const debounceValue = useDebounce(searchQuery, 1000);
   const [isLoading, setIsLoading] = useState(true); //** состояние для Spin */
   const onChange = (text) => setSearchQuery(text);

   const onBtnSearchClick = () => {
      setIsLoading(true);
      api.search(debounceValue)
         .then(data => setCards(data))
         .finally(() => setIsLoading(false))
   };

   const handleUpdateUser = (updateUser) => {
      api.updateUserInfo(updateUser).then((newUser) => setUser(newUser));

   }


   useEffect(() => {
      onBtnSearchClick()
   }, [debounceValue])

   useEffect(() => {
      Promise.all([api.getUserInfo(), api.getAllProducts()])
         .then(([userData, productsData]) => {
            setUser(userData);
            setCards(productsData.products);
            setIsLoading(false);
         })

   }, []);

   const handleLikeStatus = (productId, productLikes) => {
      const isLiked = isLike(productLikes, user._id)
      api.changeLikeStatus(productId, isLiked).then((updateProduct) => {
         const updateCards = cards.map((card) => (card._id === updateProduct._id ? updateProduct : card));
         setCards(updateCards);
      });
   };

   return (
      <>
         <Header user={user} handleUpdateUser={handleUpdateUser}>
            <Logo />
            <Search onChange={onChange} onBtnSearchClick={onBtnSearchClick} />
         </Header>
         <div className={style.container}>
            {isLoading ? <Spin className={style.spin} /> : < CardList userId={user?._id} handleLikeStatus={handleLikeStatus} cards={cards} />}
         </div>
      </>
   );
}

export default App;
