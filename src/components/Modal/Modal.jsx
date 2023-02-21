import React from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

import { ReactComponent as Cross } from "../../assets/images/ic-close-input.svg";

import s from "./style.module.css";

const Modal = ({ active, setActive, children }) => {
   const navigate = useNavigate();

   const onClose = () => {
      //setActive(false);
      navigate(-1);
   }

   return (
      <div className={cn(s.modal, s.active)} onClick={onClose}>
         <div className={cn(s.content, s.active)} onClick={(e) => e.stopPropagation()}>
            <Cross className={s.cross} onClick={onClose}></Cross>
            {children}
         </div>
      </div >
   );
};

export default Modal;
