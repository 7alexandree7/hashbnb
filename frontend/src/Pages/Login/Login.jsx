import React, { useState } from 'react'
import axios from 'axios'
import { Link, Navigate } from "react-router-dom";
import '../../base/BASE_URL.JS';
import { CustomHookUserContext } from '../../hooks/CustomHookUserContext';

const Login = () => {

  const { user, setUser } = CustomHookUserContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  if (redirect || user) {
    return <Navigate to="/" />
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (email && password)  {

      try {
        const {data: userDoc} = await axios.post('/users/login', {
          email,
          password
        })
        setUser(userDoc)
        setRedirect(true)
        
      } catch (error) {
        alert(`Erro ao fazer login: ${error.response.data}`)
      }
    }

    else {
      alert('Preencha todos os campos!')
    }
  }

  if (redirect) {
    return <Navigate to="/" />
  }

  return (
    <>
      <section className='flex items-center'>
        <div className='mx-auto w-full max-w-96 gap-4 flex flex-col items-center'>
          <h1 className='text-3xl font-bold'>Faça seu login</h1>

          <form className='flex flex-col w-full gap-2' onSubmit={handleSubmit}>
            <input
              type="email"
              required
              className='border border-gray-300 rounded-full px-4 py-2'
              placeholder='examplo@exemplo.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              required
              autoComplete='on'
              className='border border-gray-300 rounded-full px-4 py-2'
              placeholder='********'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className='cursor-pointer bg-primary-400 rounded-full px-4 py-2 text-white font-bold'>Login</button>
          </form>

          <p>Ainda não possui uma conta? <Link className='font-semibold underline' to='/register'>Registre-se aqui!</Link> </p>
        </div>
      </section>
    </>
  )
}

export default Login
