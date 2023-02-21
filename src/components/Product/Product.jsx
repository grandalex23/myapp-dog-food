import React, { useEffect, useState, useContext } from "react";
import cn from "classnames";

import Rating from "../Rating/Rating"
import Button from "../Button/Button";
import ReviewList from '../ReviewList/ReviewList';

import { UserContext } from "../../context/userContext";

import { ReactComponent as SaveIcon } from "../../assets/images/save.svg";

import isLike from "../../utils/utils";
import api from "../../utils/api";
import s from "./style.module.css";

const Product = ({ handleLikeStatus, name, description, price, discount, pictures, reviews, stock, likes }) => {
   const newPrice = Math.round(price - (price * discount / 100))
   const { user } = useContext(UserContext);
   const [count, setCount] = useState(0);
   const [rate, setRate] = useState(3);

   const isLiked = isLike(likes, user?._id);

   return (
      <div className={s.product}>
         <div className={s.header}>
            <div className={s.info}>
               <span className={s.articul}>Артикул</span>: 23888907
               <span className={s.rate}></span>
               <span className={s.reviewCount}>Количество отзывов:{reviews?.lenght}</span>
               <Rating rate={rate} seRate={setRate} isEditable></Rating>
            </div>
         </div>
         <div className={s.content}>
            <div className={s.imageWrapper}>
               <img className={s.image} src={pictures} alt={name} />
            </div>
            <div className={s.carousel}>
               <img className={s.caruselImage} src={pictures} alt={name} />
               <img className={s.caruselImage} src={pictures} alt={name} />
               <img className={s.caruselImage} src={pictures} alt={name} />
            </div>
            <div className={s.info}>
               <div className={s.price}>
                  {discount > 0 && <span className={s.oldPrice}>{price} р</span>}
                  <span className={cn(s.price, { [s.discount]: discount > 0 })}>{newPrice} P</span>
               </div>
               <div className={s.buttons}>
                  <div className={s.countButton}>
                     <div className={s.minus} onClick={() => count > 0 && setCount(count - 1)}>
                        -
                     </div>
                     <div className={s.count}>{count}</div>
                     <div className={s.plus} onClick={() => count < stock && setCount(count + 1)}>
                        +
                     </div>
                  </div>
                  <Button text="В корзину"></Button>
               </div>
               <div className={s.favourite}>
                  <SaveIcon onClick={handleLikeStatus} className={cn(s.favoriteIcon, { [s.isLike]: isLiked })} />
                  {isLiked ? "В избранное" : "В избранном"}
               </div>
               <div className={s.delivery}>
                  {/* <img src={truck} alt="truck" /> */}
                  <div className={s.right}>
                     <h3 className={s.name}>Доставка по всему Миру!</h3>
                     <p className={s.text}>
                        Доставка курьером — <span className={s.bold}> от 399 ₽</span>
                     </p>
                     <p className={s.text}>
                        Доставка в пункт выдачи — <span className={s.bold}> от 199 ₽</span>
                     </p>
                  </div>
               </div>
               <div className={s.delivery}>
                  {/* <img src={quality} alt="quality" /> */}
                  <div className={s.right}>
                     <h3 className={s.name}>Гарантия качества</h3>
                     <p className={s.text}>Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, чтобы удовлетворить ваши нужды.</p>
                  </div>
               </div>
            </div>
         </div>
         <div className={s.description}>
            <div className={s.title}>Описание</div>
            <div className={s.text}>{description}</div>
         </div>
         <div className={s.description}>
            <div className={s.title}>Характеристики</div>
            <div className={s.text}>{description}</div>
         </div>
         <div className={s.description}>
            <div className={s.title}>Отзывы</div>
            <ReviewList reviews={reviews}></ReviewList>
         </div>
         {/* <Button>В корзину</Button> */}
      </div>

   );
};

export default Product;





