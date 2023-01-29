import cn from "classnames"
import style from "./style.module.css";

function Button({ text, type, onClick }) {
   return <button onClick={onClick} className={cn(style.btn, { [style.primary]: type === "primary", [style.secondary]: type === "secondary" })}>{text}</button>;
}

export default Button;