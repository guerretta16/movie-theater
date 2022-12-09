import React, { useState } from 'react'
import { User } from '../../interfaces/types'
import Logo from '../../assets/img/logo.png'
import './style.css'

interface FormState {
  InputValues: User
}

interface LoginProps{
  login: (userInfo: User) => void
  messageError: string
}

export const Form = ({login, messageError}:LoginProps) => {

  const [formValue, setFormValue] = useState<FormState["InputValues"]>({
    email: "",
    password: ""
  })

  const handleSubmit = (e:React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    login({email: formValue.email, password: formValue.password});
    setFormValue({email:"", password:""})
  }
  
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className='form-login' onSubmit={handleSubmit}>
        <div className='form-group'>
            <img className='form-logo' src={Logo} alt="logo"/>
        </div>
        <div className='form-group'>
           {messageError != ""?<span className='form-error'>{messageError}</span>:""} 
        </div>
        <div className='form-group'>
            <input onChange={handleChange} className='form-input' type="email" name="email" value={formValue.email} placeholder="Email" required/>
        </div>
        <div className='form-group'>
            <input onChange={handleChange} className='form-input' type="password" name="password" value={formValue.password} placeholder="Password" required/>
        </div>
        <div className='form-group'>
            <input className='form-btn' type="submit" value="Login"/>
        </div>
    </form>
  )
}
