import React, { useState } from "react"
import { ReactComponent as Icon } from "../../assets/images/ic-search.svg"
import { ReactComponent as IconClose } from "../../assets/images/ic-close-input.svg"

import s from "./style.module.css"

function Search({ onBtnSearchClick }) {
   const [text, setText] = useState("");
   const onSubmit = (el) => {
      el.preventDefault();
      onBtnSearchClick(text)
   }

   return (
      <form onSubmit={onSubmit} className={s.search}>
         <input
            onChange={(e) => {
               setText(e.target.value);
            }}
            className={s.input}
            placeholder="Поиск"
            value={text}
         />
         <Icon className={s.icon} onClick={() => onBtnSearchClick(text)} />
         <IconClose
            className={s.iconCross}
            onClick={() => {
               setText("");
               onBtnSearchClick("");
            }}
         />
      </form>
   );
}

export default Search;