import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Account from './Pages/Account/Account'
import {  UserContextProvider } from './context/User/UserContext'

function App() {

  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login  />} />
            <Route path='/register' element={<Register />} />
            <Route path="/account/:subpage?" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  )
}

export default App
