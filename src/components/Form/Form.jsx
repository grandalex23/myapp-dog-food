import React, { useState, useRef } from "react";

import style from "./style.module.css";

const Form = ({ onFormSubmit }) => {
   const [formData, setFormData] = useState({
      name: "",
      lastName: "",
      password: "",
   });

   // const onInputChange = (event) => {
   //    setFormData({ ...formData, [event.target.name]: event.target.value });
   // };

   const onSubmit = (e) => {
      e.preventDefault();
      console.log(inputRef.current.value);
      onFormSubmit(formData);
   };

   const inputRef = useRef();

   return (
      <form className={style.form} onSubmit={onSubmit}>
         Enter your data:
         <input type="text" name="name" ref={inputRef}></input>
         {/* <input type="text" name="name" placeholder="Name" value={formData.name} onChange={onInputChange} /> */}
         {/* <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={onInputChange} /> */}
         {/* <input type="password" name="password" placeholder="Password" value={formData.password} onChange={onInputChange} /> */}
         <button type="submit">Отправить</button>
      </form>
   );
};

export default Form;
