import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";

//import FormInput from "./FormInput";
import Input from "../Input/Input";
import Button from "../Button/Button";

import { EMAIL_REGEXP, PASSWORD_REGEXP, PHRASES } from "../../utils/constants";
import s from "./style.module.css";

const RegistrationForm = (onChangeType) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ mode: "onBlur" });

   const onSubmit = (data) => {
      console.log(data);
   };

   const location = useLocation();

   return (
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
         <h2 className={s.title}>Регистрация</h2>
         <Input
            {...register("email", { required: true, pattern: { value: EMAIL_REGEXP, message: PHRASES.incorrectEmail } })}
            type="text"
            placeholder="Email"
            autoComplete="off"
         />
         {errors?.email && <div className={s.error}>{errors.email.message}</div>}
         <Input
            {...register("password", { required: true, pattern: { value: PASSWORD_REGEXP, message: PHRASES.incorrectPassword } })}
            type="password"
            placeholder="Password"
            autoComplete="new-password"
         />
         {errors?.password && <div className={s.error}>{errors.password.message}</div>}
         <div className={s.info}>Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой конфиденциальности и соглашаетесь на информационную рассылку.</div>
         <Button>Зарегистрироваться</Button>
         <Link replace={true} to="/login" state={{ backgroundLocation: location }}>
            <Button type="secondary">Войти</Button>
         </Link>
      </form>
   );
};

export default RegistrationForm;
