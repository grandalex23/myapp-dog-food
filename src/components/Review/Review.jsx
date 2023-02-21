import React, { useCallback } from "react";

import useApi from "../../hooks/useAPI";
import api from "../../utils/api";
import Rating from "../Rating/Rating";

import "./style.css";

const Review = ({ author, updated_at, rating, text }) => {
   const getAuthorInfo = useCallback(() => api.getAuthorReviewInfo(author), [author]);
   const { data } = useApi(getAuthorInfo);

   return (
      <div className="review">
         <div className="info">
            <div className="name">{data?.name}</div>
            <span className="date">{updated_at}</span>
         </div>
         <Rating rate={rating}></Rating>
         <p className="text">{text}</p>
      </div>
   );
};

export default Review;
