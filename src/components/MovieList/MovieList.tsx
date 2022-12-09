import React from 'react'
import { MovieInfo } from '../../interfaces/types'
import { MovieCard } from '../MovieCard/MovieCard'
import './style.css'
interface MovieProp {
    movies: MovieInfo
}

export const MovieList = ({movies}:MovieProp) => {
  return (
    <div className='movieList'>
        {
             movies && movies.results.map((movie, index) => (
                <MovieCard key={index} movie={movie}/>
            ))
        }
    </div>
  )
}
