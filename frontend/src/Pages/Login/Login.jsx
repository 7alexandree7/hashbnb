import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <section className='flex items-center justify-center'>
            <div className="w-full max-w-[400px] flex flex-col items-center space-y-4">
                <h1 className='text-3xl font-bold'>Faça seu Login</h1>

                <form className='flex flex-col gap-2 w-full'>
                    <input
                        className='w-full rounded-full border border-gray-300 px-4 py-2 outline-none'
                        type="email"
                        placeholder='example@gmail.com'
                        required
                    />
                    <input
                        className='w-full rounded-full border border-gray-300 px-4 py-2 outline-none'
                        type="password"
                        placeholder='********'
                        required
                    />
                    <button className='text-white font-bold cursor-pointer rounded-full w-full bg-primary-400 px-4 py-2 outline-none'>Login</button>
                </form>

                <p>Ainda nao possui uma conta? <Link className='underline font-semibold' to={'/register'}>Cadastre-se</Link></p>
            </div>
        </section>
    )
}

export default Login
