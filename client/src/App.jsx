import axios from 'axios'
import Header from "./Components/Layout/Header/Header"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL || 'http://localhost:3000';
axios.defaults.withCredentials = true; 

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const axiosGet = async () => {
      const { data } = await axios.get('/users/profile')
      setUser(data)
    }
    axiosGet()
  },[])

  return (
    <>
      <BrowserRouter>
        <Header  user={user}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path='/register' element={<Register setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
