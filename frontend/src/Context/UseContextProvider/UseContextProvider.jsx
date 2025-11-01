import { UserContext } from "../UseContext/UseContext";
import { useState, useEffect } from "react";
import axios from "axios";

export const UseContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const axiosGetUser = async () => {
        const { data } = await axios.get('/v1/users/profile')
        setUser(data)
    }

      useEffect(() => {
        axiosGetUser()
      }, [])
    

    return (

        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>

    )
}
