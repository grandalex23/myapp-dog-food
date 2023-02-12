import React, { useEffect, useState, useContext } from "react";
import { ReactComponent as SaveIcon } from "../../assets/images/save.svg";
import Button from "../Button/Button";
import cn from "classnames";

import api from "../../utils/api";
import isLike from "../../utils/utils";
import { UserContext } from "../../context/userContext";
import style from "./style.module.css";

const Product = ({ handleLikeStatus, name, description, price, discount, pictures, reviews, stock, likes }) => {
   const [count, setCount] = useState(0);
   const newPrice = Math.round(price - (price * discount / 100))
   const { user } = useContext(UserContext);
   const isLiked = isLike(likes, user?._id);

   return (
      <>
         <div className="header">
            {name}
            <div>
               <span className={style.articul}></span>
               <span className={style.rate}></span>
               <span className={style.reviewCount}>{reviews?.lenght}</span>
            </div>
         </div>
         <div className={style.content}>
            <div className={style.imageWrapper}>
               <img className={style.image} src={pictures} alt={name} />
            </div>
            <div className={style.imageCarusel}></div>
            <div className={style.info}></div>
            <div className={style.price}>
               {discount > 0 && <span className={style.oldPrice}>{price} р</span>}
               <span className={cn(style.price, { [style.discount]: discount > 0 })}>{newPrice} P</span>
            </div>
            <div className={style.button}>
               <div className={style.countButton}>
                  <div className={style.minus} onClick={() => count > 0 && setCount(count - 1)}>
                     -
                  </div>
                  <div className={style.count}>{count}</div>
                  <div className={style.plus} onClick={() => count < stock && setCount(count + 1)}>
                     +
                  </div>
               </div>
               <Button text="В корзину"></Button>
            </div>
            <div className={style.favorite}>
               <SaveIcon onClick={handleLikeStatus} className={cn(style.favorite, { [style.isLike]: !isLiked })} />
               {isLiked ? "В избранное" : "В избранном"}
            </div>
            <div className={style.blockInfo}></div>
            <div className={style.blockInfo}></div>
         </div>
         <div className={style.description}>
            <div className={style.title}></div>
            <div className={style.text}>{description}</div>
         </div>
         <div className={style.description}>
            <div className={style.title}></div>
            <div className={style.text}>{description}</div>
         </div>
         <Button>Click PP Button</Button>
      </>

   );
};

export default Product;





