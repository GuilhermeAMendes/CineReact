import { Link } from "react-router-dom";
import useFetchFavorites from "../../hooks/useFetchFavorites";
import "./styles.css";
import { toast } from "react-toastify";

export default function Favorite() {
  let favorites = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

  const { favoritesInformation } = useFetchFavorites(favorites);

  const handleExcludeFavoriteMovie = (id) => {
    favorites = favorites.filter((fav) => fav != id);
    localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
    toast.success("Favorito removido com sucesso!");
  };

  return (
    <div className="my-movies">
      <h1>Meus filmes favoritos</h1>
      {favoritesInformation.length > 0 ? (
        <ul>
          {favoritesInformation.map((movie) => (
            <li key={movie.id}>
              <span>{movie.title}</span>
              <div>
                <Link to={`/Film/${movie.id}`}>Ver detalhes</Link>
                <button onClick={() => handleExcludeFavoriteMovie(movie.id)}>
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Você ainda não favoritou nenhum filme.</p>
      )}
    </div>
  );
}
