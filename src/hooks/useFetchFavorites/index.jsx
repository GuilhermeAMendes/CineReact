import useSWR from "swr";
import api from "../../services/api";


export default function useFetchFavorites(favorites) {
    
    const loadFavorites = async () => {
        try {
            const promises = favorites.map((id) =>
                api.get(`/movie/${id}`, {
                    params: {
                        api_key: "1b5ca90eb8a18dbc333f9d00ebaf6f8d",
                        language: "pt-BR",
                    },
                })
            );
             const responses = await Promise.all(promises);
            return responses.map(res => res.data);
        } catch (error) {
            console.error("Erro ao buscar filmes favoritos:", error);
        }
    }

    const { data } = useSWR(`/movie/`, loadFavorites, {
        revalidateOnFocus: true
    });

    return {
        favoritesInformation: data || []
    }

}
