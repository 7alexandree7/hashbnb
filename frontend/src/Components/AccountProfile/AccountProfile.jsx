import React, { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { CustomHookUserContext } from '../../hooks/CustomHookUserContext'

const AccountProfile = () => {

    const { user, setUser } = CustomHookUserContext()
    const [redirect, setRedirect] = useState(false)

    if (redirect || !user) {
        return <Navigate to="/" />
    }

    const handleLogout = async () => {
        try {
            const { data } = await axios.post("/users/logout");
            setUser(null)
            setRedirect(true);
            console.log(data)
        }
        catch (error) {
            console.error("Error during logout:", error);
        }
    }

    return (
        <div className='flex flex-col gap-2 items-center'>
            <p>Logado com o usuario: {user?.name} email: {user?.email} </p>
            <button
                onClick={handleLogout}
                className="min-w-44 rounded-full bg-primary-400  text-white px-4 py-2 cursor-pointer transition">
                Logout
            </button>
        </div>
    )
}

export default AccountProfile
