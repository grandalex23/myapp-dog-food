import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { ReactComponent as SaveIcon } from "..//..//assets/images/save.svg";
import cn from "classnames";

import { UserContext } from "../../context/userContext";
import Button from "../Button/Button";
import isLike from "../../utils/utils";

import style from "./style.module.css";

const Card = ({ styletheme, _id, likes, name, pictures, weight, price, discount, description, tags }) => {
   const newPrice = Math.round(price - (price * discount / 100))

   const { user, handleLikeStatus } = useContext(UserContext);

   const isLiked = isLike(likes, user._id);

   const onClick = () => {
      handleLikeStatus(_id, likes);
      console.log(_id, likes);
   };

   return (
      <div className={style.card} styletheme={styletheme}>
         <div className={cn(style.sticky, style['sticky_type_top-left'])}>
            {discount > 0 && <span className={style.discount}>{discount} %</span>}
            {tags && tags.map((tag) => <span className={cn(style.discount, style[`tag_type_${tag}`])}>{tag}</span>)}
         </div>
         {/*"card__sticky card__sticky_type-top-right" */}
         <div className={cn(style.sticky, style['sticky_type_top-right'])}>
            <SaveIcon onClick={onClick} className={cn(style.favorite, { [style.isLike]: !isLiked })} />
         </div>
         {/* ссылка на блок  инфо и фото товаре  */}
         <Link to={`/product/${_id}`} className={style.link}>
            <img src={pictures} alt={description} className={style.image} />
            <div className={style.desc}>
               {discount > 0 && <span className={style['old-price']}>{price} р</span>}
               <span className={cn(style.price, { [style['price_discount']]: discount > 0 })}>{newPrice} P</span>
               <span className={style.weight}>{weight}</span>
               <p className={style.name}>{name}</p>
            </div>
         </Link >
         <Button text="В корзину" type="secondary"></Button>
      </div >
   )
}

export default Card;