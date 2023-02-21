import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { ReactComponent as SaveIcon } from "..//..//assets/images/save.svg";
import cn from "classnames";

import { UserContext } from "../../context/userContext";
import Button from "../Button/Button";
import isLike from "../../utils/utils";

import s from "./style.module.css";

const Card = ({ styletheme, _id, likes, name, pictures, weight, price, discount, description, tags, card }) => {
   const newPrice = Math.round(price - (price * discount / 100))

   const { user, handleLikeStatus } = useContext(UserContext);

   const isLiked = isLike(likes, user._id);

   const onClick = () => {
      handleLikeStatus(_id, likes);
      console.log(_id, likes);
   };

   return (
      <div className={s.card} styletheme={styletheme} >
         <div className={cn(s.sticky, s["sticky_type_top-left"])}>
            {discount > 0 && <span className={cn(s.tag, s['tag_discount'])}>{discount} %</span>}
            {tags && tags.map((tag) => <span className={cn(s.tag, s[`tag_type_${tag}`])}>{tag}</span>)}
         </div>
         {/*"card__sticky card__sticky_type-top-right" */}
         <div className={cn(s.sticky, s["sticky_type_top-right"])}>
            <SaveIcon onClick={onClick} className={cn(s.favorite, { [s.isLike]: isLiked })} />
         </div>
         {/* ссылка на блок  инфо и фото товаре  */}
         <Link to={`/product/${_id}`} className={s.link}>
            <img src={pictures} alt={description} className={s.image} />
            <div className={s.desc}>
               {discount > 0 && <span className={s["old-price"]}>{price} р</span>}
               <span className={cn(s.price, { [s["price_discount"]]: discount > 0 })}>{newPrice} p</span>
               <span className={s.weight}>{weight}</span>
               <p className={s.name}>{name}</p>
            </div>
         </Link >
         <Button type="secondary">В корзину</Button>
      </div >
   )
}
//text="В корзину"

export default Card;