import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Phone from './Components/Phone'
import Images from './Components/Images'
import Footer from './Components/Footer'

function App() {

  return (
    <>
     <Navbar/>
     <Header/>
     <Hero/>
     <Phone/>
     <Images/>
     <Footer/>
    </>
  )
}

export default App
