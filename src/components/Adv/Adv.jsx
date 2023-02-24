import React from "react";



import s from "./style.module.css";

const Adv = ({ title, subtitle, pictures }) => {
   return (
      <div className={s.adv}>
         <img src={pictures} className={s.image} />
         <div>{title}</div>
         <div>{subtitle}</div>
         {/* <img src={img}></img> */}

      </div>
   );
};

export default Adv;
