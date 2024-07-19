import "./style.css";
import { Link } from "react-router-dom";

function NotFound(){
    return(<div className="notFound">
        <h1>Erro 404</h1>
        <h2>Ops! essa página não existe ou não pode ser encontrada.</h2>
        <Link to="/" className="btn">Veja todos os filmes!</Link>
    </div>);
};

export default NotFound;