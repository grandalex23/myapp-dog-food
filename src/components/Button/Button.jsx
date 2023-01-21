import cn from "classnames"
import s from "./style.module.css";

function Button({ text, type }) {
   return <button className={cn(s.btn, { [s.primary]: type === "primary", [s.secondary]: type === "secondary" })}>{text}</button>;
}

export default Button;