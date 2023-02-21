import React from "react";
import s from "./style.module.css";

const Input = React.forwardRef((props, ref) => {
   return <input className={s.input} ref={ref} {...props} />;
});

export default Input;
