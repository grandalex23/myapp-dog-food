import React from "react";

import style from "./forminput.module.css";

const FormInput = React.forwardRef((props, ref) => {
   return <input className={style.input} ref={ref} {...props} />;
});

export default FormInput;
