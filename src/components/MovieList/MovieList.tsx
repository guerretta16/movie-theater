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
             movies.results.length > 0 ? movies.results.map((movie, index) => (
                <MovieCard key={index} movie={movie}/>
            )):<div className='empty'>Empty List</div>
        }
    </div>
  )
}
