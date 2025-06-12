/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const UserContext = createContext(null)


export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const axiosGet = async () => {
            const { data } = await axios.get("/users/profile")
            setUser(data)
        }
        axiosGet()
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}


