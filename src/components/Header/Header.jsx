import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

//import User from "../User/User"
import Button from "../Button/Button"
import { ReactComponent as Favourites } from "../../assets/images/save.svg";
import { ReactComponent as Cart } from "../../assets/images/cart.svg";
import { ReactComponent as Login } from "../../assets/images/profile.svg";

import { UserContext } from "../../context/userContext";
//import { ThemeContext } from "../../context/themeContext"


import s from "./style.module.css";


const Header = ({ children, onClickLogonButton, loggedIn, logout }) => {
   const { favourites } = useContext(UserContext);
   const location = useLocation();

   // const updateUser = { name: "Новое имя", about: "Новое инфо" }
   // const { user } = useContext(UserContext)
   // const { changeTheme } = useContext(ThemeContext)
   // const onClick = () => {
   //    handleUpdateUser(updateUser)
   // }


   return (
      <header className={s.header}>
         {children}
         <div className={s.icons}>
            {loggedIn && (
               <>
                  <Link to="/favourite">
                     <div className={s.icon}>
                        {favourites > 0 && <div className={s.label}>{favourites}</div>}
                        <Favourites className={cn(s.favourites, s.icon)} title="Избранное" />
                     </div>
                  </Link>
                  {/* <User user={user}></User>
               <Button onClick={onClick} text="Сменить Пользователя "></Button>
               <Button onClick={changeTheme} text="Сменить Тему"></Button>
               <Button text="Избранное"></Button> */}
                  <Cart className={s.icon} title="Корзина" />
               </>
            )}
            {loggedIn ? (<Button onClick={logout}>Выход</Button>) :
               (<Link to={"/login"} state={{ backgroundLocation: location, mainUrl: location.pathname }}>
                  <Login className={s.icon} tittle="Вход" onClick={onClickLogonButton} />
               </Link>)}
         </div>
      </header >
   );
};

export default Header;