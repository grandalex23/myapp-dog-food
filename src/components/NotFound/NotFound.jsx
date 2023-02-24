import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";

const NotFound = ({ title, link, buttonText }) => {
   return (
      <>
         {/* <i></i> надо вставить иконку */}
         <h2>{title}</h2>
         <Link to={link}>
            <Button>{buttonText}</Button>
         </Link>
      </>
   );
};

export default NotFound;
