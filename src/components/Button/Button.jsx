import cn from "classnames"
import s from "./style.module.css";

function Button({ text, type, onClick, children }) {
   return (
      <button text={text} onClick={onClick} className={cn(s.button, { [s.secondary]: type === "secondary", [s.primary]: type === "primary" })}>
         {children}
      </button>
   );
}

export default Button;