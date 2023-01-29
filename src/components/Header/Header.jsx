import User from "../User/User";
import Button from "../Button/Button";

import style from "./style.module.css";


export default function Header({ children, user, handleUpdateUser }) { //** что такое children? */
   const updateUser = { name: "Новое имя", about: "Новое инфо" };
   const onClick = () => {
      handleUpdateUser(updateUser)
   }

   return <header className={style.header}>
      {children}
      <User user={user}></User>
      <Button onClick={onClick} text="Изменить"></Button>
   </header>;
}