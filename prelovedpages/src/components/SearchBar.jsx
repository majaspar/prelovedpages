import './Components.css'
import searchIcon from '../assets/search-icon.svg'

export default function SearchBar() {
  return (
    <form className="nav__search">
    <input type="text" placeholder='Search'/>
    <img src={searchIcon} alt="search icon" />
    </form>
  )
}
