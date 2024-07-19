import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import Loading from "../../Components/Loading";

function Film() {
  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const loadFilms = async () => {
      try {
        const response = await api.get(`/movie/${id}`, {
          params: {
            api_key: "1b5ca90eb8a18dbc333f9d00ebaf6f8d",
            language: "pt-BR",
          },
        });
        setFilm(response.data || []);
        setLoading(false);
      } catch (e) {
        console.log(
          `Ocorreu um erro ao tentar consumir os dados da API\nErro ${e.name}: ${e.message}`
        );
      }
    };
    loadFilms();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="filmsList">
        <div className="cardFilm">
          <article>
            <img
              src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
              alt="capa do filme"
              className="poster"
            ></img>
            <div className="filmDetails">
              <strong className="title">{film.title}</strong>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Film;
