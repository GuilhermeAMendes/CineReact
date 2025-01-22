import useSWR from "swr";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function useFetchTrailers(id) {
  const navigation = useNavigate();

  const loadTrailers = async () => {
    try {
     const response = await api.get(`/movie/${id}/videos`, {
       params: {
         api_key: "1b5ca90eb8a18dbc333f9d00ebaf6f8d",
         language: "pt-BR",
       },
     });
      return response.data.results.slice(0,3);
    } catch (error) {
      console.log(
        `Ocorreu um erro ao tentar consumir os dados da API\nErro ${error.name}: ${error.message}`
      );
      navigation("/", {
        replace: true,
      });
    }
  };

  const { data, isLoading, error } = useSWR(
    `/movie/${id}/videos`,
    loadTrailers,
    {
      revalidateOnFocus: false,
    }
  );

  return {
    trailers: data,
    isLoading,
    error,
  };
}
