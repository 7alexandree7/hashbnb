import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import axios from 'axios'

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const axiosGet = async () => {
      const { data }= await axios.get("/users/profile")
      setUser(data)
    }
    axiosGet()
  },[])

  return (
    <>
      <BrowserRouter>
        <Header user={user} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login user={user} setUser={setUser} />} />
          <Route path='/register' element={<Register setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
