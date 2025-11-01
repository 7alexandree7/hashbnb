import axios from "axios"
import Header from "./Components/Header/Header"
import Home from "./Pages/Home/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import Account from "./Pages/Account/Account"
import { UseContextProvider } from "./Context/UseContextProvider/UseContextProvider"

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL
axios.defaults.withCredentials = true

function App() {

  return (
    <UseContextProvider>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account/:subpage?" element={<Account />} />
        </Routes>
      </BrowserRouter>

    </UseContextProvider>
  )
}

export default App
