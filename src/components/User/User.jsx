import React from "react";
import style from './style.module.css';

const User = ({ user }) => {
   return (
      <div className={style.user}>
         <span className={style.name}>{user?.name || 'Имя Фамилия'}</span>
         <span className={style.about}>{user?.about || 'Профессия'}</span>
      </div>
   );
};

export default User; 
