import "./App.css";
import { Link } from "react-router-dom";
import menuOpen from "./assets/hamburger.png";
import shoppingBasket from "./assets/shopping-basket.svg";
import userIcon from "./assets/user-icon.svg";
import SearchBar from "./components/SearchBar";
import ButtonNav from "./components/ButtonNav";

export default function Navbar() {
  return (
    <nav>
      <div className="margins flex justify-between items-center">
        <div className="flex items-center flex-nowrap gap-4">
          <button className="flex">
            <ButtonNav text={<img src={menuOpen} alt="open menu" />} />
          </button>
          <SearchBar />
        </div>
        <Link to="/"><div className="page-title">Pre-Loved Pages</div></Link>
        <div className="flex items-center flex-nowrap gap-4 justify-end">
          <button className="">
            <ButtonNav text={<img src={userIcon} alt="user icon" />} />
          </button>
          <button className="nav__basket">
            <ButtonNav
              text={<img src={shoppingBasket} alt="shopping basket icon" />}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
