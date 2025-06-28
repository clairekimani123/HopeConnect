import { Outlet, useNavigate } from "react-router"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { useEffect, useState } from "react"

function App() { 
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
    <Navbar isLoggedIn ={isLoggedIn}/>
    <main>
      <Outlet context={{setIsLoggedIn, projects}}/>
    </main>
    <Footer/>
    </>
  )
}

export default App