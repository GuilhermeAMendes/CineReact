import { useParams } from "react-router-dom";
import LoadingDetails from "../../Components/LoadingDetails";
import "./style.css";
import useFetchMovie from "../../hooks/useFetchMovies";
import useFetchTrailers from "../../hooks/useFetchTrailers";
import { toast } from "react-toastify";

export default function Film() {
  const { id } = useParams();
  const { movies, isLoading } = useFetchMovie(id);
  const { trailers } = useFetchTrailers(id);

  const handleSaveMovie = () => {
    const favorites = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

    const hasMovies = favorites.some((fav) => fav === movies.id);
    if (hasMovies) {
      alert("esse filme já está na lista")
      return
    };

    const updatedFavorites = [...favorites, id];
    localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
    toast.success("Filme salvo com sucesso!");
  };

  if (isLoading) return <LoadingDetails />;

  return (
    <div className="container">
      <div className="detailsCardContainer">
        <img
          src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
          alt="backdrop de divulgação do filme"
          className="posterDetails"
        ></img>
        <div className="favoriteContainerButton">
          <img
            src="/images/heart.png"
            alt="icone de coração"
            className="favoriteIcon"
            onClick={handleSaveMovie}
          ></img>
        </div>
        <div className="detailsFilm">
          <h2 className="title">{movies?.title}</h2>
          <p>{movies?.overview}</p>
          <h2 className="average">
            Avaliação: {movies?.vote_average.toFixed(1)} / 10.
          </h2>
        </div>
      </div>
      <div className="videoContainer">
        {trailers?.map((item, index) => (
          <div key={index} className="videoList">
            <iframe
              src={`https://www.youtube.com/embed/${item.key}`}
              title={item.name}
              className="video"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
