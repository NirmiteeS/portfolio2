import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact'

import Footer from './components/Footer'

function App() {

  return (
    <>

      <Hero/>
      <Nav/>
      <About/> 
      <Skills/> 
      <Projects/> 
      <Contact/>  
      <Footer/>
    </>
  )
}

export default App
