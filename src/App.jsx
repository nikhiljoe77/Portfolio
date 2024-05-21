import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Body from './components/Body.jsx'


function App() {
 

  return (
    <>
    <Navbar className="navbar"/>
    <Body/>
      
    </>
  )
}

export default App
