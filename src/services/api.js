
import axios from "axios";

//BASE URL: 
//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=1b5ca90eb8a18dbc333f9d00ebaf6f8d&language=pt-BR


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;