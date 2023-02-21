import React from "react";

import cn from "classnames";

import s from "./style.module.css";

const Sort = ({ currentSort, tabs, onChangeSort }) => {
   return (
      <div className={s.sort}>
         {tabs.map((tab) => (
            <div onClick={() => onChangeSort(tab.id)} key={tab.id} className={cn(s.tab, { [s.selected]: currentSort === tab.id })}>
               {tab.title}
            </div>
         ))}
      </div>
   );
};

export default Sort;
