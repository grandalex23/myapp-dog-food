import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

import Input from "../Input/Input";
import Button from "../Button/Button";

import { EMAIL_REGEXP, PHRASES } from "../../utils/constants";
import s from "./style.module.css";

const ResetForm = ({ handleRequestAuth }) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ mode: "onBlur" });

   const location = useLocation();

   // const onSubmit = (data) => {
   //    console.log(data);
   // };

   return (
      <form className={s.form} onSubmit={handleSubmit(handleRequestAuth)}>
         <h2 className={s.title}>Восстановление пароля</h2>
         <div className={s.info}>Для получения временного пароля необходимо ввести email, указанный при регистрации.</div>
         <Input
            {...register("email", { required: true, pattern: { value: EMAIL_REGEXP, message: PHRASES.incorrectEmail } })}
            type="text"
            placeholder="Email"
            autoComplete="off"
         />
         {errors?.email && <div className={s.error}>{errors.email.message}</div>}
         <div className={s.info}>Срок действия временного пароля 24 ч.</div>
         <Button>Отправить</Button>
         <Link replase={true} to="/login" state={{ backgroundLocation: location }}>
            <Button type="secondary">Войти</Button>
         </Link>
      </form>
   );
};

export default ResetForm;
