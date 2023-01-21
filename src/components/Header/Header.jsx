import s from "./style.module.css";

export default function Header({ children }) { //** что такое children? */
   return <header className={s.header}>{children}</header>;
}