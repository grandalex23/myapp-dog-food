import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import cn from "classnames";

import Input from "../Input/Input";
import Button from "../Button/Button";

import { EMAIL_REGEXP, PASSWORD_REGEXP, PHRASES } from "../../utils/constants";
import s from "./style.module.css";

const LoginForm = ({ onChangeType }) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ mode: "onBlur" });

   const location = useLocation();

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
         <h2 className={s.title}>Вход</h2>
         <Input {...register("email", { required: true, pattern: { value: EMAIL_REGEXP, message: PHRASES.incorrectEmail } })} type="text" placeholder="Email" autoComplete="off" />
         {errors?.email && <div className={s.error}>{errors.email.message}</div>}
         <Input
            {...register("password", { required: true, pattern: { value: PASSWORD_REGEXP, message: PHRASES.incorrectPassword } })}
            type="password"
            placeholder="Password"
            autoComplete="new-password"
         />
         {errors?.password && <div className={s.error}>{errors.password.message}</div>}
         <Link replace={true} to="/reset" state={{ backgroundLocation: location }}>
            <div onClick={() => onChangeType("reset")} className={cn(s.info, s.right)}>
               Восстановить пароль
            </div>
         </Link>
         <Button>Войти</Button>
         <Link replace={true} to="/registration" state={{ backgroundLocation: location }}>
            <Button type="secondary">Регистрация</Button>
         </Link>
      </form>
   );
};

export default LoginForm;
