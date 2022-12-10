import React from 'react'
import { Cast } from '../../interfaces/types'
import './style.css'
import persona from '../../assets/img/persona.png'

interface ActorProps {
    cast: Cast
}

export const ActorCard = ({cast}:ActorProps) => {

    const path = () =>{
        if(cast.profile_path === null){
            return ""
        }
        else{
            return cast.profile_path
        }
    }

  return (
    <div className='actor-card'>
        <div className='actor-picture'>
            <img src={ path() !== "" ? `https://image.tmdb.org/t/p/w200/${cast.profile_path}`: persona} alt={cast.original_name}/>
        </div>
        <div className='actor-info'>
            <span>{cast.name}</span>
            <small>{cast.character}</small>
        </div>
    </div>
  )
}
