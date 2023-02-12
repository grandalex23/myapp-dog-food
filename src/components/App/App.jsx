import React, { useCallback, useEffect, useState } from "react";
import { Spin } from "antd";

import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import CardList from "../../pages/Catalog/CardList";
import ProductPage from "../../pages/ProductPage/ProductPage";
import Footer from "../Footer/Footer";
import NotFoundPage from "../../pages/NotFound/NotFound"
import FAQPage from "../../pages/FAQ/FAQPage";
import { UserContext } from "../../context/userContext";
import { LoadingContext } from "../../context/loadingContext";
import { ThemeContext, theme } from "../../context/themeContext";
import { Route, Routes } from "react-router-dom";

//import useDebounce from "../../hooks/useDebounce";
import isLike from "../../utils/utils";
import api from "../../utils/api";
import style from "./style.module.css"

function App() {
   const [cards, setCards] = useState([]);
   const [user, setUser] = useState({});
   //const [searchQuery, setSearchQuery] = useState(""); //** переменная где храниться наш поиск*/
   //const debounceValue = useDebounce(searchQuery, 1000);
   const [isLoading, setIsLoading] = useState(true); //** состояние для загрузки Spin */
   const [currentTheme, setTheme] = useState(theme.light); //** состояние для Theme */
   //const onChange = (text) => setSearchQuery(text);
   const onBtnSearchClick = useCallback((newSearchQuery) => {
      setIsLoading(true);
      //setSearchQuery(newSearchQuery)
      api.search(newSearchQuery)
         .then(data => setCards(data))
         .finally(() => setIsLoading(false))
   }, []);

   const handleUpdateUser = useCallback((updateUser) => {
      api.updateUserInfo(updateUser).then((newUser) => setUser(newUser));

   }, []);


   // useEffect(() => {
   //    onBtnSearchClick()
   // }, [debounceValue])

   useEffect(() => {
      Promise.all([api.getUserInfo(), api.getAllProducts()])
         .then(([userData, productsData]) => {
            setUser(userData);
            setCards(productsData.products);
            setIsLoading(false);
         })

   }, []);

   const handleLikeStatus = useCallback((productId, productLikes) => {
      const isLiked = isLike(productLikes, user?._id)
      return api.changeLikeStatus(productId, isLiked).then((updateProduct) => {
         const updateCards = cards.map((card) => (card._id === updateProduct._id ? updateProduct : card));
         setCards(updateCards);
         return updateProduct;
      });
   }, [cards, user._id]);

   const changeIsLoading = (isLoading) => {
      setIsLoading(isLoading);
   }

   const changeTheme = (theme) => {
      console.log("theme");
      currentTheme === theme.light ? setTheme(theme.dark) : setTheme(theme.light)
   }

   return (
      <ThemeContext.Provider value={{ theme: currentTheme, changeTheme }}>
         <LoadingContext.Provider value={{ isLoading, changeIsLoading }}>
            <UserContext.Provider value={{ user, handleLikeStatus }}>
               <Header user={user} handleUpdateUser={handleUpdateUser}>
                  <Logo />
                  <Search onBtnSearchClick={onBtnSearchClick} />
               </Header>
               <Routes>
                  <Route path="/" element={< CardList cards={cards} />}></Route>
                  <Route path="/product/:productId" element={<ProductPage />}></Route>
                  <Route path="/faq" element={<FAQPage />}> </Route>
                  <Route path="*" element={<NotFoundPage />}> </Route>
               </Routes>
               {/* <div className={style.container}> {isLoading ? <Spin className={style.spin} /> : < CardList userId={user?._id} handleLikeStatus={handleLikeStatus} cards={cards} />} </div> */}
               {/* <div className={style.container}>{isLoading ? <Spin className={style.spin} /> : <ProductPage user={user} />}</div> */}
               {/* <div className={style.container}>{isLoading ? <Spin /> : <FAQPage />}</div> */}
               {/* <div className={style.container}>{isLoading ? <Spin /> : <NotFound />}</div> */}
               <Footer />
            </UserContext.Provider>
         </LoadingContext.Provider>
      </ThemeContext.Provider>
   );
}

export default App;
