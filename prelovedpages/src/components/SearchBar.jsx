import './Components.css'
import searchIcon from '../assets/search-icon.svg'

export default function SearchBar() {
  return (
    <form className="nav__search shadow-nav">
    <input type="text" placeholder='Search' role="search"/>
    <img src={searchIcon} alt="search icon" />
    </form>
  )
}
