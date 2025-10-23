import Header from "./Components/Header/Header"
import Home from "./Pages/Home/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./Pages/Login/Login"


function App() {

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
