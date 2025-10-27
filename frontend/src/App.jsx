import axios from "axios"
import Header from "./Components/Header/Header"
import Home from "./Pages/Home/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./Pages/Login/Login"
import { useState } from "react"
import Register from "./Pages/Register/Register"

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL


function App() {

  const [user, setUser] = useState(null)

  return (
    <>

      <BrowserRouter>
        <Header user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
