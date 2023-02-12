import React from "react";
import { ReactComponent as Icon } from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";



// function Logo({ greeting }) {

function Logo({ }) {

   return (
      <Link to="/">
         <Icon />;
      </Link>)
}

export default React.memo(Logo);