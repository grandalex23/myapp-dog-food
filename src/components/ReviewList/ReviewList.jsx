import React from "react";

import Review from "../Review/Review";

const ReviewList = ({ reviews }) => {
   return (
      <>
         {reviews.map((review) => (
            <Review key={review._id} {...review}></Review>
         ))}
      </>
   );
};

export default ReviewList;
