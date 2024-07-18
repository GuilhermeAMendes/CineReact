import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header>
      <h1>CineReact</h1>
      <Link to="/">Home</Link>
      <Link to="/Film">Filmes</Link>
    </header>
  );
}

export default Header;
