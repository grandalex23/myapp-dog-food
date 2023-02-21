import React from "react";
import { Link } from "react-router-dom";

import s from "./style.module.css";

const PageHeader = ({ title, link, buttonText }) => {
   return (
      <>
         <Link className={s.backButton} to={link}>
            {'< ' + buttonText}
         </Link>
         <div className={s.title}>{title}</div>
      </>
   );
};

export default PageHeader;
