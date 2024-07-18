import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header>
      <Link to="/" className="logo">CineReact</Link>
      <Link to="/Favorite" className="favorite">Meus Filmes</Link>
    </header>
  );
}

export default Header;
