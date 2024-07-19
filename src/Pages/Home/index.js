import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Loading from "../../Components/Loading";
import Card from "../../Components/Card";
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

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <Card item={films} />
    </div>
  );
}

export default Home;
