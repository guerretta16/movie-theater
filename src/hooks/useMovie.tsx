import { useState } from "react"
import { 
    popularMovieService,
    moviesByQueryService,
    movieCreditsService,
    movieDetailService,
    movieRecommendedService
 } from '../services/MovieService'
import { MovieInfo, Movie, MovieDetail, MovieCredits, Cast, Recommended, MovieRecommended } from "../interfaces/types"

interface MovieState {
    MoviesInitial: MovieInfo
    MovieInitial: MovieDetail
    MovieCredits: MovieCredits
    MovieRecomended: MovieRecommended
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

const INITIAL_VALUE_DET = {
    backdrop_path: "",
    homepage: "",
    id: 0,
    original_title: "",
    overview: "",
    poster_path: "",
    release_date: "",
    tagline: "",
    title: "",
    vote_average: 0
}

const INITIAL_VALUE_CRED = {
    id: 0,
    cast: Array<Cast>()
}

const INITIAL_VALUE_REC = {
    page: 0,
    results: Array<Recommended>(),
    total_pages: 0,
    total_results: 0
}

export const useMovie = () => {
    const[movies, setMovies] = useState<MovieState['MoviesInitial']>(INITIAL_VALUE)
    const[movie, setMovie] = useState<MovieState['MovieInitial']>(INITIAL_VALUE_DET)
    const[credits, setCredits] = useState<MovieState['MovieCredits']>(INITIAL_VALUE_CRED)
    const[recommended, setRecommended] = useState<MovieState['MovieRecomended']>(INITIAL_VALUE_REC)
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

    const movieDetail = (id:string) => {
        setLoading(true)
        setError(false)
        movieDetailService(id)
        .then(res => {
            const movieData = {
                backdrop_path: res.backdrop_path,
                homepage: res.homepage,
                id: res.id,
                original_title: res.original_title,
                overview: res.overview,
                poster_path: res.poster_path,
                release_date: res.release_date,
                tagline: res.tagline,
                title: res.title,
                vote_average: res.vote_average,
            }
            setMovie(movieData)
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

    const movieCredits = (id:string) => {
        setLoading(true)
        setError(false)
        movieCreditsService(id)
        .then(res => {
            const movieData = {
                id: res.id,
                cast: Array<Cast>()
            }

            res.cast.map((item: Cast, index:number) => {
                movieData.cast[index] = {
                    id: item.id,
                    name: item.name,
                    original_name: item.original_name,
                    profile_path: item.profile_path,
                    character: item.character
                }
            })

            setCredits(movieData)
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

    const movieRecommended = (id:string) => {
        setLoading(true)
        setError(false)
        movieRecommendedService(id)
        .then(res => {
            const movieData = {
                page: res.page,
                results: Array<Recommended>(),
                total_pages: res.total_pages,
                total_results: res.total_results
            }

            res.results.map((item: Recommended, index:number) => {
                movieData.results[index] = {
                    id: item.id,
                    title: item.title,
                    release_date: item.release_date,
                    vote_average: item.vote_average,
                    poster_path: item.poster_path
                }
            })

            setRecommended(movieData)
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

    return {
        movies,
        movie,
        credits,
        recommended,
        loading,
        error,
        messageError,
        popularMovies,
        moviesByQuery,
        movieDetail,
        movieCredits,
        movieRecommended
    }
}