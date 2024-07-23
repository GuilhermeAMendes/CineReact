import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import Card from "../../Components/Card";
import LoadingDetails from "../../Components/LoadingDetails";
import "./style.css";

function Film() {
  const [film, setFilm] = useState([]);
  const [videos, setVideos] = useState([]);
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

  useEffect(() => {
    const getvideos = async () => {
      try {
        const response = await api.get(`/movie/${id}/videos`, {
          params: {
            api_key: "1b5ca90eb8a18dbc333f9d00ebaf6f8d",
            language: "pt-BR",
          },
        });
        setVideos(response.data.results.splice(0, 3) || []);
        console.log(response.data.results);
      } catch (e) {
        console.log(
          `Ocorreu um erro ao tentar consumir os dados da API\nErro ${e.name}: ${e.message}`
        );
      }
    };
    getvideos();
  }, [id]);

  if (loading) {
    return <LoadingDetails />;
  }

  return (
    <div className="container">
      <div className="detailsCardContainer">
      <Card item={film} />
      <h1>Título: teste</h1>
      </div>
{/*       
      <div className="filmDetails">
        <strong className="title">{film.title}</strong>
      </div> */}
      <div className="videoContainer">
        {videos.map((item, index) => {
          return (
            <div key={index} className="videoList">
              <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                title={item.name}
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                // allowFullScreen
              className="video"></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Film;
