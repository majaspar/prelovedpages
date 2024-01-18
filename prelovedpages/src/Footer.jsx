import "./App.css";
import { Link } from "react-router-dom";
import { colors } from "./pages/homepage/LatestBooks";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__wrapper margins mt-4">
        <div>
          <h5 className="mb-4">Navigaton</h5>
          <div
            className="Footer__hr"
            style={{ backgroundColor: colors.pink }}
          />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/stylespage">Selcetor Styles</Link>
            </li>
            <li>
              <Link to="/genre">Categories</Link>
            </li>
            <li>
              <Link to="/authors">List of Authors</Link>
            </li>
            <li>
              <Link to="/books">List of Books</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4">Admin</h5>
          <div
            className="Footer__hr"
            style={{ backgroundColor: colors.yellow }}
          />
          <ul>
            <li>
              <Link to="/admin">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/newauthor">New Author</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4">Social</h5>
          <div
            className="Footer__hr"
            style={{ backgroundColor: colors.blue }}
          />
        </div>
      </div>
      <div className="hr mt-4 margins">
        <hr />
      </div>
      <div className="center mb-4 mt-4">
        &copy;{" "}
        <Link to="https://lenaesposito.co.uk" target="_blank">
          Lena Esposito
        </Link>{" "}
        {new Date().getFullYear()}
      </div>
    </footer>
  );
}
