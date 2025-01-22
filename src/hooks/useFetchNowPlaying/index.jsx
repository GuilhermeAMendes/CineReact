import useSWR from "swr";
import api from "../../services/api";

export default function useFetchNowPlaying() {
  const loadNowPlaying = async () => {
    try {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "1b5ca90eb8a18dbc333f9d00ebaf6f8d",
          language: "pt-BR",
          page: 1,
        },
      });
      return response.data.results || [];
    } catch (error) {
      console.log(
        `Ocorreu um erro ao tentar consumir os dados da API\nErro ${error.name}: ${error.message}`
      );
    }
  };

  const { data, isloading, error } = useSWR(
    "/movie/now_playing",
    loadNowPlaying,
    {
      revalidateOnFocus: false,
    }
  );

  return {
    movies: data,
    isloading,
    error,
  };
}
