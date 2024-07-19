import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Loading from "../../Components/Loading";
import "./style.css";

function Home() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFilms = async () => {
      try {
        const response = await api.get("movie/now_playing", {
          params: {
            api_key: "1b5ca90eb8a18dbc333f9d00ebaf6f8d",
            language: "pt-BR",
            page: 1,
          },
        });
        setFilms(response.data.results || []);
        setLoading(false);
      } catch (e) {
        console.log(
          `Ocorreu um erro ao tentar consumir os dados da API\nErro ${e.name}: ${e.message}`
        );
      }
    };
    loadFilms();
  }, []);

  if(loading){
    return(
      <Loading/>
    );
  }

  return (
    <div className="container">
      <div className="filmsList">
        {films.map((item) => {
          return (
            <div key={item.id} className="cardFilm">
              <article>
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt="capa do filme"
                  className="poster"
                ></img>
                <div className="filmDetails">
                  <strong className="title">{item.title}</strong>
                  <Link to={`/film/${item.id}`} className="btn">
                    Ver mais...
                  </Link>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
