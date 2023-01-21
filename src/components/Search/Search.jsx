import { ReactComponent as Icon } from "../../assets/images/ic-search.svg"
import "./styleSearch.css"

function Search({ onChange, onBtnSearchClick, value }) {
   return (
      <div className="search">
         <input onChange={(el) => onChange(el.target.value)} className="search__input" placeholder="Search"></input>
         <Icon className="search__icon" onClick={onBtnSearchClick}></Icon>
      </div>
   );
}

export default Search;