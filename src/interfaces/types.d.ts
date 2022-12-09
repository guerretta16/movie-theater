
interface User {
    email: string
    password: string
}

interface Token {
    token: string
}

interface LocalStorage{
    key: string | null
    defaultValue: string | undefined
}

interface Movie {
    adult: boolean
    backdrop_path: string
    genre_ids: Array<number>
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

interface MovieInfo {
    page: number
    results: Array<Movie>
    total_pages: number
    total_results: number
}

export { User, Token, LocalStorage, MovieInfo, Movie }