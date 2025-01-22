import "./style.css";
import { Link } from "react-router-dom";

function Card({ item }) {
  const films = Array.isArray(item) ? item : [item];

  return (
    <div className="filmsList">
      {films.map((film) => (
        <div key={film?.id} className="cardFilm">
          <article>
            <img
              src={`https://image.tmdb.org/t/p/original/${film?.poster_path}`}
              alt="capa do filme"
              className="poster"
            />
            <div className="filmDetails">
              <strong className="title">{film?.title}</strong>
              <Link to={`/film/${film?.id}`} className="btn">
                Ver mais...
              </Link>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}

export default Card;
