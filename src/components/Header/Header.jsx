import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { ThemeContext } from "../../context/themeContext";

import User from "../User/User";
import Button from "../Button/Button";

import style from "./style.module.css";


export default function Header({ children, handleUpdateUser }) { //** что такое children? */
   const updateUser = { name: "Новое имя", about: "Новое инфо" };
   const { user } = useContext(UserContext)
   const { changeTheme } = useContext(ThemeContext)

   const onClick = () => {
      handleUpdateUser(updateUser)
   }

   return <header className={style.header}>
      {children}
      <User user={user}></User>
      <Button onClick={onClick} text="Сменить Пользователя "></Button>
      <Button onClick={changeTheme} text="Сменить Тему"></Button>
   </header>;
}