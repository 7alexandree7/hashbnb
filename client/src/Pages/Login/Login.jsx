import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <section className="flex items-center">
            <div className='w-full flex flex-col items-center gap-4 mx-auto max-w-[400px]'>
                <h1 className='text-3xl font-bold'>Faça seu login</h1>

                <form className='w-full flex flex-col gap-4'>
                    <input
                        className='w-full outline-none rounded-full px-4 py-2 border border-gray-300'
                        placeholder='example@gmail.com'
                        type="text"
                        required />
                    <input
                        className='w-full outline-none rounded-full px-4 py-2 border border-gray-300'
                        placeholder='********'
                        type="text"
                        required />
                    <button
                        className='bg-primary-400 text-white rounded-full px-4 py-2 cursor-pointer'>
                        Login
                    </button>
                </form>

                <p>Ainda não possui uma conta? <Link className='underline font-semibold' to='/register'>Registre-se aqui!</Link></p>
            </div>
        </section>
    )
}

export default Login
