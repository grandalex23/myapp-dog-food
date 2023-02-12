import React, { useState } from "react"
import { ReactComponent as Icon } from "../../assets/images/ic-search.svg"
import { ReactComponent as IconClose } from "../../assets/images/ic-close-input.svg"
import "./styleSearch.css"

function Search({ onBtnSearchClick }) {
   const [text, setText] = useState("");
   const onSubmit = (el) => {
      el.preventDefault();
      onBtnSearchClick(text)
   }

   return (
      <form onSubmit={onSubmit} className="search">
         <input onChange={(el) => {
            //onChange(el.target.value);
            setText(el.target.value);
         }}
            className="search__input"
            placeholder="Search"
            value={text}
         />
         <Icon className="search__icon" onClick={() => onBtnSearchClick(text)}></Icon>
         <IconClose className="search__icon-close" onClick={() => { setText("") }}></IconClose>
      </ form>
   );
}

export default Search;