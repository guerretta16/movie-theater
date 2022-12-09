import Lottie from 'lottie-react'
import NotFoundPageAnimated from '../../assets/not-found-page.json'
import { NavigateButton } from '../../components/NavigateButton/NavigateButton'
import './style.css'

export const NotFoundPage = () => {
  return (
    <div className='notFoundPage'>
        <NavigateButton />
        <Lottie
            className='notFoundPage-animated'
            animationData={NotFoundPageAnimated}
        />
    </div>
  )
}
