import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
