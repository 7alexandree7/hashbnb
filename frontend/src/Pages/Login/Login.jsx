import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import { useUserContext } from '../../Context/UseContext/UseContext'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const { user, setUser } = useUserContext();

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (email && password) {
            try {
                const { data: userDoc } = await axios.post(`/v1/users/login`, {
                    email,
                    password
                })
                setEmail('')
                setPassword('')
                setUser(userDoc)
                setRedirect(true)
            }
            catch (error) {
                console.log('Erro ao fazer login', error)
            }
        }
    }

    if (redirect || user) {
        return <Navigate to={'/'} />
    }

    return (
        <section className='flex items-center justify-center'>
            <div className="w-full max-w-[400px] flex flex-col items-center space-y-4">
                <h1 className='text-3xl font-bold'>Faça seu Login</h1>

                <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full'>
                    <input
                        className='w-full rounded-full border border-gray-300 px-4 py-2 outline-none'
                        type="email"
                        placeholder='example@gmail.com'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className='w-full rounded-full border border-gray-300 px-4 py-2 outline-none'
                        type="password"
                        placeholder='********'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='text-white font-bold cursor-pointer rounded-full w-full bg-primary-400 px-4 py-2 outline-none'>Login</button>
                </form>

                <p>Ainda nao possui uma conta? <Link className='underline font-semibold' to={'/register'}>Cadastre-se</Link></p>
            </div>
        </section>
    )

}

export default Login
