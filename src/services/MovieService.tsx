import axios from 'axios'
import { apiKeyMain } from '../utils/ApiKey'

const popularMovieService = async () => {
    return(
        await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKeyMain}`)
        .then(response => response.data)
    )
}

export {
    popularMovieService
}