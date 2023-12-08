import './App.css'
import menuOpen from './assets/menu-open.svg'
import shoppingBasket from './assets/shopping-basket.svg'
import userIcon from './assets/user-icon.svg'
import SearchBar from './components/SearchBar'

export default function Navbar() {
  return (
    <nav>
      <div className="nav_wrapper margins flex">
        <div className="nav__buttons-group">
          <button className="nav__btn--menu flex"><img src={menuOpen} alt="open menu" /></button>
          <SearchBar />
        </div>
        <div className="page-title">Pre-Loved Pages</div>
        <div className="nav__buttons-group">
          <button className="nav__user">
            <img src={userIcon} alt="user icon" /></button>
          <button className="nav__basket">
            <img src={shoppingBasket} alt="shopping basket icon" /></button>
        </div>
      </div>
    </nav>
  )
}
