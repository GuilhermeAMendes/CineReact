import React, { useState, useEffect } from "react";
import api from "../../services/api";

function Home() {
  const [films, setFilms] = useState([]);

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
      } catch (e) {
        console.log(
          `Ocorreu um erro ao tentar consumir os dados da API\nErro ${e.name}: ${e.message}`
        );
      }
    };
    loadFilms();
  }, []);

  return (
    <div>
      {films.map(item => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
