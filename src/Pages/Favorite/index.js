import useFetchFavorites from "../../hooks/useFetchFavorites";

export default function Favorite() {
  const favorites = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

  const { favoritesInformation } = useFetchFavorites(favorites);

  return (
    <div>
      <h1>Meus filmes favoritos</h1>
      {favoritesInformation.length > 0 ? (
        <ul>
          {favoritesInformation.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
            </li>
          ))}
        </ul>
      ) : (
        <p>Você ainda não favoritou nenhum filme.</p>
      )}
    </div>
  );
}
