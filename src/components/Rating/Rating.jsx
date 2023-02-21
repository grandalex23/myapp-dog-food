import React, { useEffect, useState, useCallback } from "react";
import cn from "classnames";

import { ReactComponent as Star } from "../../assets/images/star.svg";

import s from "./style.module.css"


const Rating = ({ rate, setRate, isEditable = false }) => {
   const [ratingArray, setRatingArray] = useState(new Array(5).fill(<></>));

   useEffect(() => setRating(rate), [rate]);

   const setRating = (currentRating) => {
      const updatedRating = ratingArray.map((el, index) => {
         return (
            <Star
               onMouseLeave={() => isEditable && setRating(rate)}
               onClick={() => isEditable && setRate(index + 1)}
               className={cn(s.star, { [s.active]: index < currentRating })}
               onMouseEnter={() => isEditable && setRating(index + 1)}
            ></Star>
         );
      });
      setRatingArray(updatedRating)
   };

   return (
      <div>
         {ratingArray.map((el, i) => <span key={i}>{el}</span>)}
      </div >
   )


}

export default Rating;
