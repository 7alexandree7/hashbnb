import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../../Context/UseContext/UseContext";


const AccountProfile = () => {

  const [redirect, setRedirect] = useState(false);
  const { user, setUser } = useUserContext();

  const logout = () => {
    
    try {
      const { data } = axios.post('/v1/users/logout')
      setUser(null)
      setRedirect(true)
      console.log(data)

    } catch (error) {
      alert('Erro ao fazer logout', error)

    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <p>{user ? `Logado como ${user?.name} (${user?.email})` : ``}</p>
      <button onClick={logout} className="min-w-46 mt-1 bg-primary-400 text-white px-4 py-2 rounded-full cursor-pointer">Logout</button>
    </div>
  )
}

export default AccountProfile
