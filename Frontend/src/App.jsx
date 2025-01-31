import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer'; 
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';





const App = () => {
  return (
    <>
    <Toaster/>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
