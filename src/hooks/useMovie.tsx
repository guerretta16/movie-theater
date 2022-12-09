import { useState } from "react"
import { 
    popularMovieService,
    moviesByQueryService
 } from '../services/MovieService'
import { MovieInfo, Movie } from "../interfaces/types"

interface MovieState {
    MovieInitial: MovieInfo
    Loading: boolean
    Error: boolean
    MessageError: string
}

const INITIAL_VALUE = {
    page: 0,
    results: Array<Movie>(),
    total_pages: 0,
    total_results: 0
}

export const useMovie = () => {
    const[movies, setMovies] = useState<MovieState['MovieInitial']>(INITIAL_VALUE)
    const[loading, setLoading] = useState<MovieState['Loading']>(false)
    const[error, setError] = useState<MovieState['Error']>(false)
    const[messageError, setMessageError] = useState<MovieState['MessageError']>("")

    const popularMovies = () => {
        setLoading(true)
        setError(false)
        popularMovieService()
        .then(res => {
            setMovies(res)
            setLoading(false)
            setMessageError("")
        })
        .catch(err => {
            setError(true)
            setLoading(false)
            setMessageError("Error")
            console.log(err.response)
        })
    }

    const moviesByQuery = (query:string) =>{
        setLoading(true)
        setError(false)
        moviesByQueryService(query)
        .then(res => {
            setMovies(res)
            setLoading(false)
        })
        .catch(err => {
            setError(true)
            setLoading(false)
            setMessageError("Error")
            console.log(err.response)
        })
    }

    return {
        movies,
        loading,
        error,
        messageError,
        popularMovies,
        moviesByQuery
    }
}