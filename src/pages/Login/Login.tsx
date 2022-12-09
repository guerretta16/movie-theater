import {useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from '../../components/Form/Form'
import { Loading } from '../../components/Loading/Loading'
import { useAuth } from '../../hooks/useAuth'

import './style.css'

const Login = () => {

  const { loading, messageError, login } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(typeof window.localStorage.tokValue !== 'undefined'){
      navigate("/home")
    }
  })

  if(loading){
    return <Loading />
  }

  return (
    <div className='login-container'>
      <Form 
        login={login}
        messageError={messageError}
      />
    </div>
  )
}

export { Login }