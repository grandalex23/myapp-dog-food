import React from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";

import Logo from "../Logo/Logo";

import telegram from "./img/telegram.svg";
import instagram from "./img/instagram.svg";
import viber from "./img/viber.svg";
import whatsapp from "./img/whatsapp.svg";
import vk from "./img/vk.svg";
import s from './style.module.css';

const Footer = () => {
   return (
      <footer className={s.footer}>
         <div className={s.wrapper}>
            <div className={s.col}>
               <Logo className="logo footer__logo" href="/" title="Логотип" />
               <p className="footer__copyright">© «Интернет-магазин DogFood.ru»</p>
            </div>
            <div className={s.col}>
               <nav className={s.menu}>
                  <Link href="/catalog" className={s['menu__item']}>
                     Каталог
                  </Link>
                  <a href="/catalogue" className={s['menu__item']}>
                     Акции
                  </a>
                  <a href="/catalogue" className={s['menu__item']}>
                     Новости
                  </a>
                  <a href="/catalogue" className={s['menu__item']}>
                     Отзывы
                  </a>
               </nav>
            </div>
            <div className={s.col}>
               <nav className={s.menu}>
                  <a href="/catalogue" className={s['menu__item']}>
                     Оплата и доставка
                  </a>
                  <NavLink to="/faq" style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : undefined)} className={s['menu__item']}>
                     Часто спрашивают
                  </NavLink>
                  <a href="/catalogue" className={s['menu__item']}>
                     Обратная связь
                  </a>
                  <a href="/catalogue" className={s['menu__item']}>
                     Контакты
                  </a>
               </nav>
            </div>
            <div className={s.col}>
               <div className={s.contacts}>
                  <p className={s['contacts__title']}>Мы на связи</p>
                  <a className={cn(s['contacts__tel'], s['contacts__link'])} href="tel:89177172179">
                     8 (999) 00-00-00
                  </a>
                  <a className={cn(s['contacts__mail'], s['contacts__link'])} href="mailto:hordog.ru@gmail.com">
                     dogfood.ru@gmail.com
                  </a>
                  <ul className={cn(s['socials'], s['contacts__socials'])}>
                     <li className={s['socials__item']}>
                        <a className={s['socials__link']} href="/#">
                           <img src={telegram} alt="telegram" className={s['socials__icon']} />
                        </a>
                     </li>

                     <li className={s['socials__item']}>
                        <a className={s['socials__link']} href="/#">
                           <img src={whatsapp} alt="whatsapp" className={s['socials__icon']} />
                        </a>
                     </li>
                     <li className={s['socials__item']}>
                        <a className={s['socials__link']} href="/#">
                           <img src={viber} alt="viber" className={s['socials__icon']} />
                        </a>
                     </li>
                     <li className={s['socials__item']}>
                        <a className={s['socials__link']} href="/#">
                           <img src={instagram} alt="instagram" className={s['socials__icon']} />
                        </a>
                     </li>
                     <li className={s['socials__item']}>
                        <a className={s['socials__link']} href="/#">
                           <img src={vk} alt="vk" className={s['socials__icon']} />
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

