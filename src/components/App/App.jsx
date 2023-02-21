import React, { useState, useEffect, useCallback } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Spin } from "antd";

import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import RegistrationForm from "../Form/RegistrationForm";
import Footer from "../Footer/Footer";

import CatalogPage from "../../pages/Catalog/CatalogPage";
import ProductPage from "../../pages/ProductPage/ProductPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage"
import FavoritePage from "../../pages/Favourite/FavouritePage"
import FAQPage from "../../pages/FAQ/FAQPage";
// import CardList from "../../pages/Catalog/CardList";
//import ContactList from "../ContactList/ContactList"
import LoginForm from "../Form/LoginForm";
import ResetForm from "../Form/ResetForm";
import MainForm from "../Form/MainForm";

import { UserContext } from "../../context/userContext";
import { LoadingContext } from "../../context/loadingContext";
//import { theme, ThemeContext } from "../../context/themeContext";

//import useDebounce from "../../hooks/useDebounce";
import isLike from "../../utils/utils";
import api from "../../utils/api";
import s from "./style.module.css"

function App() {
   const [cards, setCards] = useState([]);
   const [searchQuery, setSearchQuery] = useState(""); //** переменная где храниться наш поиск (его состояние)*/
   const [currentSort, setCurrentSort] = useState("default");
   const [sortedCards, setSortedCards] = useState([]);
   const [favouriteCards, setFavouriteCards] = useState([])
   const [user, setUser] = useState({});
   //const [contacts, setContacts] = useState([]);
   //const debounceValue = useDebounce(searchQuery, 1000);
   const [isLoading, setIsLoading] = useState(true); //** состояние для загрузки Spin */
   //const [currentTheme, setTheme] = useState(theme.light); //** состояние для Theme */
   //const onChange = (text) => setSearchQuery(text);
   const location = useLocation();
   const backgroundLocation = location.state?.backgroundLocation;
   const mainUrl = location.state?.mainUrl;

   const onBtnSearchClick = useCallback((newSearchQuery) => {
      setIsLoading(true);
      setSearchQuery(newSearchQuery)
      api.search(newSearchQuery)
         .then((data) => {
            setCards(data)
            setSortedCards(data);
         })
         .finally(() => setIsLoading(false))
   }, []);

   // const handleUpdateUser = useCallback((updateUser) => {
   //    api.updateUserInfo(updateUser).then((newUser) => setUser(newUser));
   // }, []);

   // useEffect(() => {
   //    onBtnSearchClick()
   // }, [debounceValue])

   useEffect(() => {
      Promise.all([api.getUserInfo(), api.getAllProducts()])
         .then(([userData, productsData]) => {
            setUser(userData);
            setCards(productsData.products);
            setSortedCards(productsData.products);
            const favourites = productsData.products.filter((product) => isLike(product.likes, userData._id));
            setFavouriteCards(favourites);
            setIsLoading(false);
         })
   }, []);

   const handleLikeStatus = useCallback((productId, productLikes) => {
      const isLiked = isLike(productLikes, user?._id)
      return api.changeLikeStatus(productId, isLiked).then((updateProduct) => {
         const updateCards = cards.map((card) => (card._id === updateProduct._id ? updateProduct : card));
         setCards(updateCards);
         setSortedCards(updateCards);
         if (isLiked) {
            setFavouriteCards((prevState) => prevState.filter((card) => card._id == updateProduct._id))
         } else {
            setFavouriteCards((prevState) => [...prevState, updateProduct]);
         }
         return updateProduct;
      });
   }, [cards, user._id]);

   const changeIsLoading = useCallback((isLoading) => {
      setIsLoading(isLoading);
   }, []);

   // const changeTheme = () => {
   //    console.log("theme");
   //    currentTheme === theme.light ? setTheme(theme.dark) : setTheme(theme.light);
   // };

   const onChangeSort = useCallback((newSort) => {
      setCurrentSort(newSort);
      if (newSort === 'cheap') {
         setSortedCards([...cards].sort((a, b) => a.price - b.price));
      }
      if (newSort === 'low') {
         setSortedCards([...cards].sort((a, b) => b.price - a.price));
      }
      if (newSort === 'sale') {
         setSortedCards([...cards].sort((a, b) => b.discount - a.discount));
      }
      if (newSort === 'default') {
         setSortedCards(cards);
      }
   }, [cards]);

   // const [modalActive, setModalActive] = useState(false);

   // const onFormSubmit = useCallback((contact) => {
   //    setContacts([...contacts, contact]);
   // },
   //    [contacts]
   // );

   return (
      // <ThemeContext.Provider value={{ theme: currentTheme, changeTheme }}>
      <LoadingContext.Provider value={{ isLoading, changeIsLoading }}>
         <UserContext.Provider value={{ user, handleLikeStatus, favourites: favouriteCards.length }}>
            {/* <Modal active={modalActive} setActive={setModalActive}>
                  <MainForm></MainForm>
               </Modal> */}
            {/* <Form onFormSubmit={onFormSubmit}></Form> */}
            {/* <ContactList> contacts={contacts} </ContactList> */}
            {/* <div onClick={() => setModalActive(true)}>Регистрация и вход</div> */}
            <Header user={user}>
               {/* onClickLoginButton={() => { setBackgroundLocation(location.pathname) }} */}
               <Logo />
               <Routes>
                  <Route path="/" element={<Search onBtnSearchClick={onBtnSearchClick} />}></Route>
                  <Route path="/catalog" element={<Search onBtnSearchClick={onBtnSearchClick} />}></Route>
               </Routes>
            </Header>
            <div className={s.container}>
               <Routes location={backgroundLocation ? { ...backgroundLocation, pathname: mainUrl } : location}>
                  {/* Переотрисовали на этапе создания страницы Избранное */}
                  {/* <Route path="/" element={< CardList cards={cards} />}></Route> */}
                  <Route path="/" element={< CatalogPage cards={sortedCards} currentSort={currentSort} onChangeSort={onChangeSort} searchQuery={searchQuery} />}></Route>
                  <Route path="/catalog" element={< CatalogPage cards={sortedCards} currentSort={currentSort} onChangeSort={onChangeSort} searchQuery={searchQuery} />}></Route>
                  <Route path="/product/:productId" element={<ProductPage />}></Route>
                  <Route path="/faq" element={<FAQPage />}> </Route>
                  <Route path="/favourite" element={<FavoritePage favouriteCards={favouriteCards} />}> </Route>
                  <Route path="/registration" element={<RegistrationForm />}></Route>
                  <Route path="/reset" element={<ResetForm />}></Route>
                  <Route path="/login" element={<LoginForm />}></Route>
                  <Route path="*" element={<NotFoundPage />}> </Route>
               </Routes>
               {/* <div className={s.container}> {isLoading ? <Spin className={s.spin} /> : < CardList userId={user?._id} handleLikeStatus={handleLikeStatus} cards={cards} />} </div> */}
               {/* <div className={s.container}>{isLoading ? <Spin className={s.spin} /> : <ProductPage user={user} />}</div> */}
               {/* <div className={s.container}>{isLoading ? <Spin /> : <FAQPage />}</div> */}
               {/* <div className={s.container}>{isLoading ? <Spin /> : <NotFound />}</div> */}

               {backgroundLocation && (
                  <Routes>
                     <Route
                        path="/login"
                        element={
                           <Modal >
                              <LoginForm></LoginForm>
                           </Modal>
                        }
                     ></Route>
                     <Route
                        path="/reset"
                        element={
                           <Modal>
                              <ResetForm></ResetForm>
                           </Modal>
                        }
                     ></Route>
                     <Route
                        path="/registration"
                        element={
                           <Modal>
                              <RegistrationForm></RegistrationForm>
                           </Modal>
                        }
                     ></Route>
                  </Routes>
               )}
            </div>
            <Footer />
         </UserContext.Provider>
      </LoadingContext.Provider >
      // </ThemeContext.Provider >
   );
}

export default App;
