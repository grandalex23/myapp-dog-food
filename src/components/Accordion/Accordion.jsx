import React, { useState } from "react";
import style from "./style.module.css";
import cn from "classnames";

const Accordion = ({ title, text }) => {
   const [selected, setSelected] = useState(false);

   return (
      <div className={cn(style.accordion, { [style.active]: selected })}>
         <button className={style.button} onClick={() => setSelected(!selected)}>
            <p className={style.title}>
               <span>{selected ? "-" : "+"}</span>
               {title}
            </p>
         </button>
         {selected && (
            <div className={style.content}>
               <div className={style.text}>{text}</div>
            </div>
         )}
      </div>
   );
};

export default Accordion;