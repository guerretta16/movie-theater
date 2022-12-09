import React, { useState } from 'react'
import { loginService } from '../services/AuthService'
import { User } from '../interfaces/types'
import { useLocalStorage } from './useLocalStorage'
import { useNavigate } from 'react-router-dom'

interface LoginState {
  token: string
  loading: boolean
  error: boolean
  messageError: string
}

function useAuth () {

  const [loading, setLoading] = useState<LoginState['loading']>(false)
  const [error, setError] = useState<LoginState['error']>(false)
  const [messageError, setMessageError] = useState<LoginState['messageError']>("")
  const [token, setToken] = useLocalStorage("tokValue", undefined)
  const navigate = useNavigate();

  function login (userInfo: User){
    setLoading(true)
    setError(false)
    loginService(userInfo)
    .then(res => {
        setToken(res.data.token)
        setLoading(false)
        setError(false)
        setMessageError("")
    })
    .catch(err => {
      setLoading(false)
      setError(true)
      setMessageError("Email or password was not correct")
    })
  }

  function logOut () {
    setLoading(true)
    window.localStorage.removeItem("tokValue")
    navigate("/");
    setLoading(false)
  }

  return {
    login,
    logOut,
    loading,
    messageError
  }
}

export { useAuth }