import React from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import style from "./style.module.css";
import telegram from "./img/telegram.svg";
import instagram from "./img/instagram.svg";
import viber from "./img/viber.svg";
import whatsapp from "./img/whatsapp.svg";
import vk from "./img/vk.svg";
import Logo from "../Logo/Logo";

const Footer = () => {
   return (
      <footer className={style.footer}>
         <div className={style.wrapper}>
            <div className={style.col}>
               <Logo className="logo footer__logo" href="/" title="Логотип" />
               <p className="footer__copyright">© «Интернет-магазин DogFood.ru»</p>
            </div>
            <div className={style.col}>
               <nav className={style.menu}>
                  <a href="/catalogue" className={style["menu__item"]}>
                     Каталог
                  </a>
                  <a href="/catalogue" className={style["menu__item"]}>
                     Акции
                  </a>
                  <a href="/catalogue" className={style["menu__item"]}>
                     Новости
                  </a>
                  <a href="/catalogue" className={style["menu__item"]}>
                     Отзывы
                  </a>
               </nav>
            </div>
            <div className={style.col}>
               <nav className={style.menu}>
                  <a href="/catalogue" className={style["menu__item"]}>
                     Оплата и доставка
                  </a>
                  <NavLink to="/faq" style={({ isActive }) => (isActive ? { textDecoration: "underline" } : undefined)} className={style["menu__item"]}>
                     Часто спрашивают
                  </NavLink>
                  <a href="/catalogue" className={style["menu__item"]}>
                     Обратная связь
                  </a>
                  <a href="/catalogue" className={style["menu__item"]}>
                     Контакты
                  </a>
               </nav>
            </div>
            <div className={style.col}>
               <div className={style.contacts}>
                  <p className={style["contacts__title"]}>Мы на связи</p>
                  <a className={cn(style["contacts__tel"], style["contacts__link"])} href="tel:89177172179">
                     8 (999) 00-00-00
                  </a>
                  <a className={cn(style["contacts__mail"], style["contacts__link"])} href="mailto:hordog.ru@gmail.com">
                     dogfood.ru@gmail.com
                  </a>
                  <ul className={cn(style["socials"], style["contacts__socials"])}>
                     <li className={style["socials__item"]}>
                        <a className={style["socials__link"]} href="/#">
                           <img src={telegram} alt="telegram" className={style["socials__icon"]} />
                        </a>
                     </li>

                     <li className={style["socials__item"]}>
                        <a className={style["socials__link"]} href="/#">
                           <img src={whatsapp} alt="whatsapp" className={style["socials__icon"]} />
                        </a>
                     </li>
                     <li className={style["socials__item"]}>
                        <a className={style["socials__link"]} href="/#">
                           <img src={viber} alt="viber" className={style["socials__icon"]} />
                        </a>
                     </li>
                     <li className={style["socials__item"]}>
                        <a className={style["socials__link"]} href="/#">
                           <img src={instagram} alt="instagram" className={style["socials__icon"]} />
                        </a>
                     </li>
                     <li className={style["socials__item"]}>
                        <a className={style["socials__link"]} href="/#">
                           <img src={vk} alt="vk" className={style["socials__icon"]} />
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
