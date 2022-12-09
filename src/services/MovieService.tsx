import axios from 'axios'
import { apiKeyMain } from '../utils/ApiKey'

const popularMovieService = async () => {
    return(
        await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKeyMain}`)
        .then(response => response.data)
    )
}

const moviesByQueryService = async (query:string) => {
    return(
        await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKeyMain}&query=${query}`)
        .then(response => response.data)
    )
}

export {
    popularMovieService,
    moviesByQueryService
}