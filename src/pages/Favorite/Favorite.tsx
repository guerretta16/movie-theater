import React from 'react'
import { MovieList } from '../../components/MovieList/MovieList'
import { NavigateButton } from '../../components/NavigateButton/NavigateButton'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import './style.css'

export const Favorite = () => {
    const[favorites, setFavorites] = useLocalStorage('favMovies', [])
    const favObject = {
        page: 0,
        results: favorites,
        total_pages: 0,
        total_results:0
    }
  return (
    <div className='favorite'>
        <div className="favorite-header">
          <NavigateButton />
          <button className='favorite-btn' onClick={() => setFavorites([])}>Clear List</button>
        </div>
        <div className='favorite-body'>
            <MovieList movies={favObject}/>
        </div>
    </div>
  )
}
