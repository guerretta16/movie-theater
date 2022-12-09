import React from 'react'
import Lottie from "lottie-react"
import LoadingSpinner from '../../assets/loading-spinner.json'
import './style.css'

export const Loading = () => {
  return (
    <div className='loading'>
        <Lottie
            className='loading-spinner' 
            animationData={LoadingSpinner}
        />
    </div>
  )
}
