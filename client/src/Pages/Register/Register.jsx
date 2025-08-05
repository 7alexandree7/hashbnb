import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
//import axios from 'axios'

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

   // if (redirect) {
      //  return <Navigate to={'/'} />
    //}

    return (
        <section className="flex items-center">
            <div className='w-full flex flex-col items-center gap-4 mx-auto max-w-[400px]'>
                <h1 className='text-3xl font-bold'>Faça seu login</h1>

                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
                    <input
                        className='w-full outline-none rounded-full px-4 py-2 border border-gray-300'
                        placeholder='your name'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                    <input
                        className='w-full outline-none rounded-full px-4 py-2 border border-gray-300'
                        placeholder='example@gmail.com'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    <input
                        className='w-full outline-none rounded-full px-4 py-2 border border-gray-300'
                        placeholder='********'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    <button
                        className='bg-primary-400 text-white rounded-full px-4 py-2 cursor-pointer'>
                        Registrar
                    </button>
                </form>

                <p>Ja possui uma conta? <Link className='underline font-semibold' to='/login'>Login</Link></p>
            </div>
        </section>
    )
}

export default Register
